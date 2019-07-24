import * as React from 'react';
import { storiesOf } from '@storybook/react';
import ReadingListItem, { ReadingListItemProps } from './ReadingListItem';

const propsWithoutDescription: ReadingListItemProps = {
  id: 1,
  title: 'One'
};

const props: ReadingListItemProps = {
  id: 1,
  title: 'One',
  description: 'This is some sample text'
};

storiesOf('Reading list items', module)
  .add('without description', () => (
    <ReadingListItem {...propsWithoutDescription} />
  ))
  .add('with description', () => <ReadingListItem {...props} />);
