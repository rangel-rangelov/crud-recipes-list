import styled from 'styled-components';

import { colors, others } from 'styles/variables';

export enum ButtonVariety {
  REGULAR = 'regular',
  SECONDARY = 'secondary',
  DELETE = 'delete',
}

export enum ButtonSize {
  REGULAR = 'regular',
  SMALL = 'small',
}

interface Props extends StyledProps {
  text: string;
  onClick?: React.MouseEventHandler;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

interface StyledProps {
  variety?: ButtonVariety;
  size?: ButtonSize;
}

const Button = ({
  text,
  variety = ButtonVariety.REGULAR,
  size = ButtonSize.REGULAR,
  onClick,
  type = 'button',
}: Props): JSX.Element => (
  <StyledButton type={type} onClick={onClick} variety={variety} size={size}>
    {text}
  </StyledButton>
);

const StyledButton = styled.button<StyledProps>`
  min-width: ${({ size }) => size === ButtonSize.REGULAR ? '100px' : '60px'};
  padding: ${({ size }) => size === ButtonSize.SMALL ? '6px 8px' : '12px'};
  background: ${({ variety }) => {
    switch (variety) {
      case ButtonVariety.REGULAR:
        return colors.blue;
      case ButtonVariety.SECONDARY:
        return colors.midGrey;
      case ButtonVariety.DELETE:
        return colors.red;
    }
  }};
  font-size: ${({ size }) => size === ButtonSize.SMALL ? '14px' : '17px'};
  line-height: ${({ size }) => size === ButtonSize.SMALL ? '16px' : '24px'};
  text-align: center;
  color: ${colors.whiteNatural};
  border: none;
  border-radius: ${others.borderRadiusSmall};
  cursor: pointer;
  transition: 0.3s ease-in-out;
  transition-property: background, box-shadow;

  :hover {
    background: ${({ variety }) => {
    switch (variety) {
      case ButtonVariety.REGULAR:
        return colors.darkBlue;
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