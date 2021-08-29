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

const App = (): JSX.Element => {
  const {
    isAddEditModalOpen,
    closeAddEditModal,
    recipeEdited,
    editRecipe,
  } = useContext(RecipesContext);
  console.log(isAddEditModalOpen);
  return (
    <>
      <GlobalStyle />
      <Title>Recipes list</Title>
      <Section>
        <RecipesList />
        {
          recipeEdited &&
          <Modal heading={recipeEdited.name} onClose={closeAddEditModal} isOpen={isAddEditModalOpen}>
            <RecipeForm onSubmit={editRecipe} recipe={recipeEdited}/>
          </Modal>
        }
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
