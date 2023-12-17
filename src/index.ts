import Application from "./lib/bootstrap";
import { appConfigs } from "./lib/_core/config/config";
appConfigs();
const app = new Application();
app.loadLibs();
app.configureSocket();
app.loadRoutes();
app.loadErrorMids();
app.listen();

export default app.server;
