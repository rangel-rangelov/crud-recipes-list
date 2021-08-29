import { useContext } from 'react';
import styled from 'styled-components';

import { DishType } from 'models/recipes';
import RecipesContext from 'context/RecipesContext';

import ListItem, { ListItemType } from 'components/ListItem';
import Button from 'components/Button';


const RecipesList = (): JSX.Element => {
  const { recipes } = useContext(RecipesContext);

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
        recipes.map(({
          id,
          name,
          mainIngredient,
          dishType,
        }) => (
          <ListItem
            id={id}
            title={name}
            description={`Main ingredient: ${mainIngredient}`}
            onDelete={() => console.log(id)}
            type={formatType(dishType)}
          />
        ))
      }
      <Button text="Add new recipe" onClick={() => console.log('here')} />
    </StyledRecipesList>
  );
};

const StyledRecipesList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default RecipesList;
