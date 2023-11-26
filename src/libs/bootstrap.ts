import express, { Express } from "express";
import appConfigs from "./config/config";
import Http from "http";
import LoadLibs from "../utils/LoadLibs";
import LoadRoutes from "../utils/LoadRoutes";
import SocketBuilder from "./core/SocketBuilder";
import * as ErrorViews from "../middlewares/ErrorViewMid";
class Application {
  app: Express;
  server: Http.Server;
  private readonly port: number;
  constructor() {
    appConfigs();
    this.app = express();
    this.port = +process.env.PORT!;
    this.server = Http.createServer(this.app);
  }

  public loadLibs(): void {
    const loader = new LoadLibs(this.app);
    loader.build();
  }

  public loadRoutes(): void {
    const loader = new LoadRoutes(this.app);
    loader.build();
  }

  public configureSocket(): void {
    const socketBuilder = new SocketBuilder(this.server);
    socketBuilder.build();
    this.app.use((req, res, next) => {
      req.event = socketBuilder.io;
      next();
    });
  }

  public loadErrorMids(): void {
    this.app.use(ErrorViews.error404);
    this.app.use(ErrorViews.viewError);
  }

  public listen(): void {
    this.server.listen(this.port, () => {
      console.log(`now listening port ${this.port}`);
    });
  }
}

export default Application;
