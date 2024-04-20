export interface ITokenResponse {
    idToken: string;
    accessToken: string;
    refreshToken: string;
}

export interface IJwtToken {
    sub: string;
    email_verified: boolean;
    iss: string;
    "cognito:username": string;
    given_name: string;
    "custom:accessLevel": string;
    origin_jti: string;
    aud: string;
    event_id: string;
    "custom:userRole": string;
    token_use: string;
    auth_time: number;
    exp: number;
    iat: number;
    family_name: string;
    jti: string;
    email: string;
}