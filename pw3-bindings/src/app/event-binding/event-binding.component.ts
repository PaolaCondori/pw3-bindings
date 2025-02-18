import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {
  exibeTexto = true
  
  alertar(){
    alert("Hoje está muito quente, beba água!");
  }

  exibirTexto(){
    this.exibeTexto = !this.exibeTexto;
  }
}
