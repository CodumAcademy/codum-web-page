const registerServiceWorker = () => {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then(swRegistration => { //eslint-disable-line
          const OneSignal = window.OneSignal || [];
          OneSignal.push([
            "init",
            {
              appId: "f95da62e-cfde-41f2-bdc6-8f31791741b8",
              autoRegister: false,
              notifyButton: {
                enable: false
              },
              promptOptions: {
                actionMessage:
                  "Nos gustaría mostrarte notificaciones de las últimas noticias y actualizaciones.",
                acceptButtonText: "Permitir",
                cancelButtonText: "En otro momento"
              }
            }
          ]);

          OneSignal.push(() => {
            OneSignal.showHttpPrompt();
          });
        })
        .catch(registrationError => {
          console.log("SW registration failed: ", registrationError); // eslint-disable-line
        });
    });
  }
};

export default registerServiceWorker;
