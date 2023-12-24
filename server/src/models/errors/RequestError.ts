export default class RequestError {
  name: string;
  errorMsg: any;

  constructor(name: string, errorMsg: any) {
    this.name = name;
    this.errorMsg = errorMsg;
  }
};
