const express = require("express");
const next = require("next");
const compression = require("compression");
const LRUCache = require("lru-cache");
const path = require("path");
const fs = require("fs");
const cors = require("cors");
const helmet = require("helmet");
const dotenv = require("dotenv");

const { createReadStream } = fs;

dotenv.config();

const router = require("./routes");
const logger = require("./utils/logger");

const isDev = process.env.NODE_ENV !== "production";
const isProd = !isDev;

const customHost = process.env.HOST;
const host = customHost || null;
const prettyHost = customHost || "localhost";
const port = parseInt(process.env.FRONTEND_PORT, 10) || 3000;

const app = next({ dev: isDev });

const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60 // 1hour
});

const getCacheKey = function getCacheKey(req) {
  return `${req.url}`;
};

const renderAndCache = function renderAndCache(
  req,
  res,
  pagePath,
  queryParams
) {
  const key = getCacheKey(req);

  if (ssrCache.has(key) && !isDev) {
    res.send(ssrCache.get(key));
    return;
  }

  app
    .renderToHTML(req, res, pagePath, queryParams)
    .then(html => {
      if (!isDev) {
        ssrCache.set(key, html);
      }

      res.send(html);
    })
    .catch(err => {
      app.renderError(err, req, res, pagePath, queryParams);
    });
};

const routerHandler = router.getRequestHandler(
  app,
  ({ req, res, route, query }) => {
    renderAndCache(req, res, route.page, query);
  }
);

app.prepare().then(() => {
  const server = express();

  server.use(compression({ threshold: 0 }));
  server.use(
    cors({
      origin:
        prettyHost.indexOf("http") !== -1 ? prettyHost : `http://${prettyHost}`,
      credentials: true
    })
  );

  server.use(helmet());

  server.get("/service-worker.js", (req, res) => {
    const filePath = path.join(__dirname, ".next", "/service-worker.js");
    app.serveStatic(req, res, filePath);
  });

  server.get("/OneSignalSDKWorker.js", (req, res) => {
    res.setHeader("content-type", "text/javascript");
    createReadStream("./utils/OneSignalSDKWorker.js").pipe(res);
  });

  server.get("/OneSignalSDKUpdaterWorker.js", (req, res) => {
    res.setHeader("content-type", "text/javascript");
    createReadStream("./utils/OneSignalSDKUpdaterWorker.js").pipe(res);
  });

  server.get(`/favicon.ico`, (req, res) =>
    app.serveStatic(req, res, path.resolve("./static/icons/favicon.ico"))
  );

  server.get("/manifest.html", (req, res) =>
    app.serveStatic(req, res, path.resolve("./.next/manifest.html"))
  );

  server.get("/manifest.appcache", (req, res) =>
    app.serveStatic(req, res, path.resolve("./.next/manifest.appcache"))
  );

  if (isProd) {
    server.get("/_next/-/app.js", (req, res) =>
      app.serveStatic(req, res, path.resolve("./.next/app.js"))
    );
  }

  server.use(routerHandler);

  server.listen(port, host, err => {
    if (err) {
      return logger.error(err.message);
    }

    logger.appStarted(port, prettyHost);
  });
});
