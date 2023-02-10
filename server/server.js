import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";


const app = express();

app.get("/",(req, res) =>
    res.send("<h1 style='text align: center'>Tracker Joyo</h1>")
    );




export {
    app
}