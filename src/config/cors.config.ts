export const whitelist = ["*"];
export const corsOptions = {
  origin: function (origin: any, callback: any) {
    if (whitelist.indexOf(origin) !== -1 || whitelist.indexOf("*") !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
