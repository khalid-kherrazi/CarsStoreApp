import { Injectable } from '@angular/core';

@Injectable()
export class RestApiService {

  constructor() { }

  post( requestParams: any ) :any {

    if(requestParams.login == "kkherrazi"
      && requestParams.passwordlogin == "1234" ){

      return {status :200, user: "Khalid KHERRAZI"};
    }

    throw new Error("Unknown User");

  }


}
