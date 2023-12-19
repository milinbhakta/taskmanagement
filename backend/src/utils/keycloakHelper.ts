import { Token } from "../interfaces/KeycloakTypes";

export function getUserInfo(req: any): Token {
  return req?.kauth?.grant.access_token.content;
}
