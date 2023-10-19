import path from "path";
import fs from "fs";
class FileManager {
  static get getRootPath(): string {
    return process.env.PWD + "/dist";
  }
  static getPath(folderList: string[] = []) {
    return path.join(FileManager.getRootPath, ...folderList);
  }

  static joinPath(folders: string[]) {
    return path.join(...folders);
  }

  static removeFileFromServer(filePath: string) {
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
  }

  static createFileFromBase64(data: string) {}

  static getFileExtension(fileName: string) {
    return path.extname(fileName).replace(".", "");
  }
}

export default FileManager;
