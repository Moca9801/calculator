import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  pantalla: string;

  constructor(){
    this.pantalla = '0';
  }

  ngOnInit(): void {
    console.log('Aplicación de calculadora cargada')
  }

  handleClick(value: string){
    if(this.pantalla === '0' || this.pantalla == 'Error!'){
      this.pantalla = value;
    }else{
      this.pantalla += value;
    }
  }

  delete(){
    if(this.pantalla != '0' ){
      this.pantalla = this.pantalla.slice(0, -1);
    }

    if(this.pantalla === '' || this.pantalla == 'Error!'){
      this.pantalla = '0';
    }
    
  }

  solution(){
    try{
      this.pantalla = eval(this.pantalla);
    }catch{
      this.pantalla = "Error!"
    }
  }

  clear(){
    this.pantalla = '0';
  }
}

