import React, { FC } from 'react';
import styled from 'styled-components';
import { ReadingItemType } from './ReadingItemType';
import {
  fontFamily,
  fontSize,
  gray2,
  accent1,
  gray5,
  gray1
} from '../../Styles';

export interface IReadingListProps {
  items?: ReadingItemType[];
}
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

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px 0px;
  border-top: 1px solid ${gray5};
  :first-child {
    border-top: none;
  }
`;

interface ITextProps {
  size?: string;
}
const Text = styled.div<ITextProps>`
  font-family: ${fontFamily};
  font-size: ${props => props.size || fontSize};
  color: ${gray2};
`;

const Title = styled(Text)`
  font-size: 18px;
  color: ${gray1};
  margin-bottom: 5px;
`;
const ReadingList: React.FC<IReadingListProps> = props => (
  <Container>
    <div>
      <List>
        {props.items &&
          props.items.map(({ id, title, description }) => (
            <ListItem key={id}>
              <Title>{title}</Title>
              <Text size="14px" as="p">
                {description}
              </Text>
            </ListItem>
          ))}
      </List>
    </div>
  </Container>
);
ReadingList.defaultProps = {
  items: []
};

export default ReadingList;
