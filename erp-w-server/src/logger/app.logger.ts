import * as winston from 'winston';

export default class AppLogger {
  public static logger: winston.Logger;

  constructor() {
    // Empty constructor
  }

  public setupAppLogger() {
    // Configure the logger and set it as a local variable
    AppLogger.logger = winston.createLogger({
      level: this._getLevel(),
      levels: this._getCustomLogLevels().levels,
      format: this._getFormat(),
      transports: [
        new winston.transports.File({
          filename: './logs/os-debug.log',
          level: 'debug',
        }),
        new winston.transports.File({
          filename: './logs/os-info.log',
          level: 'info',
        }),
        new winston.transports.File({
          filename: './logs/os-warn.log',
          level: 'warn',
        }),
        new winston.transports.File({
          filename: './logs/os-error.log',
          level: 'error',
          handleRejections: true,
          handleExceptions: true,
        }),
      ],
      exitOnError: false,
    });

    AppLogger.logger.add(
      new winston.transports.Console({
        handleExceptions: true,
        handleRejections: true,
        format: winston.format.combine(
          winston.format.timestamp({
            format: 'h:mm:ss A',
          }),
          winston.format.colorize(),
          winston.format.align(),
          winston.format.printf((info) => {
            let msg = `${info.timestamp}`;
            msg = `${msg} - ${info.level}`;
            msg = `${msg}: ${info.message.trim()}`;
            return msg;
          }),
        ),
      }),
    );

    // Add custom colors
    winston.addColors(this._getCustomLogLevels().colors);
    AppLogger.logger.debug('Logger: Initiated successfully');

    // Override console.warn and console.error to centralize all logs within our custom logger
    enum Method {
      WARN = 'warn',
      ERROR = 'error',
    }
    [Method.WARN, Method.ERROR].forEach((method: Method) => {
      console[method] = (message: string) => {
        let location = 'unknown origin';
        const stack = new Error().stack;
        let isFirst = true;
        if (stack) {
          for (const line of stack.split('\n')) {
            const matches = line.match(/^\s+at\s+(.*)/);
            if (matches) {
              if (!isFirst) {
                location = matches[1];
                break;
              }
              isFirst = false;
            }
          }
        }
        AppLogger.logger[method](message, { location });
      };
    });
  }

  private _getLevel() {
    const env = process.env.NODE_ENV || 'development';
    const isDevelopment = env === 'development';
    return isDevelopment ? 'debug' : 'warn';
  }

  private _getCustomLogLevels() {
    return {
      levels: {
        error: 0,
        warn: 1,
        info: 2,
        debug: 3,
      },
      colors: {
        error: 'red',
        warn: 'yellow',
        info: 'cyan',
        debug: 'blue',
      },
    };
  }

  private _getFormat() {
    return winston.format.combine(winston.format.timestamp(), winston.format.json(), winston.format.align());
  }
}
