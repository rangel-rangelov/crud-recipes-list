import { useContext } from 'react';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import GlobalStyle from 'styles/globalStyles';
import { colors } from 'styles/variables';

import Section from 'components/Section';
import RecipesList from 'components/RecipesList';
import Modal from 'components/Modal';
import RecipeForm from 'components/RecipeForm';

import RecipesContext from 'context/RecipesContext';
import { NEW_RECIPE } from 'models/recipes';

const App = (): JSX.Element => {
  const {
    recipes,
    isAddEditModalOpen,
    closeAddEditModal,
    recipeEdited,
    editRecipe,
    addRecipe,
  } = useContext(RecipesContext);

  return (
    <>
      <GlobalStyle />
      <Title>Recipes list</Title>
      <Section>
        <RecipesList />
        <Modal heading={recipeEdited?.name || 'New recipe'} onClose={closeAddEditModal} isOpen={isAddEditModalOpen}>
          <RecipeForm
            onSubmit={recipeEdited ? editRecipe : addRecipe}
            recipe={recipeEdited || { ...NEW_RECIPE, id: recipes[recipes.length - 1].id + 1 }}
          />
        </Modal>
        <ToastContainer position="bottom-right" />
      </Section>
    </>
  );
};

const Title = styled.h1`
  margin: 0 0 32px;
  font-size: 48px;
  line-height: 64px;

  &:after {
    content: '';
    display: block;
    margin: 16px 0 0;
    width: 60px;
    height: 4px;
    border-radius: 2px;
    background-color: ${colors.midGrey}
  }
`;

export default App;
