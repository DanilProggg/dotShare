import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
    `.showTags{background-color:#d4d4d8;}
     .showTheme{background-color:#d4d4d8;}`
  ]
})
export class HeaderComponent {
  showTags:boolean = false
  showTheme:boolean = false
   toggleTags(){
    this.showTags=!this.showTags
     this.showTheme = false
   }
   toggleTheme(){
    this.showTheme=!this.showTheme
     this.showTags = false
   }

}
