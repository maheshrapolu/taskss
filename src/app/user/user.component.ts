import { ServerService } from './../server.service';
import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  data;
  set;
  

  constructor( private ht :HttpClient,private sa:ServerService) { }

  ngOnInit() {
    this.getdat();
    this.ht.get('https://jsonplaceholder.typicode.com/posts').subscribe(
      res =>{console.log(res);
      this.data=res;
  })
  }
  getdat(){
    this.sa.getapi().subscribe(res=>{console.log('erttttttttt',res);
     
    })
  }
  @Input()outres;
  
}
