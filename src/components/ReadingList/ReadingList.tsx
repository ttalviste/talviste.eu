import React from 'react';
import styled from 'styled-components';
import ReadingListItemComponent from './ReadingListItem';
import { ReadingItemType } from './ReadingItemType';
import { fontFamily, fontSize, gray2, accent1 } from '../../Styles';

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

const ReadingListComponent: React.FC<ReadingListProps> = props => (
  <Container>
    <div>
      <List>
        {props.items &&
          props.items.map(item => <ReadingListItemComponent {...item} />)}
      </List>
    </div>
  </Container>
);
ReadingListComponent.defaultProps = {
  items: stubItems
};

export default ReadingListComponent;
