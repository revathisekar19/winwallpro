import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  public stringToDate(dateString: string): Date {
    const parts = dateString.split('-');

    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);
    const dateObject = new Date(year, month, day);

    return dateObject;
  }
}
