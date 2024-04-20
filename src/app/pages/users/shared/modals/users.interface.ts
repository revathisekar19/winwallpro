export interface IProfiles {
    profiles : IUser[];
}

export interface IUser {
    createdByLastName: string;
    createdDate: string;
    isViewable: boolean;
    userRole: string;
    lastName: string;
    createdAt: number;
    emailId: string;
    isDeleted: boolean;
    createdBy: string;
    firstName: string;
    isActive: boolean;
    createdByFirstName: string;
    updatedAt: number;
    PK: number;
    updatedDate: string;
    middleName: string;
}

export type IUserReq<T, A extends string> = {
    [key in A]: T;
} & {
    source: string;
    version: string;
};

export interface IAddUser {
    firstName: string;
    middleName: string;
    lastName: string;
    prefix: string;
    suffix: string;
    gender: string;
    phoneCountryCode: string;
    phoneNumber: string;
    emailId: string;
    password: string;
    userRole: string;
    accessLevel: number;
    comments: string;
}


export interface ILockUser {
    PK: number;
    comments: string;
}