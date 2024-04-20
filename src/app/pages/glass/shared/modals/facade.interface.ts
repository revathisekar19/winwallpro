export interface IProjects {
    projects: IProject[];
}

export interface IProject {
    projectId: string;
    dispatched: {
        dispatchedDate: string;
        status: boolean;
    },
    serviceRequestForm: {
        sent: boolean;
        received: boolean;
    },
    report: {
        approved: boolean;
        underProduction: boolean;
        remarks: string;
        draftSent: boolean;
    },
    projectName: string;
    ETA: string;
    testCompleted: {
        completedDate: string;
        completed: boolean;
    },
    paymentStatus: {
        received: boolean;
        remarks: string;
    },
    ETD: string;
    testStarted: {
        started: boolean;
        startedDate: string;
    },
    SK: number;
    testSpecimenArrival: {
        receviedDate: string;
        received: boolean;
    },
    companyName: string;
    methodStatement: {
        sent: boolean;
        approved: boolean;
        remarks: string;
    },
    chamberHandover: {
        started: boolean;
        handoverDate: string;
    },
    preTest: {
        preTestDate: string;
        started: boolean;
    },
    finalTest: {
        started: boolean;
        finalTestDate: string;
    },
    sampleTest: boolean;
    chamberClose: {
        closeDate: string;
        started: boolean;
    },
    installationStart: {
        installationDate: string;
        started: boolean;
    },
    enquiry: {
        received: boolean;
        remarks: string;
    },
    typeOfSpecimen: string;
    quotationSent: boolean;
    PK: string;
    chamberAllocation: {
        unitNumber: number;
        allocated: boolean;
    },
    chamberPreparationStart: {
        started: boolean;
        startDate: string;
    },
    finalReport: {
        sent: boolean;
        sentDate: string;
        remarks: string;
    },
    specimen: {
        dispatchDate: string;
        dispatchRemarks: string;
        dispatch: boolean;
    },
    projectStage: string;
    applicationId: string;
}

export interface IChambers {
    chambers: IChamber[];
}

export interface IChamber {
    chamberUnit: string;
    createdByLastName: string;
    chamberId: number;
    allocatedPK: string;
    allocatedSK: string;
    allocatedCompanyName: string;
    allocatedProjectName: string;
    chamberStatus: string;
    availableFrom: string;
    isAvailable: boolean;
}

export interface ISaveProject {
    projectId: string;
    companyName: string;
    typeOfSpecimen: string;
    projectName: string;
    ETA: string;
}
