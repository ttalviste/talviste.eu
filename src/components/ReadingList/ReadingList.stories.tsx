import * as React from 'react';
import { storiesOf } from '@storybook/react';
import ReadingList, {
  ReadingItemType,
  ReadingListProps,
  ReadingListItemProps,
  ReadingListItem
} from '.';

const stubItems: ReadingItemType[] = [
  { id: 1, title: 'One', description: 'This is some sample text' },
  { id: 2, title: 'Two' },
  { id: 3, title: 'Three', description: 'This is some sample text' }
];

const props: ReadingListProps = {
  items: stubItems
};

storiesOf('Reading list', module)
  .add('empty list', () => <div>You have nothing in the list!</div>)
  .add('with some items', () => <ReadingList {...props} />);

const itemPropsWithoutDescription: ReadingListItemProps = {
  id: 1,
  title: 'One'
};

const itemProps: ReadingListItemProps = {
  id: 1,
  title: 'One',
  description: 'This is some sample text'
};

storiesOf('Reading list items', module)
  .add('without description', () => (
    <ReadingListItem {...itemPropsWithoutDescription} />
  ))
  .add('with description', () => <ReadingListItem {...itemProps} />);
