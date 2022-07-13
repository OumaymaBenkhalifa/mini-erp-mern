import AppLogger from '@logger/app.logger';
import winston, { Logform } from 'winston';

let formatReturnValue: (info: Logform.TransformableInfo) => void;

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
  const logger = new AppLogger();

  logger.setupAppLogger();
  AppLogger.logger.info('Testing the logger');

  expect(formatReturnValue(info)).toBe(`${info.timestamp} - ${info.level}: ${info.message}`);
});

it('overrides console.warn', () => {
  const info = {
    timestamp: 123,
    level: 'info',
    message: 'This is a message',
  };
  const logger = new AppLogger();

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
  const logger = new AppLogger();

  logger.setupAppLogger();
  console.error(info.message);

  expect(formatReturnValue(info)).toBe(`${info.timestamp} - ${info.level}: ${info.message}`);
});

describe('when the NODE_ENV is production', () => {
  it('creates the logger with the warn level', () => {
    process.env.NODE_ENV = 'production';
    const createLoggerMock = jest.spyOn(winston, 'createLogger');
    const logger = new AppLogger();

    logger.setupAppLogger();
    AppLogger.logger.info('Testing the logger');

    expect(createLoggerMock).toHaveBeenCalledWith(expect.objectContaining({ level: 'warn' }));
  });
});

describe('when the NODE_ENV is development', () => {
  it('creates the logger with the debug level', () => {
    process.env.NODE_ENV = 'development';
    const createLoggerMock = jest.spyOn(winston, 'createLogger');
    const logger = new AppLogger();

    logger.setupAppLogger();
    AppLogger.logger.info('Testing the logger');

    expect(createLoggerMock).toHaveBeenCalledWith(expect.objectContaining({ level: 'debug' }));
  });
});

describe('when the NODE_ENV is not set', () => {
  it('creates the logger with the debug level', () => {
    process.env.NODE_ENV = '';
    const createLoggerMock = jest.spyOn(winston, 'createLogger');
    const logger = new AppLogger();

    logger.setupAppLogger();
    AppLogger.logger.info('Testing the logger');

    expect(createLoggerMock).toHaveBeenCalledWith(expect.objectContaining({ level: 'debug' }));
  });
});
