import { createContext, useState } from 'react';
import { toast } from 'react-toastify';

import { Recipes, Recipe, MOCK_DATA } from 'models/recipes';

export interface IRecipesContext {
  recipes: Recipes | [],
  expandedRecipeId: number | null,
  recipeEdited: Recipe | null,
  isAddEditModalOpen: boolean,
  openRecipeEdit: (id: number) => void,
  openRecipeAdd: () => void,
  editRecipe: (editedRecipe: Recipe, id: number) => void,
  addRecipe: (newRecipe: Recipe) => void,
  expandRecipe: (id: number | null) => void,
  closeAddEditModal: () => void,
}

const RecipesContext = createContext<IRecipesContext>({
  recipes: [],
  expandedRecipeId: null,
  recipeEdited: null,
  isAddEditModalOpen: false,
  openRecipeEdit: () => {},
  openRecipeAdd: () => {},
  editRecipe: () => {},
  addRecipe: () => {},
  expandRecipe: () => {},
  closeAddEditModal: () => {},
});

export const RecipesProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const openRecipeEdit = (id: number) => setData(prevState => {
    const recipeEdited = prevState.recipes.find((recipe) => recipe.id === id ) || null;
    
    return ({
      ...prevState,
      recipeEdited,
      isAddEditModalOpen: Boolean(recipeEdited),
    });
  });

  const openRecipeAdd = () => setData(prevState => ({ ...prevState, isAddEditModalOpen: true }));

  const editRecipe = (editedRecipe: Recipe, id: number) => {
    console.log(id);
    setData(prevState => {
      const index = prevState.recipes.findIndex(recipe => recipe.id === id);
      const newRecipes = [...prevState.recipes];
      newRecipes[index] = editedRecipe;

      return ({
        ...prevState,
        recipes: newRecipes,
        recipeEdited: null,
        isAddEditModalOpen: false,
      });
    });

    toast('Recipe edited successfully!');
  };

  const addRecipe = (newRecipe: Recipe) => {
    setData(prevState => {
      const newRecipes = [...prevState.recipes];
      newRecipes.push(newRecipe);

      return ({
        ...prevState,
        recipes: newRecipes,
        isAddEditModalOpen: false,
      });

    });

    toast('Recipe added successfully!');
  };

  const expandRecipe = (id: number | null) => setData(prevState => ({
    ...prevState,
    expandedRecipeId: id,
  }));

  const closeAddEditModal = () => setData(prevState => ({
    ...prevState,
    isAddEditModalOpen: false,
    recipeEdited: null,
  }));
  

  const recipesState = {
    recipes: MOCK_DATA,
    expandedRecipeId: null,
    recipeEdited: null,
    isAddEditModalOpen: false,

    openRecipeEdit,
    openRecipeAdd,
    editRecipe,
    addRecipe,
    expandRecipe,
    closeAddEditModal,
  };

  const [data, setData] = useState<IRecipesContext>(recipesState);

  return (
    <RecipesContext.Provider value={data}>
      {children}  
    </RecipesContext.Provider>
  );
};

export default RecipesContext;
