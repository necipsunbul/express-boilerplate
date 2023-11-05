export default class ApiDataModel {
  version: string;
  status: string;
  constructor(version: string, status: string) {
    this.version = version;
    this.status = status;
  }
}
