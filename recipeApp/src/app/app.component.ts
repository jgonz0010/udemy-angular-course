import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showRecipes = true;
  showShoppingList = false;

  // onMenuClicked(menuItem: string) {
  //   switch(menuItem) {
  //     case "recipe":{
  //       this.showRecipes = true;
  //       this.showShoppingList = false;
  //       break;
  //     }
  //     case "shopping list":{
  //       this.showRecipes = false;
  //       this.showShoppingList = true;
  //       break;
  //     }
  //     default:{
  //       break;
  //     }
  //   }
  // }
}
