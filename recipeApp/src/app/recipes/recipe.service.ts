import  { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is a test',
      'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.seriouseats.com%2Frecipes%2Fimages%2F2014%2F11%2F20141116-deep-fried-turkey-indoors-vicky-wasik-14-1500x1125.jpg',
      [
        new Ingredient('meat', 1),
        new Ingredient('french fries', 20)
      ]),
    new Recipe(
      'Another Test Recipe',
      'This is another test',
      'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.seriouseats.com%2Frecipes%2Fimages%2F2014%2F11%2F20141116-deep-fried-turkey-indoors-vicky-wasik-14-1500x1125.jpg',
      [
        new Ingredient('bun', 2),
        new Ingredient('ham', 3),
        new Ingredient('cheese', 3),
      ]),
  ];

  constructor(private shoppingListService: ShoppingListService){}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}
