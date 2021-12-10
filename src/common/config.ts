import { config } from 'dotenv';

config({
  path: `${__dirname}/../../.env`,
});

export const {PORT} = process.env;
// export const NODE_ENV = process.env.NODE_ENV;
// export const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;
// export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
// export const AUTH_MODE = process.env.AUTH_MODE || 'true';
