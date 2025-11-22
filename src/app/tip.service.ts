import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TipService {

  data: any = {};

  setData(d: any) {
    this.data = d;
  }

  getData() {
    return this.data;
  }
}
