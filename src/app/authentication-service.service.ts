import { Injectable } from '@angular/core';
import {RestApiService} from "./rest-api.service";
import {HttpClient} from "@angular/common/http";
import {promise} from "selenium-webdriver";
import {reject} from "q";

@Injectable()
export class AuthenticationServiceService {

  constructor(private http: HttpClient) { }

  login(username: string, passwordParam: string): Promise<any> {
    console.log(">>> login");
    let p = new Promise((resolve, reject) => {

      if(username== "kkherrazi" ){
        resolve( {
          status: 200,
          user: "Khalid KHERRAZI",
        });
        return;
      }

      this.http.post("/", {
        params: {
         login: username,
         password: passwordParam,
        }
      }, (response) => {

        if (response.status === 200) {
          localStorage.setItem('currentUser', username);
          resolve(response.data);
        }
        else {
          reject(new Error(response.status));
        }
      });

      setTimeout (()=> {
        console.log(" >> Timeout ")
        reject(new Error( "timeout Exception"));
      }, 3000 )


    });


    return p;

  }

  logout() : Promise<any> {
    console.log(">>> logout");
    return new Promise((resolve, reject) => {
      localStorage.removeItem('currentUser');
      resolve();
    });
  }

}
