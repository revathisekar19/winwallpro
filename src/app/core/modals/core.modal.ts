export interface ICommon {
    message: string;
}

export interface IPageKey {
    LastEvaluatedKey: {
        PK: string;
        SK: number;
        updatedAt: number;
    } | string;
}