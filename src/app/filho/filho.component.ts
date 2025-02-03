import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filho',
  standalone: false,

  templateUrl: './filho.component.html',
  styleUrl: './filho.component.scss'
})
export class FilhoComponent {

  @Input() mensagemPai: string = '';

  @Output() mensagemFilho = new EventEmitter<string>();

  // Método para enviar a mensagem ao pai
  enviarMensagemParaPai() {
    this.mensagemFilho.emit("Olá, pai, mensagem recebida do filho!");
  }

}
