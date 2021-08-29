import styled from 'styled-components';

import { colors, others } from 'styles/variables';

interface Props {
  children: React.ReactNode
}

const Section = ({ children }: Props): JSX.Element => (
  <StyledSection>
    {children}
  </StyledSection>
);

const StyledSection = styled.section`
  margin: 0 -40px;
  padding: 12px 0;
  background: ${colors.white};
  
  @media(min-width: 768px) {
    margin: 0;
    padding: 24px;
    border-radius: ${others.borderRadiusBig};
  }
`;

export default Section;