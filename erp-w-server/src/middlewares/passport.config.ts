import { PassportStatic } from 'passport';
import { Strategy as JwtStrategy, ExtractJwt, VerifiedCallback } from 'passport-jwt';
import { Request } from 'express';
import { User, IUser } from '../models/user.model';
import { EntityNotFoundError } from '../errors/entity-not-found-error';

module.exports = (passport: PassportStatic) => {
  passport.serializeUser((user: IUser, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    done(null, false);
  });

  passport.use(
    new JwtStrategy(
      {
        secretOrKey: process.env.TOKEN_SECRET,
        jwtFromRequest: ExtractJwt.fromHeader('access_token'),
        passReqToCallback: true,
      },
      async (req: Request, payload: any, done: VerifiedCallback) => {
        const user = await User.findById(payload.id);
        if (user) return done(null, user);
        return done('requested user not found', false);
      },
    ),
  );
};
