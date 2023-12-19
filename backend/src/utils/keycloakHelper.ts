export function getUserInfo(req: any) {
  return req?.kauth?.grant.access_token.content;
}
