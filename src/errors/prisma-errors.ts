export class PrismaCreateError extends Error {
  constructor(message = "PRISMA COULD NOT CREATE") {
    super(message);
    this.name = "PrismaCreateError";
  }
}
