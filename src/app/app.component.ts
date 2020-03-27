import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
show=true;
show1=true;
show2=true;
toggleShow(){
  this.show=!this.show;
}

toggleShow1(){
  this.show1=!this.show1;
}


toggleShow2(){
  this.show2=!this.show2;
}

}

