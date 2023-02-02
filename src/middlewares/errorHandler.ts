import { ErrorRequestHandler } from 'express';

import { ZodError } from 'zod';

const errorHandler: ErrorRequestHandler = (err: Error | ZodError, _req, res, _next) => {
  if (err instanceof ZodError) {
    return res.status(400).json({ error: err.issues[0].message });
  }

  console.error(err);
  return res.status(500).json({ message: 'internal error' });
};

export default errorHandler;