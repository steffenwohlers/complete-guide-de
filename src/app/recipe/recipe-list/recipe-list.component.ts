import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected2 = new EventEmitter<Recipe>();
  selectedRecipe2: Recipe;
  recipe = new Recipe('Dummy', 'Dummy', 'http://www.juliangiebelen.de/wordpress/wp-content/uploads/CrashTestDummy.jpg');
  constructor() { }

  ngOnInit() {
  }

  onSelected2(recipe: Recipe) {
  this.recipeSelected2.emit(recipe);
  }

}
