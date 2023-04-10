import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HomeogrComponent } from './components/homeogr/homeogr.component';
import { ClassComponent } from './components/class/class.component';
import { ClassogrComponent } from './components/classogr/classogr.component';
import { ProfilComponent } from './components/profil/profil.component';
import { RegisterComponent } from './components/register/register.component';
import { Route, RouterModule } from '@angular/router';
import { DokumenComponent } from './components/dokumen/dokumen.component';
const routeConfig:Route[]=[{
  path:"",
  component:HomeComponent
},
{
  path:"profil",
  component:ProfilComponent
},
{
  path:"login",
  component:LoginComponent
},
{
  path:"register",
  component:RegisterComponent
},
{
  path:"ogr",
  component:HomeogrComponent
},
{
  path:"dokumen",
  component:DokumenComponent
}
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HomeogrComponent,
    ClassComponent,
    ClassogrComponent,
    ProfilComponent,
    RegisterComponent,
    DokumenComponent,
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routeConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
