import React from 'react';
import {
  Select,
  Fieldset,
  ListItem, Button,
} from 'react95';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import './index.scss';

import { setStorage, getStorage } from '../../../utils/index';

import allTimezones from './timezones.json';

const CLOCK_TIMEZONES = 'CLOCK_TIMEZONES';

class TzEditor extends React.Component {
  constructor(props) {
    super(props);
    const mappedTimezones = Object.keys(allTimezones).map((key) => ({
      label: key,
      value: allTimezones[`${key}`],
    }));

    this.state = {
      timezones: mappedTimezones,
      curHighlightTz: mappedTimezones[0].value,
      selectedTz: getStorage(CLOCK_TIMEZONES),
    };
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    const { selectedTz } = this.state;
    const newTz = arrayMove(selectedTz, oldIndex, newIndex);
    this.setState({
      selectedTz: newTz,
    });
    setStorage(CLOCK_TIMEZONES, newTz);
  }

  onSelectChange = (value) => {
    this.setState({
      curHighlightTz: value,
    });
  }

  submitAddTz = () => {
    const { curHighlightTz, selectedTz } = this.state;
    const newSelectedTz = [...new Set([...selectedTz, curHighlightTz])];
    setStorage(CLOCK_TIMEZONES, newSelectedTz);
    this.setState({
      selectedTz: newSelectedTz,
    });
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
      <div className="tz-editor">
        <Fieldset label="ADD A TIMEZONE">
          <div className="tz-add">
            <Select items={timezones} onChange={this.onSelectChange} height="100px" width="400px" />
            <Button onClick={this.submitAddTz}>ADD</Button>
          </div>
        </Fieldset>
        <Fieldset label="SELECTED TIMEZONE">
          <SortableList items={selectedTz} onSortEnd={this.onSortEnd} />
        </Fieldset>
      </div>
    );
  }
}

export default TzEditor;
