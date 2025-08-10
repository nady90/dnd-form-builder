export class FormCreationValidationError extends Error {
  constructor(message = "Invalid Form Data") {
    super(message);
    this.name = "FormValidationError";
  }
}
