import express, { Express } from "express";
import helmet from "helmet";
import FileUpload from "express-fileupload";
import morgan from "morgan";
import BaseLoader from "../libs/core/BaseLoader";
import cors from "cors";
import { corsOptions } from "../libs/config/cors.config";
import FileUploadConfig from "../libs/config/uploader.config";

class LoadLibs extends BaseLoader {
  app: Express;
  constructor(app: Express) {
    super();
    this.app = app;
  }

  public build(): void {
    this.app.use(helmet());
    this.app.use(express.json({ limit: "50mb" }));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use("/static", express.static("public"));
    this.app.use(cors(corsOptions));
    if (process.env.NODE_ENV === "development") this.app.use(morgan("dev"));
    this.app.use(FileUpload(FileUploadConfig));
  }
}

export default LoadLibs;
