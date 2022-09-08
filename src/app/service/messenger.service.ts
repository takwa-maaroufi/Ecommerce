import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'
import { Produit } from '../models/produit.model';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject()

  constructor() { }

  sendMsg(produit:Produit) {
    this.subject.next(produit) //Triggering an event
  }

  getMsg() {
    return this.subject.asObservable()
  }
}

