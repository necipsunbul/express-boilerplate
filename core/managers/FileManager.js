
const rootPath =  process.env.PWD
const path = require('path');
const UploadManager = require('./UploadManager');
const {MimeTypes,FileExtensions} = require('../staticDatas/systemStatics');
class FileManager{
    static get rootPath(){
        return rootPath;
    }

    static getFileExtension(fileName){
        return path.extname(fileName).replace('.','');
    }

    static getPath( folderList = []){
        return path.join(rootPath,...folderList)
    }

    static singleImageUpload(inputField,fileName = null){
        const upload = new UploadManager();
        upload.allowedMimeTypes = MimeTypes.imageMimeTypes;
        upload.allowedExtensions = FileExtensions.image;
        if(fileName) upload.fileName = fileName;
        return upload.run().single(inputField);
    }
}

module.exports = FileManager;