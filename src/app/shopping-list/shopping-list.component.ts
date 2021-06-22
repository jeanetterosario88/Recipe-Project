import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
    ingredients: Ingredient[] = [ // of type Ingredient (from model you imported)
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ]; // array of ingredients


  ngOnInit(): void {
  }

}
