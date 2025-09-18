export class FormCreationValidationError extends Error {
  constructor(message = "Invalid Form Data") {
    super(message);
    this.name = "FormValidationError";
  }
}

export class FormSaveError extends Error {
  constructor(message = "Could NOT save form") {
    super(message);
    this.name = "FormSaveError";
  }
}

export class FormPublishError extends Error {
  constructor(message = "Could NOT publish form") {
    super(message);
    this.name = "FormPublishError";
  }
}
