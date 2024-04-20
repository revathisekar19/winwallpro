export interface IResponse<T> {
    message: string;
    responseCode: number;
    response: string;
    result: T;
}