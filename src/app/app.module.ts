import { routing } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { LoginComponent } from "./login-screen/login-screen.component";
import { RegisterScreenComponent } from "./register-screen/register-screen.component";

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterScreenComponent],
  imports: [BrowserModule, routing, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}