import styled from 'styled-components';

import GlobalStyle from 'styles/globalStyles';
import { colors } from 'styles/variables';

import Section from 'components/Section';
import RecipesList from 'components/RecipesList';

import { RecipesProvider } from 'context/RecipesContext';

const App = (): JSX.Element => {

  return (
    <>
      <GlobalStyle />
      <Title>Recipes list</Title>
      <Section>
        <RecipesProvider>
          <RecipesList />
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
    background-color: ${colors.midGrey}
  }
`;

export default App;
