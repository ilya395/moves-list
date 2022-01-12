const dotenv = require("dotenv");
dotenv.config();

const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || 7000;

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;

const TOKEN_KEY = process.env.TOKEN_KEY;
const TOKEN_LIFE_TIME = process.env.TOKEN_LIFE_TIME;

const BAD_WORDS = ['@', 'http', 'https', 'ws'];

const ERROR = "ERROR";
const SUCCESS = "SUCCESS";

const EMAIL_LOGIN = process.env.EMAIL_LOGIN;
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;

const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

module.exports = {
  HOST,
  PORT,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME,
  TOKEN_KEY,
  TOKEN_LIFE_TIME,
  BAD_WORDS,
  ERROR,
  SUCCESS,
  EMAIL_LOGIN,
  EMAIL_PASSWORD,
  ADMIN_EMAIL,
}