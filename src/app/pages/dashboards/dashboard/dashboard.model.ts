export interface INotice {
    businessEvents: INoticeObj;
}

export interface INoticeObj {
    [key: string]: IBusinessEvent[];
}

export interface IBusinessEvent {
    createdByLastName: string;
    createdDate: string;
    eventExpiry: string;
    createdByFirstName: string;
    updatedAt: number;
    SK: number;
    createdAt: number;
    eventAccess: string;
    updatedDate: string;
    eventTitle: string;
}