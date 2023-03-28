class MimeTypes {
    static imageMimeTypes = ['image/png','image/jpg','image/jpeg'];
}

class FileExtensions {
    static image = ['jpg','jpeg','webp'];
}

const UserRoles = {
    user:1,
    admin:2,
    superAdmin:3
}

const Genders = {
    male:1,
    female:2,
    other:3
}

module.exports = {
    MimeTypes,
    FileExtensions,
    UserRoles,
    Genders
}