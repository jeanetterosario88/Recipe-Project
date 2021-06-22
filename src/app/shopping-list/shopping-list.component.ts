import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingrediant.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
    ingredients: Ingredient[] = []; // of type Ingrediant (from model you imported)

    new Ingredient('Apples', 5);
    new Ingredient('Tomatos', 10);

  constructor() { }

  ngOnInit(): void {
  }

}
