import { JwtHelperService } from "@auth0/angular-jwt";

export const HOST = 'http://localhost:8080/';
export const SELF = 'http://localhost:4200/';
export const ENGLISH = 'en';
export const POLISH = 'pl';
export const JWTHELPER = new JwtHelperService();
export const SERVER_DOWN = 'SERVER_DOWN';
export const INCORRECT_CREDENTIALS = 'INCORRECT_CREDENTIALS';