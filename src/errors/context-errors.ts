export class ContextNotFoundError extends Error {
  constructor(
    message = "CONTEXT NOT FOUND ======= Did you wrap the element with the context provider?",
  ) {
    super(message);
    this.name = "ContextNotFoundError";
  }
}
