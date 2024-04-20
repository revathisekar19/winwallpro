import { TokenStorageService } from "src/app/core/services/token-storage.service";

const tokenService = new TokenStorageService();
const userAccess = tokenService.getUser();

const fieldAccess: { [key: string]: string[] } = {
    admin: ['projectName', 'companyName', 'typeOfSpeciman', 'enquiry', 'quotationSent', 'paymentStatus'],
    sadmin: ['projectName', 'companyName', 'typeOfSpeciman', 'enquiry', 'quotationSent',
        'srForm', 'mos', 'chamberPreparationStart', 'testSpecimalArrival', 'chamberHandover', 'installationStart',
        'chamberClosed', 'preTest', 'finalTest', 'report', 'paymentStatus', 'specimen', 'finalReport'],
    quality: ['srForm', 'mos', 'preTest', 'finalTest', 'report', 'finalReport'],
    production: ['chamberPreparationStart', 'testSpecimalArrival', 'chamberHandover', 'installationStart', 'chamberClosed',
        'preTest', 'specimen']
};

export function isFieldVisible(fieldName: string) {
    const userRole = userAccess['custom:userRole'];
    const accessibleFields = fieldAccess[userRole] || [];

    return accessibleFields.includes(fieldName);
}
