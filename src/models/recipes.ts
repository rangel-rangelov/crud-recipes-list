export interface Recipe {
  id: number;
  name: string;
  mainIngredient: string;
  ingredients: Array<string>;
  dishType: DishType;
}

export type Recipes = Array<Recipe>;

export enum DishType {
  REGULAR = 'regular',
  VEGETERIAN = 'vegeterian',
  VEGAN = 'vegan',
}

export const MOCK_DATA: Recipes = [
  {
    id: 1,
    name: 'Spaghetti Bolognese',
    mainIngredient: 'Pasta',
    ingredients: ['Spaghetti', 'Tomato sauce', 'Minced meat'],
    dishType: DishType.REGULAR,
  },
  {
    id: 2,
    name: 'Teriyaki Salmon',
    mainIngredient: 'Salmon',
    ingredients: ['Salmon', 'Teriyaki sauce', 'Garlic' ],
    dishType: DishType.VEGETERIAN,
  },
  {
    id: 3,
    name: 'Shopska salad',
    mainIngredient: 'Tomatoes',
    ingredients: ['Tomatoes', 'Cucumbers', 'Onion'],
    dishType: DishType.VEGAN,
  },
];