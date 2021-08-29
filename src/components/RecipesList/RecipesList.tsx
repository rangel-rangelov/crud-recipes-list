import { useContext } from 'react';
import styled from 'styled-components';

import { DishType } from 'models/recipes';
import RecipesContext from 'context/RecipesContext';

import ListItem, { ListItemType } from 'components/ListItem';
import Button from 'components/Button';


const RecipesList = (): JSX.Element => {
  const {
    recipes,
    expandedRecipeId,
    expandRecipe,
    openRecipeEdit,
    openRecipeAdd,
    deleteRecipe,
  } = useContext(RecipesContext);

  const formatType = (type: DishType): ListItemType => {
    switch (type) {
      case DishType.REGULAR:
        return ListItemType.PRIMARY;

      case DishType.VEGETERIAN:
        return ListItemType.SECONDARY;

      case DishType.VEGAN:
        return ListItemType.TERTIARY;
    }
  };

  return (
    <StyledRecipesList>
      {
        recipes && recipes.map(({
          id,
          name,
          mainIngredient,
          ingredients,
          dishType,
        }) => (
          <ListItem
            id={id}
            title={name}
            description={`Main ingredient: ${mainIngredient}`}
            details={ingredients}
            onDelete={() => deleteRecipe(id)}
            onDetails={(expandedId) => expandRecipe(expandedId)}
            onEdit={(editId) => openRecipeEdit(editId)}
            expanded={expandedRecipeId === id}
            type={formatType(dishType)}
            key={id}
          />
        ))
      }
      <Button text="Add new recipe" onClick={openRecipeAdd} />
    </StyledRecipesList>
  );
};

const StyledRecipesList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default RecipesList;
