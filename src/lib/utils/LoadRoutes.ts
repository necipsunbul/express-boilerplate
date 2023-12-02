import { Express } from "express";
import BaseApplicatonLoader from "../_core/BaseApplicationLoader";
import indexRoutes from "../routes/index.routes";
import userRoutes from "../routes/user.routes";
import authRoutes from "../routes/backend";

class LoadRoutes extends BaseApplicatonLoader {
  app: Express;
  constructor(app: Express) {
    super();
    this.app = app;
  }

  public build(): void {
    this.app.use("/", indexRoutes);
    this.app.use("/users", userRoutes);
    this.app.use("/_manage", authRoutes);
  }
}

export default LoadRoutes;
