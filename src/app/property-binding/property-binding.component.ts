import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  standalone: false,

  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.scss',
})
export class PropertyBindingComponent {
  // Propriedade usada no Property Binding para definir a cor do elemento
  buttonColor: string = '';
  nameUser: string = '';

  // Método chamado no Event Binding para atualizar a cor quando o usuário digita
  updateColor(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      this.buttonColor = inputElement.value; // Atualiza 'buttonColor' com o valor digitado
    }
  }
  updateNameUser(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      this.nameUser = inputElement.value; // Atualiza 'nameUser' com o valor digitado
    }
  }
}
