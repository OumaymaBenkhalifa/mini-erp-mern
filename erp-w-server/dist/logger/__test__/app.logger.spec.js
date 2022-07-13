"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_logger_1 = __importDefault(require("@logger/app.logger"));
const winston_1 = __importDefault(require("winston"));
let formatReturnValue;
jest.mock('winston', () => ({
    addColors: jest.fn(),
    format: {
        combine: jest.fn(),
        timestamp: jest.fn(),
        colorize: jest.fn(),
        json: jest.fn(),
        align: jest.fn(),
        printf: jest.fn().mockImplementation((info) => {
            formatReturnValue = info;
        }),
    },
    createLogger: jest.fn().mockReturnValue({
        add: jest.fn(),
        info: jest.fn(),
        debug: jest.fn(),
        warn: jest.fn(),
        error: jest.fn(),
    }),
    transports: {
        Console: jest.fn(),
        File: jest.fn(),
    },
}));
beforeEach(() => {
    jest.resetModules();
});
it('calls the format', () => {
    const info = {
        timestamp: 123,
        level: 'info',
        message: 'This is a message',
    };
    const logger = new app_logger_1.default();
    logger.setupAppLogger();
    app_logger_1.default.logger.info('Testing the logger');
    expect(formatReturnValue(info)).toBe(`${info.timestamp} - ${info.level}: ${info.message}`);
});
it('overrides console.warn', () => {
    const info = {
        timestamp: 123,
        level: 'info',
        message: 'This is a message',
    };
    const logger = new app_logger_1.default();
    logger.setupAppLogger();
    console.warn(info.message);
    expect(formatReturnValue(info)).toBe(`${info.timestamp} - ${info.level}: ${info.message}`);
});
it('overrides console.error', () => {
    const info = {
        timestamp: 123,
        level: 'info',
        message: 'This is a message',
    };
    const logger = new app_logger_1.default();
    logger.setupAppLogger();
    console.error(info.message);
    expect(formatReturnValue(info)).toBe(`${info.timestamp} - ${info.level}: ${info.message}`);
});
describe('when the NODE_ENV is production', () => {
    it('creates the logger with the warn level', () => {
        process.env.NODE_ENV = 'production';
        const createLoggerMock = jest.spyOn(winston_1.default, 'createLogger');
        const logger = new app_logger_1.default();
        logger.setupAppLogger();
        app_logger_1.default.logger.info('Testing the logger');
        expect(createLoggerMock).toHaveBeenCalledWith(expect.objectContaining({ level: 'warn' }));
    });
});
describe('when the NODE_ENV is development', () => {
    it('creates the logger with the debug level', () => {
        process.env.NODE_ENV = 'development';
        const createLoggerMock = jest.spyOn(winston_1.default, 'createLogger');
        const logger = new app_logger_1.default();
        logger.setupAppLogger();
        app_logger_1.default.logger.info('Testing the logger');
        expect(createLoggerMock).toHaveBeenCalledWith(expect.objectContaining({ level: 'debug' }));
    });
});
describe('when the NODE_ENV is not set', () => {
    it('creates the logger with the debug level', () => {
        process.env.NODE_ENV = '';
        const createLoggerMock = jest.spyOn(winston_1.default, 'createLogger');
        const logger = new app_logger_1.default();
        logger.setupAppLogger();
        app_logger_1.default.logger.info('Testing the logger');
        expect(createLoggerMock).toHaveBeenCalledWith(expect.objectContaining({ level: 'debug' }));
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmxvZ2dlci5zcGVjLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsibG9nZ2VyL19fdGVzdF9fL2FwcC5sb2dnZXIuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG9FQUEyQztBQUMzQyxzREFBMkM7QUFFM0MsSUFBSSxpQkFBNEQsQ0FBQztBQUVqRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQzFCLFNBQVMsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO0lBQ3BCLE1BQU0sRUFBRTtRQUNOLE9BQU8sRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1FBQ2xCLFNBQVMsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1FBQ3BCLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1FBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1FBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7UUFDaEIsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQzVDLGlCQUFpQixHQUFHLElBQUksQ0FBQztRQUMzQixDQUFDLENBQUM7S0FDSDtJQUNELFlBQVksRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsZUFBZSxDQUFDO1FBQ3RDLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1FBQ2QsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7UUFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUNoQixJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO0tBQ2pCLENBQUM7SUFDRixVQUFVLEVBQUU7UUFDVixPQUFPLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUNsQixJQUFJLEVBQUUs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QUM7SUFDN0YsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHBMb2dnZXIgZnJvbSAnQGxvZ2dlci9hcHAubG9nZ2VyJztcbmltcG9ydCB3aW5zdG9uLCB7IExvZ2Zvcm0gfSBmcm9tICd3aW5zdG9uJztcblxubGV0IGZvcm1hdFJldHVyblZhbHVlOiAoaW5mbzogTG9nZm9ybS5UcmFuc2Zvcm1hYmxlSW5mbykgPT4gdm9pZDtcblxuamVzdC5tb2NrKCd3aW5zdG9uJywgKCkgPT4gKHtcbiAgYWRkQ29sb3JzOiBqZXN0LmZuKCksXG4gIGZvcm1hdDoge1xuICAgIGNvbWJpbmU6IGplc3QuZm4oKSxcbiAgICB0aW1lc3RhbXA6IGplc3QuZm4oKSxcbiAgICBjb2xvcml6ZTogamVzdC5mbigpLFxuICAgIGpzb246IGplc3QuZm4oKSxcbiAgICBhbGlnbjogamVzdC5mbigpLFxuICAgIHByaW50ZjogamVzdC5mbigpLm1vY2tJbXBsZW1lbnRhdGlvbigoaW5mbykgPT4ge1xuICAgICAgZm9ybWF0UmV0dXJuVmFsdWUgPSBpbmZvO1xuICAgIH0pLFxuICB9LFxuICBjcmVhdGVMb2dnZXI6IGplc3QuZm4oKS5tb2NrUmV0dXJuVmFsdWUoe1xuICAgIGFkZDogamVzdC5mbigpLFxuICAgIGluZm86IGplc3QuZm4oKSxcbiAgICBkZWJ1ZzogamVzdC5mbigpLFxuICAgIHdhcm46IGplc3QuZm4oKSxcbiAgICBlcnJvcjogamVzdC5mbigpLFxuICB9KSxcbiAgdHJhbnNwb3J0czoge1xuICAgIENvbnNvbGU6IGplc3QuZm4oKSxcbiAgICBGaWxlOiBqZXN0LmZuKCksXG4gIH0sXG59KSk7XG5cbmJlZm9yZUVhY2goKCkgPT4ge1xuICBqZXN0LnJlc2V0TW9kdWxlcygpO1xufSk7XG5cbml0KCdjYWxscyB0aGUgZm9ybWF0JywgKCkgPT4ge1xuICBjb25zdCBpbmZvID0ge1xuICAgIHRpbWVzdGFtcDogMTIzLFxuICAgIGxldmVsOiAnaW5mbycsXG4gICAgbWVzc2FnZTogJ1RoaXMgaXMgYSBtZXNzYWdlJyxcbiAgfTtcbiAgY29uc3QgbG9nZ2VyID0gbmV3IEFwcExvZ2dlcigpO1xuXG4gIGxvZ2dlci5zZXR1cEFwcExvZ2dlcigpO1xuICBBcHBMb2dnZXIubG9nZ2VyLmluZm8oJ1Rlc3RpbmcgdGhlIGxvZ2dlcicpO1xuXG4gIGV4cGVjdChmb3JtYXRSZXR1cm5WYWx1ZShpbmZvKSkudG9CZShgJHtpbmZvLnRpbWVzdGFtcH0gLSAke2luZm8ubGV2ZWx9OiAke2luZm8ubWVzc2FnZX1gKTtcbn0pO1xuXG5pdCgnb3ZlcnJpZGVzIGNvbnNvbGUud2FybicsICgpID0+IHtcbiAgY29uc3QgaW5mbyA9IHtcbiAgICB0aW1lc3RhbXA6IDEyMyxcbiAgICBsZXZlbDogJ2luZm8nLFxuICAgIG1lc3NhZ2U6ICdUaGlzIGlzIGEgbWVzc2FnZScsXG4gIH07XG4gIGNvbnN0IGxvZ2dlciA9IG5ldyBBcHBMb2dnZXIoKTtcblxuICBsb2dnZXIuc2V0dXBBcHBMb2dnZXIoKTtcbiAgY29uc29sZS53YXJuKGluZm8ubWVzc2FnZSk7XG5cbiAgZXhwZWN0KGZvcm1hdFJldHVyblZhbHVlKGluZm8pKS50b0JlKGAke2luZm8udGltZXN0YW1wfSAtICR7aW5mby5sZXZlbH06ICR7aW5mby5tZXNzYWdlfWApO1xufSk7XG5cbml0KCdvdmVycmlkZXMgY29uc29sZS5lcnJvcicsICgpID0+IHtcbiAgY29uc3QgaW5mbyA9IHtcbiAgICB0aW1lc3RhbXA6IDEyMyxcbiAgICBsZXZlbDogJ2luZm8nLFxuICAgIG1lc3NhZ2U6ICdUaGlzIGlzIGEgbWVzc2FnZScsXG4gIH07XG4gIGNvbnN0IGxvZ2dlciA9IG5ldyBBcHBMb2dnZXIoKTtcblxuICBsb2dnZXIuc2V0dXBBcHBMb2dnZXIoKTtcbiAgY29uc29sZS5lcnJvcihpbmZvLm1lc3NhZ2UpO1xuXG4gIGV4cGVjdChmb3JtYXRSZXR1cm5WYWx1ZShpbmZvKSkudG9CZShgJHtpbmZvLnRpbWVzdGFtcH0gLSAke2luZm8ubGV2ZWx9OiAke2luZm8ubWVzc2FnZX1gKTtcbn0pO1xuXG5kZXNjcmliZSgnd2hlbiB0aGUgTk9ERV9FTlYgaXMgcHJvZHVjdGlvbicsICgpID0+IHtcbiAgaXQoJ2NyZWF0ZXMgdGhlIGxvZ2dlciB3aXRoIHRoZSB3YXJuIGxldmVsJywgKCkgPT4ge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID0gJ3Byb2R1Y3Rpb24nO1xuICAgIGNvbnN0IGNyZWF0ZUxvZ2dlck1vY2sgPSBqZXN0LnNweU9uKHdpbnN0b24sICdjcmVhdGVMb2dnZXInKTtcbiAgICBjb25zdCBsb2dnZXIgPSBuZXcgQXBwTG9nZ2VyKCk7XG5cbiAgICBsb2dnZXIuc2V0dXBBcHBMb2dnZXIoKTtcbiAgICBBcHBMb2dnZXIubG9nZ2VyLmluZm8oJ1Rlc3RpbmcgdGhlIGxvZ2dlcicpO1xuXG4gICAgZXhwZWN0KGNyZWF0ZUxvZ2dlck1vY2spLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKGV4cGVjdC5vYmplY3RDb250YWluaW5nKHsgbGV2ZWw6ICd3YXJuJyB9KSk7XG4gIH0pO1xufSk7XG5cbmRlc2NyaWJlKCd3aGVuIHRoZSBOT0RFX0VOViBpcyBkZXZlbG9wbWVudCcsICgpID0+IHtcbiAgaXQoJ2NyZWF0ZXMgdGhlIGxvZ2dlciB3aXRoIHRoZSBkZWJ1ZyBsZXZlbCcsICgpID0+IHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9ICdkZXZlbG9wbWVudCc7XG4gICAgY29uc3QgY3JlYXRlTG9nZ2VyTW9jayA9IGplc3Quc3B5T24od2luc3RvbiwgJ2NyZWF0ZUxvZ2dlcicpO1xuICAgIGNvbnN0IGxvZ2dlciA9IG5ldyBBcHBMb2dnZXIoKTtcblxuICAgIGxvZ2dlci5zZXR1cEFwcExvZ2dlcigpO1xuICAgIEFwcExvZ2dlci5sb2dnZXIuaW5mbygnVGVzdGluZyB0aGUgbG9nZ2VyJyk7XG5cbiAgICBleHBlY3QoY3JlYXRlTG9nZ2VyTW9jaykudG9IYXZlQmVlbkNhbGxlZFdpdGgoZXhwZWN0Lm9iamVjdENvbnRhaW5pbmcoeyBsZXZlbDogJ2RlYnVnJyB9KSk7XG4gIH0pO1xufSk7XG5cbmRlc2NyaWJlKCd3aGVuIHRoZSBOT0RFX0VOViBpcyBub3Qgc2V0JywgKCkgPT4ge1xuICBpdCgnY3JlYXRlcyB0aGUgbG9nZ2VyIHdpdGggdGhlIGRlYnVnIGxldmVsJywgKCkgPT4ge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID0gJyc7XG4gICAgY29uc3QgY3JlYXRlTG9nZ2VyTW9jayA9IGplc3Quc3B5T24od2luc3RvbiwgJ2NyZWF0ZUxvZ2dlcicpO1xuICAgIGNvbnN0IGxvZ2dlciA9IG5ldyBBcHBMb2dnZXIoKTtcblxuICAgIGxvZ2dlci5zZXR1cEFwcExvZ2dlcigpO1xuICAgIEFwcExvZ2dlci5sb2dnZXIuaW5mbygnVGVzdGluZyB0aGUgbG9nZ2VyJyk7XG5cbiAgICBleHBlY3QoY3JlYXRlTG9nZ2VyTW9jaykudG9IYXZlQmVlbkNhbGxlZFdpdGgoZXhwZWN0Lm9iamVjdENvbnRhaW5pbmcoeyBsZXZlbDogJ2RlYnVnJyB9KSk7XG4gIH0pO1xufSk7XG4iXX0=