import Ajv from 'ajv';

import type { Request, Response, NextFunction } from 'express-serve-static-core';
import type { Schema } from './types';

const ajv = new Ajv();

export function validate(type: 'object' | 'middleware') {}

export function validateMiddleware(field: 'body' | 'param' | 'query', schema: Schema): (req: Request, res: Response, next: NextFunction) => void {
  const validator = ajv.compile(schema);
  return (req, res, next) => {
    const obj = req[field];
    const result = validator(obj);
    if (result) return next();
    return res.status(400).json({ code: 'INVALID_DATE', msg: 'The input data provided is invalid !' });
  };
}

export function validateObject() {}
