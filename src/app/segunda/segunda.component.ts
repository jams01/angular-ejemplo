import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-segunda',
  templateUrl: './segunda.component.html',
  styleUrls: ['./segunda.component.scss']
})
export class SegundaComponent {
  fact: string;
  constructor(private http: HttpClient){
    this.fact = "cargando";
  }
  saludar(){
    const headers = new HttpHeaders().set('Authorization', 'Token a4ffcc2ada4faa9c177c6a472993888c93197337') ;
    this.http.get("http://127.0.0.1:8000/vistasencilla/vista2/", {headers}).subscribe(
      (data: any)=>{
        this.fact = data.info;
      }
    )
  }
}
