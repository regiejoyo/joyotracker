import pino from "pino";
import pinoPretty from "pino-pretty";

const prettyStdout = pinoPretty({
    colorize: true,
});

const infoLogger = pino(
    {
        level: process.env.NODE_ENV === 'production' ? 'debug' : 'info',
        stream: process.env.NODE_ENV === 'production' ? prettyStdout : process.stdout,
    }
)

const errorLogger = pino(
    {
        level: process.env.NODE_ENV === 'production' ? 'error' : 'debug',
        stream: process.env.NODE_ENV === 'production' ? prettyStdout : process.stdErr,
    }
)

export {
    infoLogger,
    errorLogger
}