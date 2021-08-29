import styled from 'styled-components';

import GlobalStyle from 'styles/globalStyles';
import { colors } from 'styles/variables';

import Section from 'components/Section';
import RecipesList from 'components/RecipesList';
import Modal from 'components/Modal';

import { RecipesProvider } from 'context/RecipesContext';

const App = (): JSX.Element => {

  return (
    <>
      <GlobalStyle />
      <Title>Recipes list</Title>
      <Section>
        <RecipesProvider>
          <RecipesList />
          <Modal heading="Test" onClose={(event) => console.log(event)} isOpen={true}>
            This is just a test
          </Modal>
        </RecipesProvider>
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
