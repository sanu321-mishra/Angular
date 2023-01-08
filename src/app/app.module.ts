import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProductComponent } from './product/product.component';
import { AccessComponent } from './product/access/access.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { ProjectComponent } from './product/project/project.component';
import { ServicesComponent } from './services/services.component';
import { OnlineComponent } from './services/online/online.component';
import { OfflineComponent } from './services/offline/offline.component';
import { ModeComponent } from './mode/mode.component';
import { FormsModule } from '@angular/forms';
import { MydircDirective } from './mydirc.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ProductComponent,
    AccessComponent,
    ProjectComponent,
    ServicesComponent,
    OnlineComponent,
    OfflineComponent,
    ModeComponent,
    MydircDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
