export class UserNotFoundError extends Error {
  constructor(message = "User Not Found") {
    super(message);
    this.name = "UserNotFoundError";
  }
}
