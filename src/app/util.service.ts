import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  host:string = "https://tranquil-forest-26141.herokuapp.com";
  constructor() { }
}
