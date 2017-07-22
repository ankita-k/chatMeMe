import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ChattingComponent } from './chatting/chatting.component';
import { UserInformationComponent } from './user-information/user-information.component';
import { appRouting } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    ChattingComponent,
    UserInformationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
