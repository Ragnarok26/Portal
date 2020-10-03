namespace Models {
  export class Response<T> {
    public success: boolean;
    public message: string;
    public responseData: T;

    constructor() {
      this.success = false;
      this.message = "";
      this.responseData = null;
    }
  }
}
