import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pai',
  standalone: false,

  templateUrl: './pai.component.html',
  styleUrl: './pai.component.scss'
})
export class PaiComponent {
  mensagemRecebida: string = '';

  mensagemFilho: string = "Olá, filho, mensagem recebida do pai!";

}
