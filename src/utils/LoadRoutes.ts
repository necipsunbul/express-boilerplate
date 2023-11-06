import { Express } from "express";
import indexRoutes from "../routes/index.routes";
import BaseLoader from "../libs/core/BaseLoader";
import FileManager from "../libs/managers/FileManager";
class LoadRoutes extends BaseLoader {
  app: Express;
  constructor(app: Express) {
    super();
    this.app = app;
  }

  public build(): void {
    this.app.use("/", indexRoutes);
  }
}

export default LoadRoutes;
