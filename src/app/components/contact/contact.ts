import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact {
  miEmail: string = "Toca para ver mi Email"

  revelarEmail(){
    this.miEmail= "alvarezz.lautaroo@gmail.com"
  }
}
