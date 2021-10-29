import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login-screen/login-screen.component";
import { RegisterScreenComponent } from "./register-screen/register-screen.component";
const appRoutes = [
  // { path: "", component: AppComponent, pathMatch: "full" },
  {path: "", redirectTo:"/login", pathMatch: "full"},
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "register", component: RegisterScreenComponent, pathMatch: "full" }
];
export const routing = RouterModule.forRoot(appRoutes);
