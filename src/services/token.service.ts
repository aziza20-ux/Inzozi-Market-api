import jwt from 'jsonwebtoken';

const getJwtSecret = () => process.env.JWT_SECRET || 'supersecret123';

export const generateAccessToken = (userId: string, role: string) => {
  return jwt.sign({ id: userId, userId, role }, getJwtSecret(), { expiresIn: '15m' });
};

export const generateRefreshToken = (userId: string) => {
  return jwt.sign({ userId }, getJwtSecret(), { expiresIn: '7d' });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, getJwtSecret()) as jwt.JwtPayload;
};
