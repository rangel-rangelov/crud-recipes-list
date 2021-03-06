import styled from 'styled-components';
import { useForm } from 'react-hook-form';

import Button from 'components/Button';

import { colors, others } from 'styles/variables';
import { Recipe, DISH_TYPES } from 'models/recipes';

interface Props {
  onSubmit: (recipe: Recipe, id: number) => void;
  recipe: Recipe;
}

type Inputs = Recipe;

const RecipeForm = ({ onSubmit, recipe }: Props): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Inputs>({ defaultValues: { ...recipe } || {} });

  const ingredients = watch('ingredients');

  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data, recipe.id))}>
      <Label htmlFor="id">ID</Label>
      <Input id="id" type="text" disabled={true} {...register('id', { required: true })} />
      {errors.id && <span>{errors.id?.message}</span>}

      <Label htmlFor="name">Name</Label>
      <Input id="name" type="text" {...register('name', { required: true })} />
      {errors.name && <span>{errors.name?.message}</span>}

      <Label htmlFor="ingredients">Ingredients</Label>
      <Input
        id="ingredients"
        type="text"
        {...register('ingredients', { required: true })}
      />
      {errors.ingredients && <span>{errors.ingredients?.message}</span>}

      <Label htmlFor="mainIngredient">Main ingredient</Label>
      <Select id="mainIngredient" {...register('mainIngredient', { required: true })}>
        { /* disableing eslint and ts for those lines because of some redundancy in react-hook-form */ }
        {/* eslint-disable */}
        {
            // @ts-ignore
            typeof ingredients === 'string' ? ingredients.split(',').map((ingredient, index) => (
              <option
                key={ingredient}
                value={ingredient}
              >
                {ingredient}
              </option>
            ))
            : ingredients.map((ingredient, index) => (
              <option
                key={ingredient}
                value={ingredient}
              >
                {ingredient}
              </option>
            ))
        }
        {/* eslint-enable */}
      </Select>
      {errors.mainIngredient && <span>{errors.mainIngredient?.message}</span>}

      <Label htmlFor="dishType">Dish type</Label>
      <Select id="dishType" {...register('dishType', { required: true })}>
        {
          DISH_TYPES.map(dishType => (
            <option key={dishType} value={dishType}>{dishType.toUpperCase()}</option>
          ))
        }
      </Select>
      <Button type="submit" text="Submit" />
    </form>
  );
};

const Input = styled.input`
  display: inline-block;
  width: 100%;
  height: 48px;
  padding: 0 16px;
  margin: 0 0 16px;
  background: ${colors.lighterGrey};
  font-family: ${others.fontFamily};
  font-size: 17px;
  line-height: 17px;
  color: ${colors.darkGrey};
  border: none;
  border-radius: ${others.borderRadiusSmall};

  &:disabled {
    color: ${colors.lightGrey};
  }
`;

const Select = styled.select`
  display: inline-block;
  width: 100%;
  height: 48px;
  padding: 0 16px;
  margin: 0 0 16px;
  background: ${colors.lighterGrey};
  font-family: ${others.fontFamily};
  font-size: 17px;
  line-height: 17px;
  color: ${colors.darkGrey};
  border: none;
  border-radius: ${others.borderRadiusSmall};
`;

const Label = styled.label`
  display: block;
  margin: 0 0 8px;
  font-size: 14px;
  line-height: 16px;
  font-weight: 700; 
`;

export default RecipeForm;
