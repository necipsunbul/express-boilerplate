import path from "path";
import fs from "fs";
class FileManager {
  static get getRootPath(): string {
    return process.env.PWD + "/dist";
  }
  static getPath(folderList: string[] = []) {
    return path.join(FileManager.getRootPath, ...folderList);
  }

  static createFile(fileName: string, content: any) {
    return new Promise((resolve, reject) => {
      fs.writeFile(fileName, content, (err) => {
        if (err) reject(err);
        resolve(true);
      });
    });
  }

  static readFile(filePath: string) {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, { encoding: "utf-8" }, function (err, data) {
        if (!err) return resolve(data);
        reject(err);
      });
    });
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
