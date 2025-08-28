export class OverElementNotFound extends Error {
  constructor(message = "DROPPING OVER AN UNKNOWN ELEMENT") {
    super(message);
    this.name = "OverElementNotFound";
  }
}
