import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";

export function handleAppErrors(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  if (err.name === "BadRequestError")
    return res.status(httpStatus.BAD_REQUEST).send({ message: err.message });

  if (err.name === "ConflictError")
    return res.status(httpStatus.CONFLICT).send({ message: err.message });

  if (err.name === "DuplicatedEmailError")
    return res.status(httpStatus.CONFLICT).send({ message: err.message });

  if (err.name === "InvalidCredentialsError")
    return res.status(httpStatus.UNAUTHORIZED).send({ message: err.message });

  if (err.name === "NotFoundError")
    return res.status(httpStatus.NOT_FOUND).send({ message: err.message });

  if (err.name === "UnauthorizedError")
    return res.status(httpStatus.UNAUTHORIZED).send({ message: err.message });

  if (err.name === "UnprocessableEntityError")
    return res
      .status(httpStatus.UNPROCESSABLE_ENTITY)
      .send({ message: err.message });

  return res
    .status(httpStatus.INTERNAL_SERVER_ERROR)
    .send({ error: "InternalServerError", message: "Internal Server Error!" });
}
