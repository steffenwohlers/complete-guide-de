import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {Recipe} from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() recipeSelected1 = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelect1() {
    this.recipeSelected1.emit(this.recipe);
  }

}
