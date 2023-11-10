import { Express } from "express";
import BaseLoader from "../libs/core/BaseLoader";
import indexRoutes from "../routes/index.routes";
import userRoutes from "../routes/user.routes";
class LoadRoutes extends BaseLoader {
  app: Express;
  constructor(app: Express) {
    super();
    this.app = app;
  }

  public build(): void {
    this.app.use("/", indexRoutes);
    this.app.use("/user", userRoutes);
  }
}

export default LoadRoutes;
