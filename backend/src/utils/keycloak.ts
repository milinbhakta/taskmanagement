import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express-serve-static-core";
import Keycloak, { KeycloakConfig } from "keycloak-connect";

const keycloakConfig: KeycloakConfig = {
  realm: "Task-Management",
  "auth-server-url": "http://localhost:8080/auth",
  "ssl-required": "none",
  "confidential-port": 0,
  resource: "Task-Management",
};
// Initialize Keycloak middleware (assuming it's already configured as in the previous example)
const keycloak = new Keycloak(
  {
    scope: "openid profile email",
  },
  keycloakConfig
);

Keycloak.prototype.redirectToLogin = function (req: Request) {
  var apiReqMatcher = /\/api\//i;
  return !apiReqMatcher.test(req.originalUrl || req.url);
};

// Middleware function for token verification
export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1]; // Extract the token from the Authorization header

  if (!token) {
    return res.status(401).json({ message: "Access token is missing" });
  }

  keycloak.grantManager
    .validateAccessToken(token as string)
    .then((result) => {
      if (!result) {
        return res.status(401).json({ message: "Invalid access token" });
      }

      // Decode the token to access its content
      const decodedToken = jwt.decode(result as string);

      if (decodedToken) {
        // Check if the user has a specific role
        console.log(decodedToken);
      }
      next();
    })
    .catch((error) => {
      console.error("Token validation error:", error);
      return res.status(500).json({ message: "Internal server error" });
    });
};
