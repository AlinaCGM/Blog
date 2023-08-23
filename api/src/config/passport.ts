import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import dotenv from "dotenv";
import GoogleTokenStrategy from "passport-google-id-token";
import UserServices from "../services/users";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET as string;
const CLIENT_ID = process.env.CLIENT_ID as string;

export const jwtStrategy = new JwtStrategy(
  {
    secretOrKey: JWT_SECRET,
    //the token is taken from the user and check if its matches to the one in DB
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  },
  async (payload, done) => {
    const email = payload.email;
    const foundUser = await UserServices.findUserByEmail(email);
    if (!foundUser) {
      return "no user";
    }
    done(null, foundUser);
  }
);

export const googleStrategy = new GoogleTokenStrategy(
  { clientID: CLIENT_ID },
  async (parsedToken, google_id: string, done) => {
    const userPayload = {
      firstName: parsedToken.payload.given_name,
      lastName: parsedToken.payload.family_name,
      email: parsedToken.payload.email,
    };
    const user = await UserServices.createOrFindUserByEmail(userPayload);
    done(null, user);
  }
);
