import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent {
  constructor(private http: HttpClient, private router: Router){

  }
  onSubmit(loginForm: any){
    this.http.post("http://127.0.0.1:8000/vistasencilla/login/", loginForm.value).subscribe(
      (data: any)=>{
        if('token' in data){
          this.router.navigateByUrl('second');
        }
      }
    )
  }
}
