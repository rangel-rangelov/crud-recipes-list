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
  padding: 24px;
  background: ${colors.white};
  border-radius: ${others.borderRadiusBig};
`;

export default Section;