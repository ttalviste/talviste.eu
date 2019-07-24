import * as React from 'react';
import { storiesOf } from '@storybook/react';
import ReadingList, { IReadingListProps } from './ReadingList';
import { ReadingItemType } from './ReadingItemType';

const stubItems: ReadingItemType[] = [
  { id: 1, title: 'One', description: 'This is some sample text' },
  { id: 2, title: 'Two' },
  { id: 3, title: 'Three', description: 'This is some sample text' }
];

const props: IReadingListProps = {
  items: stubItems
};

storiesOf('Reading list', module)
  .add('empty list', () => <div>You have nothing in the list!</div>)
  .add('with some items', () => <ReadingList {...props} />);
