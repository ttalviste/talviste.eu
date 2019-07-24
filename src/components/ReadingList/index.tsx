import React from 'react';
import styled from 'styled-components';
import {
  fontFamily,
  fontSize,
  gray2,
  accent1,
  gray5,
  gray1
} from '../../Styles';

export type ReadingItemType = {
  id: number;
  title: string;
  description?: string;
};

export type ReadingListItemProps = ReadingItemType;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px 0px;
  border-top: 1px solid ${gray5};
  :first-child {
    border-top: none;
  }
`;

type TextProps = {
  size?: string;
};
const Text = styled.div<TextProps>`
  font-family: ${fontFamily};
  font-size: ${props => props.size || fontSize};
  color: ${gray2};
`;

const Title = styled(Text)`
  font-size: ${props => props.size || '18px'};
  color: ${gray1};
  margin-bottom: 5px;
`;

export const ReadingListItem: React.FC<ReadingListItemProps> = props => (
  <ListItem key={props.id}>
    <Title size="20px">{props.title}</Title>
    <Text size="14px" as="p">
      {props.description}
    </Text>
  </ListItem>
);

export type ReadingListProps = {
  items?: ReadingItemType[];
};
const Container = styled.div`
  width: 400px;
  margin: 30px auto;
  font-family: ${fontFamily};
  font-size: ${fontSize};
  color: ${gray2};

  @media (max-width: 400px) {
    width: 100%;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0px 20px;
  background-color: #fff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top: 3px solid ${accent1};
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
`;

const stubItems: ReadingItemType[] = [
  { id: 1, title: 'One', description: 'This is some sample text' },
  { id: 2, title: 'Two' },
  { id: 3, title: 'Three', description: 'This is some sample text' }
];

const ReadingList: React.FC<ReadingListProps> = props => (
  <Container>
    <div>
      <List>
        {props.items && props.items.map(item => <ReadingListItem {...item} />)}
      </List>
    </div>
  </Container>
);
ReadingList.defaultProps = {
  items: stubItems
};

export default ReadingList;
