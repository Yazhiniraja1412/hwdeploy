import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service {
  getMessage(): string {
    return 'Service works!';
  }
}
