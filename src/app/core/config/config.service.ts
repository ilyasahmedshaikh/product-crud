import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  endpoint: string = '/assets/mock-data/data.json';

  constructor() { }
}
