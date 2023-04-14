import { Component } from '@angular/core';

@Component({
  selector: 'app-divisas',
  templateUrl: './divisas.component.html',
  styleUrls: ['./divisas.component.css']
})
export class DivisasComponent {
  numero1: number =0
  divisa: string = "dolar"
  resultado: number =0
  constructor(){}
  ngOnInit(): void{

  }
  
  convertir(){
    switch(this.divisa){
      case "dolar":
        this.resultado = this.numero1*1.10;
        break;

        case "corona":
        this.resultado = this.numero1*(7.45);
        break;

        case "libra":
        this.resultado = this.numero1*(0.88);
        break;
    }
  }
}
