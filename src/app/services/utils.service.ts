import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
	
  constructor(private datePipe: DatePipe) { }

  convertToNumber(value: string) {
    if (!value) return 0;

    if (value.trim().length==0) { 
        return 0;
    }
    return Number(value.replace(/,/g, '.'));
  }
  
  getDateFormat(format: string) {
    return this.datePipe.transform(new Date, format);
  }

  isEmptyObject(obj: any): boolean {
    if (!obj || Object.keys(obj).length === 0) {
      return true;
    }
    return false;
  }
  
  isArrayNotEmpty(obj: any): boolean {
    if (obj
      && Array.isArray(obj)
      && obj.length) {
      return true;
    }
    return false;
  }

  // For checking if a string is empty, null or undefined
  isEmpty(str: string) {
    return (!str || 0 === str.length);
  }

  //For checking if a string is blank, null or undefined
  isBlank(str: string) {
    return (!str || /^\s*$/.test(str));
  }

  // For checking if a string is empty, null or undefined, blank or contains only white-space
  isEmptyWithTrim(str: string) {
    return (!str || str.length === 0 || !str.trim());
  };

  titleCase(str: string): string {
    return str.toLowerCase().split(' ')
      .map(function(word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
      }).join(' ');
  }
}