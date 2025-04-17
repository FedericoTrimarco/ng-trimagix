import { Injectable } from '@angular/core';
import AOS from 'aos';

@Injectable({
  providedIn: 'root'
})
export class AosService {

  constructor() { }

  initAos() {
    AOS.init({
      duration: 1200,   // durata delle animazioni in ms
      once: true        // anima solo una volta al primo scroll
      // puoi aggiungere altre opzioni di configurazione qui
    });
  }
}
