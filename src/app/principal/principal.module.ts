import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeruComponent } from './peru/peru.component';
import { ChileComponent } from './chile/chile.component';
import { UruguayComponent } from './uruguay/uruguay.component';
import { InicioComponent } from './inicio/inicio.component';
import { AppRoutingModule } from '../app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    PeruComponent,
    ChileComponent,
    UruguayComponent,
    InicioComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    PeruComponent,
    ChileComponent,
    UruguayComponent,
    InicioComponent,
    NavbarComponent

  ]
})
export class PrincipalModule { }
