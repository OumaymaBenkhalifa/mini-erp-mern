import AppLogger from './logger/app.logger';
import express from 'express';
import passport from 'passport';
import session from 'express-session';
//import routes
import { appRouter } from './routes';
//express app
const app = express();

app.use(express.json());
app.use(
  session({
    cookie: {
      maxAge: 24 * 60 * 60 * 1000,
      secure: true,
    },
    secret: 'any_long_and_random_string',
    resave: false,
    saveUninitialized: false,
  }),
);

const appLogger = new AppLogger();
appLogger.setupAppLogger();

app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('./middlewares/passport.config')(passport);

app.use('/api', appRouter);
export { app };
