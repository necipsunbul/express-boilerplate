const multer = require("multer");
const FileManager = require('./FileManager');
class UploadManager{
    fileName;
    allowedExtensions = [];
    uploadPath;
    allowedMimeTypes = [];


    single(){
        Math.random()
        const storage = multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, this.uploadPath);
            },
            filename: (req, file, cb) => {
                let fileName;
                if(this.fileName){
                     fileName = this.fileName;
                }else{
                    const ms = new Date().getTime().toString();
                    const randNumber = Math.floor((Math.random() * 1000) + 1);
                    fileName = ms + randNumber.toString();
                }

                cb(null, fileName)
            }
        });
        const upload = multer({
            storage,
            fileFilter:  (req, file, cb) => {
                const fileExt = FileManager.getFileExtension(file.originalname);
                if(this.allowedMimeTypes.length > 0 && !this.allowedMimeTypes.includes(file.mimetype)){
                    cb(null, false);
                    req.fileError = 'Invalid File';
                }else if (this.allowedExtensions.includes(fileExt)){
                    cb(null, true);
                }else {
                    cb(null, false);
                    req.fileError = 'Invalid File';
                    //return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
                }
            }
        });
        return upload;
    }
}

module.exports = UploadManager;