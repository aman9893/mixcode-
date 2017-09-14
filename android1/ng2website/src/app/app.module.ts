import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { headercomponent } from './header/app.header.component';
import { navcomponent } from './mynav/app.navcomponent';
import { footercomponent } from  './footer/app.footer.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ,headercomponent,navcomponent,footercomponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
