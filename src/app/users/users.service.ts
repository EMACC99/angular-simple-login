import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable  } from "rxjs";
@Injectable({
    providedIn: "root"
})
export class UsersService {
    constructor (private http: HttpClient) { }
    
    login(user : any): Observable<any> {
        return this.http.post("https://reqres.in/api/login", user);
    }

    register(user : any): Observable<any> {
        return this.http.post("https://reqres.in/api/register", user);
    }
    getUser(user : any) {
        return this.http.get("https://reqres.in/api/users/2", user);
    }
    log_data(user : any): Observable<any>{
        return this.http.get("", user);
        
    }
    
}