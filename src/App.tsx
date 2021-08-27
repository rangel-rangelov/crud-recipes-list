import styled from 'styled-components';

import Section from 'components/Section';
import GlobalStyle from 'styles/globalStyles';

const App = (): JSX.Element => (
  <div>
    <GlobalStyle />
    <Title>Recipes list</Title>
    <Section>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, necessitatibus provident corporis minus saepe veniam voluptatum ex minima corrupti itaque aut cum porro qui ratione? Magnam eveniet exercitationem neque doloribus.</Section>
  </div>
);

const Title = styled.h1`
  margin: 0 0 32px;
  font-size: 48px;
  text-align: center;
`;

export default App;
