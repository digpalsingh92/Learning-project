import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;
const JWT_SECRET = process.env.JWT_SECRET;

if (!PORT) {
    throw new Error("PORT is not defined");
}

if (!DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined");
}

if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined");
}

export {
    PORT,
    DATABASE_URL,
    JWT_SECRET,
};
