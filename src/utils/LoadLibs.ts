import { Express } from "express";
import helmet from "helmet";
import FileUpload from "express-fileupload";
import morgan from "morgan";
import BaseLoader from "../libs/core/BaseLoader";
import cors from "cors";

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
    //  this.app.use(helmet());
    this.app.use(cors());
    if (process.env.NODE_ENV === "development") this.app.use(morgan("dev"));
    this.app.use(FileUpload(FileUploadConfig));
  }
}

export default LoadLibs;
