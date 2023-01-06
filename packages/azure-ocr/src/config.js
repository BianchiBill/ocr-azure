/* eslint no-process-env: 0 */
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const environment = [
  'KEY',
  'ENDPOINT',
];

environment.forEach((name) => {
  /* istanbul ignore if */
  if (!process.env[name]) {
    throw new Error(`${name}: ${process.env[name]}`);
  }
});

const config = {
  KEY: process.env.KEY,
  ENDPOINT: process.env.ENDPOINT,
};

export default config;
