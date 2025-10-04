import { Request, Response, NextFunction } from 'express';

import { verifyToken } from '../utils/jwt';
import { AuthenticatedRequest } from '../utils/types';

class AuthMiddleware {
  static authenticate = (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
  ) => {
    const token = req.header('x-auth-token')?.replace('Bearer', '');
    if (!token) return res.status(401).json({ message: 'No token provided' });

    try {
      const decoded = verifyToken(token);
      req.user = decoded;
      next();
    } catch (error) {
      res.status(401).json({ message: 'invalid token', error });
    }
  };
}

export default AuthMiddleware;
