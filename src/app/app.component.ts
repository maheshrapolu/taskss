import { Component } from '@angular/core';
import { Ng5SliderModule, Options } from 'ng5-slider';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public show:boolean = false;
  public buttonName:any = 'Show';
  amount: number = 500000;
  rate: number = 60;
  total:number=18;
  name:string="Hello Angular Training Here"

  results:any;
 ngOnInit() {
    }
    res(z){
      console.log(z);
      this.results=z;
    }
    toggle() {
      this.show = !this.show;
      
      // CHANGE THE NAME OF THE BUTTON.
      if(this.show)  
        this.buttonName = "Hide";
        
      else
        this.buttonName = "Show";
    }
    
  simpleSliderOptions: Options = {
 
    ceil: 500000
  };
  persantage: Options = {
    
    ceil: 18
  };
  simpleSliderO: Options = {
   
    ceil: 60
  };
}