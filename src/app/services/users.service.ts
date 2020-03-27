import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  getAllUsers(){
    return[
      {id:101,name:'john',city:'delhi',salary:2000},
      {id:101,name:'john',city:'delhi',salary:2000},
      {id:101,name:'john',city:'delhi',salary:2000},
      {id:101,name:'john',city:'delhi',salary:2000},
        ];
  }
}
