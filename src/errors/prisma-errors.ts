export class PrismaCreateError extends Error {
  constructor(message = "PRISMA COULD NOT CREATE") {
    super(message);
    this.name = "PrismaCreateError";
  }
}

export class PrismaFormNotFound extends Error {
  constructor(message = "FORM NOT FOUND") {
    super(message);
    this.name = "PrismaFormNotFound";
  }
}
