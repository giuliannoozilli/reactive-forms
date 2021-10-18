import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { TemplateformsComponent } from './templateforms/templateforms.component';
import { AngularFireModule } from '@angular/fire';
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
    TemplateformsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
