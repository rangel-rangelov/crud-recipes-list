import styled from 'styled-components';

import GlobalStyle from 'styles/globalStyles';

import Section from 'components/Section';
import List from 'components/List';

const App = (): JSX.Element => (
  <div>
    <GlobalStyle />
    <Title>Recipes list</Title>
    <Section>
      <List />
    </Section>
  </div>
);

const Title = styled.h1`
  margin: 0 0 32px;
  font-size: 48px;
  text-align: center;
`;

export default App;
