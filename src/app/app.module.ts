import { NgModule/*, CUSTOM_ELEMENTS_SCHEMA*/ } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// angmaterial modules
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';


import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { TemplateformsComponent } from './templateforms/templateforms.component';
import { AngularFireModule } from '@angular/fire/compat';
// import { FormBuilder } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuprincipalComponent } from './menuprincipal/menuprincipal.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

const firebaseConfig = {
  apiKey: "AIzaSyCsf73klr67ApRMfDUYGK9FETF2oalQK8Q",
  authDomain: "reactive-forms-8b262.firebaseapp.com",
  projectId: "reactive-forms-8b262",
  storageBucket: "reactive-forms-8b262.appspot.com",
  messagingSenderId: "694349386856",
  appId: "1:694349386856:web:410cca5d73613d91af97dd",
  measurementId: "G-S4WG3VFP7H"
};

@NgModule({
  declarations: [
    AppComponent,
    ReactiveformsComponent,
    TemplateformsComponent,
    MenuprincipalComponent
  ],
  imports: [
    // FormBuilder,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule,
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
