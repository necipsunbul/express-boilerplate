import Application from "./lib/bootstrap";
const app = new Application();
app.loadLibs();
app.configureSocket();
app.loadRoutes();
app.loadErrorMids();
app.listen();

export default app.server;
