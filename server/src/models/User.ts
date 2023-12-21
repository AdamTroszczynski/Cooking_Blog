export default class User {
  userId: number;
  username: string;
  email: string;
  registered: number;

  constructor(userId: number, username: string, email: string, registered: number) {
    this.userId = userId;
    this.username = username;
    this.email = email;
    this.registered = registered;
  }
}
