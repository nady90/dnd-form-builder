export class OverElementNotFound extends Error {
  constructor(message = "DROPPING OVER AN UNKNOWN ELEMENT") {
    super(message);
    this.name = "OverElementNotFound";
  }
}

export class DraggedElementNotFound extends Error {
  constructor(message = "DRAGGING AN UNKNOWN ELEMENT") {
    super(message);
    this.name = "DraggedElementNotFound";
  }
}
