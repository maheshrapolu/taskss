import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor( private ht:HttpClient) { }
  getapi(){
    return this.ht.get("https://jsonplaceholder.typicode.com/posts")
  }
}
