import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { SegundaComponent } from './segunda/segunda.component';

const routes: Routes = [
  {path: "", component: PrincipalComponent},
  {path: "second", component: SegundaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
