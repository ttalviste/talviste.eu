import React, { FC } from 'react';
import styled from 'styled-components';
import { fontFamily, fontSize, gray2, gray5, gray1 } from '../../Styles';
import { ReadingItemType } from './ReadingItemType';

export interface IReadingListItemProps extends ReadingItemType {}

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
const ReadingListItem: React.FC<IReadingListItemProps> = props => (
  <ListItem key={props.id}>
    <Title>{props.title}</Title>
    <Text size="14px" as="p">
      {props.description}
    </Text>
  </ListItem>
);

export default ReadingListItem;
