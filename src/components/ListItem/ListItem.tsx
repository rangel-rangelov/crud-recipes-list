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
  expanded?: boolean;
  details: Array<string>;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
  onDetails: (id: number | null) => void;
}

interface StyledProps {
  type?: ListItemType;
}

const ListItem = ({
  id,
  title,
  description,
  expanded = false,
  details,
  type = ListItemType.PRIMARY,
  onDelete,
  onDetails,
  onEdit,
}: Props): JSX.Element => (
  <>
    <StyledListItem type={type}>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <ButtonHolder>
        <Button
          text="Edit"
          onClick={() => onEdit(id)}
          size={ButtonSize.SMALL}
        />
        <Button
          text="Delete"
          variety={ButtonVariety.DELETE}
          onClick={() => onDelete(id)}
          size={ButtonSize.SMALL}
        />
        <Button
          text={!expanded ? 'Details' : 'Close'}
          variety={ButtonVariety.SECONDARY}
          size={ButtonSize.SMALL}
          onClick={() =>  onDetails(!expanded ? id : null)}
        />
      </ButtonHolder>
    </StyledListItem>
    { expanded && 
      <Details>
        <DetailsTitle>Other ingerdients</DetailsTitle>
        {
          details.map((item, index) => ( `${item}${details.length !== index + 1 ? ', ' : ''}` ))
        }
      </Details>
    }
  </>
);

const StyledListItem = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px 24px;
  border-bottom: 1px solid ${colors.lighterGrey};
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

  @media(min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  
  &:last-of-type {
    border-bottom: none;
    margin-bottom: 32px;
  }
`;

const Title = styled.h3`
  margin: 0 0 12px;
  flex-basis: 40%;
  font-size: 17px;
  line-height: 24px;
  font-weight: 400;

  @media(min-width: 768px) {
    margin: 0;
  }
`;

const Description = styled.h4`
  margin: 0 0 12px;
  flex-basis: 40%;
  font-size: 15px;
  line-height: 20px;
  font-weight: 400;
  color: ${colors.lightGrey};

  @media(min-width: 768px) {
    margin: 0; 
  }
`;

const ButtonHolder = styled.div`
  flex-basis: 20%;
  display: flex;
  align-items: center;

  @media(min-width: 768px) {
    justify-content: flex-end;
  }

  > * {
    margin-right: 8px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const Details = styled.div`
  width: 100%;
  padding: 8px 24px;
  font-size: 12px;
  line-height: 16px;
`;

const DetailsTitle = styled.h4`
  margin: 0 0 8px;
  font-size: 14px;
  line-height: 18px;
`;

export default ListItem;