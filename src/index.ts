import Application from "./libs/bootstrap";
const app = new Application();
app.loadLibs();
app.configureSocket();
app.loadRoutes();
app.loadErrorMids();
app.listen();
