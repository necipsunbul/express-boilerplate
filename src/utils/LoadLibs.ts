import express, { Express } from "express";
import helmet from "helmet";
import FileUpload from "express-fileupload";
import morgan from "morgan";
import BaseLoader from "../libs/core/BaseLoader";
import cors from "cors";

const whitelist = ["*"];
const corsOptions = {
  origin: function (origin: any, callback: any) {
    if (whitelist.indexOf(origin) !== -1 || whitelist.indexOf("*") !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
const FileUploadConfig = {
  limits: { fileSize: 50 * 1024 * 1024 },
  useTempFiles: true,
  tempFileDir: "/tmp/",
  //safeFileNames:true
};

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
