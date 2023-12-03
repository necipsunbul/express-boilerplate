import { Express } from "express";
import BaseApplicationLoader from "../_core/BaseApplicationLoader";
import indexRoutes from "../routes/index.routes";

class LoadRoutes extends BaseApplicationLoader {
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
