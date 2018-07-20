import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { CustomersComponent } from './components/customers/customers.component';

const Routes =[
  {
    path: '' , redirectTo:'customers',pathMatch:'full'
  },
  {
    path: 'customers' , component : CustomersComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
