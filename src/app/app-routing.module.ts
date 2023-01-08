import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ModeComponent } from './mode/mode.component';
import { AccessComponent } from './product/access/access.component';
import { ProductComponent } from './product/product.component';
import { ProjectComponent } from './product/project/project.component';
import { RegistrationComponent } from './registration/registration.component';
import { OfflineComponent } from './services/offline/offline.component';
import { OnlineComponent } from './services/online/online.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [{path:'login',component:LoginComponent},
{path:'reg',component:RegistrationComponent},

{path:'pro',component:ProductComponent,children:[{path:'acces',component:AccessComponent},
{path:'proje',component:ProjectComponent}]},

{path:'service',component:ServicesComponent,children:[{path:'online',component:OnlineComponent},
{path:'offline',component:OfflineComponent}]},
{path:'mode',component:ModeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
