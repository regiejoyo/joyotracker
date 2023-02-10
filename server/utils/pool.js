import dotenv from "dotenv";
dotenv.config();
import pg from "pg";

const isProduction = process.env.NODE_ENV === 'production';

const connectionString = process.env.DATABASE_URL;

const connectDatabase = () => {
    const pool = new pg.Pool({
        connectionString: connectionString,
        ssl: isProduction
        ? { rejectUnauthorized: false } : false,
    });
    return pool;
}

const query = (text, params) => pool.query(text,params);
const end = () => pool.end();

export {
    connectDatabase,
    query,
    end
}