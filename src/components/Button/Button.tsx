import styled from 'styled-components';

import { colors, others } from 'styles/variables';

export enum ButtonVariety {
  REGULAR = 'regular',
  SECONDARY = 'secondary',
  DELETE = 'delete',
}

interface Props extends StyledProps {
  text: string;
  onClick: React.MouseEventHandler;
}

interface StyledProps {
  variety?: ButtonVariety;
}

const Button = ({ text, variety = ButtonVariety.REGULAR, onClick }: Props): JSX.Element => (
  <StyledButton onClick={onClick} variety={variety}>
    {text}
  </StyledButton>
);

const StyledButton = styled.button<StyledProps>`
  min-width: 100px;
  padding: 12px;
  background: ${({ color }) => {
    switch (color) {
      case ButtonVariety.REGULAR:
        return colors.purple;
      case ButtonVariety.SECONDARY:
        return colors.midGrey;
      case ButtonVariety.DELETE:
        return colors.red;
    }
  }};
  font-size: 17px;
  line-height: 24px;
  text-align: center;
  color: ${colors.whiteNatural};
  border: none;
  border-radius: ${others.borderRadiusSmall};
  cursor: pointer;
  transition: 0.3s ease-in-out;
  transition-property: background, box-shadow;

  :hover {
    background: ${({ color }) => {
    switch (color) {
      case ButtonVariety.REGULAR:
        return colors.darkPurple;
      case ButtonVariety.SECONDARY:
        return colors.darkGrey;
      case ButtonVariety.DELETE:
        return colors.darkRed;
    }
  }};
    box-shadow: 0px 4px 3px 2px rgba(0, 0, 0, 0.05);
  }
`;

export default Button;