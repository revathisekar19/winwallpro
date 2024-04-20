import { UntypedFormBuilder } from "@angular/forms";

const fb = new UntypedFormBuilder();

export const projectForm = () => {
    return fb.group({
        projectId: [''],
        dispatched: fb.group({
            dispatchedDate: [''],
            status: [false]
        }),
        serviceRequestForm: fb.group({
            sent: [false],
            received: [false]
        }),
        report: fb.group({
            approved: [false],
            underProduction: [false],
            remarks: [''],
            draftSent: [false]
        }),
        projectName: [''],
        ETA: [''],
        testCompleted: fb.group({
            completedDate: [''],
            completed: [false]
        }),
        paymentStatus: fb.group({
            received: [false],
            receivedDate: [''],
            remarks: ['']
        }),
        ETD: [''],
        testStarted: fb.group({
            started: [false],
            startedDate: ['']
        }),
        SK: [''],
        testSpecimenArrival: fb.group({
            receivedDate: [''],
            received: [false]
        }),
        companyName: [''],
        methodStatement: fb.group({
            sent: [false],
            approved: [false],
            remarks: ['']
        }),
        chamberHandover: fb.group({
            started: [false],
            handoverDate: ['']
        }),
        preTest: fb.group({
            preTestDate: [''],
            remarks: [''],
            started: [false]
        }),
        finalTest: fb.group({
            started: [false],
            remarks: [''],
            finalTestDate: ['']
        }),
        sampleTest: [false],
        chamberClose: fb.group({
            closeDate: [''],
            started: [false]
        }),
        installationStart: fb.group({
            installationDate: [''],
            started: [false]
        }),
        enquiry: fb.group({
            received: [false],
            remarks: ['']
        }),
        typeOfSpecimen: [''],
        quotationSent: [false],
        PK: [''],
        chamberAllocation: fb.group({
            unitNumber: [0],
            allocated: [false]
        }),
        chamberPreparationStart: fb.group({
            started: [false],
            startDate: ['']
        }),
        finalReport: fb.group({
            sent: [false],
            sentDate: [''],
            remarks: ['']
        }),
        specimen: fb.group({
            dispatch: [false],
            dispatchDate: [''],
            dispatchRemarks: ['']
        }),
        projectStage: [''],
        applicationId: ['']
    });
};