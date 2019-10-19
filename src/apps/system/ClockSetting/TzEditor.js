import React from 'react';
import {
  Select,
  Fieldset,
  ListItem, Button,
} from 'react95';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';

import { setStorage } from '../../../utils/index';

import allTimezones from './timezones.json';

class TzEditor extends React.Component {
  constructor(props) {
    super(props);
    const mappedTimezones = Object.keys(allTimezones).map((key) => ({
      label: key,
      value: allTimezones[`${key}`],
    }));

    this.state = {
      timezones: mappedTimezones,
      curHighlightTz: allTimezones[0].value,
      selectedTz: [],
    };
    this.onSortEnd = this.onSortEnd.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);
    this.submitAddTz = this.submitAddTz.bind(this);
  }

  onSortEnd({ oldIndex, newIndex }) {
    this.setState(({ selectedTz }) => ({
      selectedTz: arrayMove(selectedTz, oldIndex, newIndex),
    }));
  }

  onSelectChange(value) {
    this.setState({
      curHighlightTz: value,
    });
  }

  submitAddTz() {
    const { curHighlightTz, selectedTz } = this.state;
    const newSelectedTz = [selectedTz, curHighlightTz];
    setStorage('CLOCK_TIMEZONES', newSelectedTz);
  }

  render() {
    const { timezones, selectedTz } = this.state;
    const SortableItem = SortableElement(({ value }) => (
      <ListItem>{value}</ListItem>
    ));
    const SortableList = SortableContainer(({ items }) => (
      <ul>
        {items.map((value, index) => (
          <SortableItem key={`item-${value}`} index={index} value={value} />
        ))}
      </ul>
    ));
    return (
      <div>
        <Fieldset label="ADD A TIMEZONE">
          <Select items={timezones} height={400} width={400} />
          <Button onClick={this.submitAddTz}>ADD</Button>
        </Fieldset>
        <Fieldset label="SELECTED TIMEZONE">
          <SortableList items={selectedTz} onSortEnd={this.onSortEnd} />
        </Fieldset>
      </div>
    );
  }
}

export default TzEditor;
