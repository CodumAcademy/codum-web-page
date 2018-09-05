const routes = require("next-routes")();

routes.add("index", "/");
routes.add("team", "/equipo");
routes.add("nosotros", "/nosotros");
routes.add("convocatoria", "/convocatoria");
routes.add("faqs", "/preguntas-frecuentes");
routes.add("users-results", "/users-results");
routes.add("users-results-detail", "/users-results/:id");

module.exports = routes;
