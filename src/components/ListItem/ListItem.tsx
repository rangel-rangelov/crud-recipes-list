import styled from 'styled-components';

import { colors } from 'styles/variables';
import Button, { ButtonVariety, ButtonSize } from 'components/Button';

export enum ListItemType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
}

interface Props extends StyledProps {
  id: number
  title: string;
  description: string;
  onDelete: (id: number) => void;
}

interface StyledProps {
  type?: ListItemType;
}

const ListItem = ({
  id,
  title,
  description,
  type = ListItemType.PRIMARY,
  onDelete,
}: Props): JSX.Element => (
  <StyledListItem type={type}>
    <Title>{title}</Title>
    <Description>{description}</Description>
    <ButtonHolder>
      <Button
        text="Delete"
        variety={ButtonVariety.DELETE}
        onClick={() => onDelete(id)}
        size={ButtonSize.SMALL}
      />
      <Button
        text="Expand"
        variety={ButtonVariety.SECONDARY}
        size={ButtonSize.SMALL}
        onClick={() =>  console.log('here')}
      />
    </ButtonHolder>
  </StyledListItem>
);

const StyledListItem = styled.div<StyledProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${colors.lighterGrey};
  padding: 4px 24px;
  box-shadow: ${({ type }) => {
    switch (type) {
      case ListItemType.PRIMARY:
        return 'inset 3px 0px 0px 0px transparent';
      case ListItemType.SECONDARY:
        return `inset 3px 0px 0px 0px ${colors.green}`;
      case ListItemType.TERTIARY:
        return `inset 3px 0px 0px 0px ${colors.yellow}`;
    }
  }};
  
  &:last-of-type {
    border-bottom: none;
    margin-bottom: 32px;
  }
`;

const Title = styled.h3`
  flex-basis: 40%;
  font-size: 17px;
  line-height: 24px;
  font-weight: 400;
`;

const Description = styled.h3`
  flex-basis: 40%;
  font-size: 15px;
  line-height: 20px;
  font-weight: 400;
  color: ${colors.lightGrey};
`;

const ButtonHolder = styled.div`
  flex-basis: 20%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  > * {
    margin-right: 8px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export default ListItem;