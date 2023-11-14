import { Request, Response, NextFunction } from "express";
import FileUploadManager from "../libs/managers/UploadManager";
import ImageFileContants from "../libs/constants/ImageFileConstants";
import FileManager from "../libs/managers/FileManager";
import ErrorResponse from "../libs/core/response/ErrorResponse";
import httpStatus from "http-status";
export default (req: Request, res: Response, next: NextFunction) =>
  async (field: string, fileCount: number = 1) => {
    try {
      if (!req.files) return false;
      const uploader = new FileUploadManager(
        req.files,
        ImageFileContants.MimeTypes,
        ImageFileContants.Extensions,
        FileManager.getPath(["public", "images"])
      );
      let result: Boolean = false;
      if (fileCount === 1) {
        result = await uploader.saveSingleFileToServer(field);
        if (result) req.uploadedFile = uploader.uploadedFile;
      } else {
        uploader.maxFileCount = fileCount;
        result = await uploader.saveAllFilesToServer(field);
        if (result) req.uploadedFiles = uploader.uploadedFiles;
      }
      if (!result)
        return res.json(
          new ErrorResponse(uploader.error.message, httpStatus.BAD_REQUEST)
        );
      next();
    } catch (e) {
      if (e instanceof Error) {
        throw new Error(e.message);
      }
    }
  };
