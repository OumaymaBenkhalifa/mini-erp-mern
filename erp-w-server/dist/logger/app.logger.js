"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston = __importStar(require("winston"));
class AppLogger {
    constructor() {
    }
    setupAppLogger() {
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
        AppLogger.logger.add(new winston.transports.Console({
            handleExceptions: true,
            handleRejections: true,
            format: winston.format.combine(winston.format.timestamp({
                format: 'h:mm:ss A',
            }), winston.format.colorize(), winston.format.align(), winston.format.printf((info) => {
                let msg = `${info.timestamp}`;
                msg = `${msg} - ${info.level}`;
                msg = `${msg}: ${info.message.trim()}`;
                return msg;
            })),
        }));
        winston.addColors(this._getCustomLogLevels().colors);
        AppLogger.logger.debug('Logger: Initiated successfully');
        let Method;
        (function (Method) {
            Method["WARN"] = "warn";
            Method["ERROR"] = "error";
        })(Method || (Method = {}));
        [Method.WARN, Method.ERROR].forEach((method) => {
            console[method] = (message) => {
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
    _getLevel() {
        const env = process.env.NODE_ENV || 'development';
        const isDevelopment = env === 'development';
        return isDevelopment ? 'debug' : 'warn';
    }
    _getCustomLogLevels() {
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
    _getFormat() {
        return winston.format.combine(winston.format.timestamp(), winston.format.json(), winston.format.align());
    }
}
exports.default = AppLogger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmxvZ2dlci5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImxvZ2dlci9hcHAubG9nZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBbUM7QUFFbkMsTUFBcUIsU0FBUztJQUc1QjtJQUVBLENBQUM7SUFFTSxjQUFjO1FBRW5CLFNBQVMsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQztZQUN0QyxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUN2QixNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUMsTUFBTTtZQUN6QyxNQUFNLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUN6QixVQUFVLEVBQUU7Z0JBQ1YsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztvQkFDMUIsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsS0FBSyxFQUFFLE9BQU87aUJBQ2YsQ0FBQztnQkFDRixJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO29CQUMxQixRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixLQUFLLEVBQUUsTUFBTTtpQkFDZCxDQUFDO2dCQUNGLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7b0JBQzFCLFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLEtBQUssRUFBRSxNQUFNO2lCQUNkLENBQUM7Z0JBQ0YsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztvQkFDMUIsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsS0FBSyxFQUFFLE9BQU87b0JBQ2QsZ0JBQWdCLEVBQUUsSUFBSTtvQkFDdEIsZ0JBQWdCLEVBQUUsSUFBSTtpQkFDdkIsQ0FBQzthQUNIO1lBQ0QsV0FBVyxFQUFFLEtBQUs7U0FDbkIsQ0FBQyxDQUFDO1FBRUgsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQ2xCLElBQUks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RUFBRSxRQUFRO2dCQUNkLElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRSxNQUFNO2FBQ2Q7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUVPLFVBQVU7UUFDaEIsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQzNHLENBQUM7Q0FDRjtBQWpIRCw0QkFpSEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB3aW5zdG9uIGZyb20gJ3dpbnN0b24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBMb2dnZXIge1xuICBwdWJsaWMgc3RhdGljIGxvZ2dlcjogd2luc3Rvbi5Mb2dnZXI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8gRW1wdHkgY29uc3RydWN0b3JcbiAgfVxuXG4gIHB1YmxpYyBzZXR1cEFwcExvZ2dlcigpIHtcbiAgICAvLyBDb25maWd1cmUgdGhlIGxvZ2dlciBhbmQgc2V0IGl0IGFzIGEgbG9jYWwgdmFyaWFibGVcbiAgICBBcHBMb2dnZXIubG9nZ2VyID0gd2luc3Rvbi5jcmVhdGVMb2dnZXIoe1xuICAgICAgbGV2ZWw6IHRoaXMuX2dldExldmVsKCksXG4gICAgICBsZXZlbHM6IHRoaXMuX2dldEN1c3RvbUxvZ0xldmVscygpLmxldmVscyxcbiAgICAgIGZvcm1hdDogdGhpcy5fZ2V0Rm9ybWF0KCksXG4gICAgICB0cmFuc3BvcnRzOiBbXG4gICAgICAgIG5ldyB3aW5zdG9uLnRyYW5zcG9ydHMuRmlsZSh7XG4gICAgICAgICAgZmlsZW5hbWU6ICcuL2xvZ3Mvb3MtZGVidWcubG9nJyxcbiAgICAgICAgICBsZXZlbDogJ2RlYnVnJyxcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyB3aW5zdG9uLnRyYW5zcG9ydHMuRmlsZSh7XG4gICAgICAgICAgZmlsZW5hbWU6ICcuL2xvZ3Mvb3MtaW5mby5sb2cnLFxuICAgICAgICAgIGxldmVsOiAnaW5mbycsXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgd2luc3Rvbi50cmFuc3BvcnRzLkZpbGUoe1xuICAgICAgICAgIGZpbGVuYW1lOiAnLi9sb2dzL29zLXdhcm4ubG9nJyxcbiAgICAgICAgICBsZXZlbDogJ3dhcm4nLFxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IHdpbnN0b24udHJhbnNwb3J0cy5GaWxlKHtcbiAgICAgICAgICBmaWxlbmFtZTogJy4vbG9ncy9vcy1lcnJvci5sb2cnLFxuICAgICAgICAgIGxldmVsOiAnZXJyb3InLFxuICAgICAgICAgIGhhbmRsZVJlamVjdGlvbnM6IHRydWUsXG4gICAgICAgICAgaGFuZGxlRXhjZXB0aW9uczogdHJ1ZSxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgZXhpdE9uRXJyb3I6IGZhbHNlLFxuICAgIH0pO1xuXG4gICAgQXBwTG9nZ2VyLmxvZ2dlci5hZGQoXG4gICAgICBuZXcgd2luc3Rvbi50cmFuc3BvcnRzLkNvbnNvbGUoe1xuICAgICAgICBoYW5kbGVFeGNlcHRpb25zOiB0cnVlLFxuICAgICAgICBoYW5kbGVSZWplY3Rpb25zOiB0cnVlLFxuICAgICAgICBmb3JtYXQ6IHdpbnN0b24uZm9ybWF0LmNvbWJpbmUoXG4gICAgICAgICAgd2luc3Rvbi5mb3JtYXQudGltZXN0YW1wKHtcbiAgICAgICAgICAgIGZvcm1hdDogJ2g6bW06c3MgQScsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgd2luc3Rvbi5mb3JtYXQuY29sb3JpemUoKSxcbiAgICAgICAgICB3aW5zdG9uLmZvcm1hdC5hbGlnbigpLFxuICAgICAgICAgIHdpbnN0b24uZm9ybWF0LnByaW50ZigoaW5mbykgPT4ge1xuICAgICAgICAgICAgbGV0IG1zZyA9IGAke2luZm8udGltZXN0YW1wfWA7XG4gICAgICAgICAgICBtc2cgPSBgJHttc2d9IC0gJHtpbmZvLmxldmVsfWA7XG4gICAgICAgICAgICBtc2cgPSBgJHttc2d9OiAke2luZm8ubWVzc2FnZS50cmltKCl9YDtcbiAgICAgICAgICAgIHJldHVybiBtc2c7XG4gICAgICAgICAgfSksXG4gICAgICAgICksXG4gICAgICB9KSxcbiAgICApO1xuXG4gICAgLy8gQWRkIGN1c3RvbSBjb2xvcnNcbiAgICB3aW5zdG9uLmFkZENvbG9ycyh0aGlzLl9nZXRDdXN0b21Mb2dMZXZlbHMoKS5jb2xvcnMpO1xuICAgIEFwcExvZ2dlci5sb2dnZXIuZGVidWcoJ0xvZ2dlcjogSW5pdGlhdGVkIHN1Y2Nlc3NmdWxseScpO1xuXG4gICAgLy8gT3ZlcnJpZGUgY29uc29sZS53YXJuIGFuZCBjb25zb2xlLmVycm9yIHRvIGNlbnRyYWxpemUgYWxsIGxvZ3Mgd2l0aGluIG91ciBjdXN0b20gbG9nZ2VyXG4gICAgZW51bSBNZXRob2Qge1xuICAgICAgV0FSTiA9ICd3YXJuJyxcbiAgICAgIEVSUk9SID0gJ2Vycm9yJyxcbiAgICB9XG4gICAgW01ldGhvZC5XQVJOLCBNZXRob2QuRVJST1JdLmZvckVhY2goKG1ldGhvZDogTWV0aG9kKSA9PiB7XG4gICAgICBjb25zb2xlW21ldGhvZF0gPSAobWVzc2FnZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGxldCBsb2NhdGlvbiA9ICd1bmtub3duIG9yaWdpbic7XG4gICAgICAgIGNvbnN0IHN0YWNrID0gbmV3IEVycm9yKCkuc3RhY2s7XG4gICAgICAgIGxldCBpc0ZpcnN0ID0gdHJ1ZTtcbiAgICAgICAgaWYgKHN0YWNrKSB7XG4gICAgICAgICAgZm9yIChjb25zdCBsaW5lIG9mIHN0YWNrLnNwbGl0KCdcXG4nKSkge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IGxpbmUubWF0Y2goL15cXHMrYXRcXHMrKC4qKS8pO1xuICAgICAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgaWYgKCFpc0ZpcnN0KSB7XG4gICAgICAgICAgICAgICAgbG9jYXRpb24gPSBtYXRjaGVzWzFdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlzRmlyc3QgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQXBwTG9nZ2VyLmxvZ2dlclttZXRob2RdKG1lc3NhZ2UsIHsgbG9jYXRpb24gfSk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0TGV2ZWwoKSB7XG4gICAgY29uc3QgZW52ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ2RldmVsb3BtZW50JztcbiAgICBjb25zdCBpc0RldmVsb3BtZW50ID0gZW52ID09PSAnZGV2ZWxvcG1lbnQnO1xuICAgIHJldHVybiBpc0RldmVsb3BtZW50ID8gJ2RlYnVnJyA6ICd3YXJuJztcbiAgfVxuXG4gIHByaXZhdGUgX2dldEN1c3RvbUxvZ0xldmVscygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGV2ZWxzOiB7XG4gICAgICAgIGVycm9yOiAwLFxuICAgICAgICB3YXJuOiAxLFxuICAgICAgICBpbmZvOiAyLFxuICAgICAgICBkZWJ1ZzogMyxcbiAgICAgIH0sXG4gICAgICBjb2xvcnM6IHtcbiAgICAgICAgZXJyb3I6ICdyZWQnLFxuICAgICAgICB3YXJuOiAneWVsbG93JyxcbiAgICAgICAgaW5mbzogJ2N5YW4nLFxuICAgICAgICBkZWJ1ZzogJ2JsdWUnLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0Rm9ybWF0KCkge1xuICAgIHJldHVybiB3aW5zdG9uLmZvcm1hdC5jb21iaW5lKHdpbnN0b24uZm9ybWF0LnRpbWVzdGFtcCgpLCB3aW5zdG9uLmZvcm1hdC5qc29uKCksIHdpbnN0b24uZm9ybWF0LmFsaWduKCkpO1xuICB9XG59XG4iXX0=