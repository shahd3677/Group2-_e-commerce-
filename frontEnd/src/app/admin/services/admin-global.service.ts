import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminGlobalService {

  constructor() { }

  isloggedIn: boolean = true
}
