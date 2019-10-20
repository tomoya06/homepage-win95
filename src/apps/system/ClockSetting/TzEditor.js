import React from 'react';
import {
  Select,
  Fieldset,
  ListItem, Button,
} from 'react95';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import './index.scss';

import { triggerTimezoneListUpdate, getTimezoneList, updateTimezoneList } from '../Clock/eventBus';

import allTimezones from './timezones.json';

const mappedTimezones = allTimezones.map((key) => ({
  label: key,
  value: key,
  lag: parseInt(key.replace(/^\(GMT([-+]\d{2}).*$/, '$1'), 10),
}));

const currentTimezoneIdx = mappedTimezones.findIndex((zone) => zone.value === '(GMT+08:00) Asia/Taipei');

const MAX_TIMEZONE_COUNT = 5;

class TzEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timezoneSelections: mappedTimezones,
      selectedTimezone: mappedTimezones[currentTimezoneIdx].value,
      timezoneList: getTimezoneList() || [],
    };
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    const { timezoneList } = this.state;
    const newTimezone = arrayMove(timezoneList, oldIndex, newIndex);
    updateTimezoneList(newTimezone);
    triggerTimezoneListUpdate();
  }

  onSelectChange = (value) => {
    this.setState({
      selectedTimezone: value,
    });
  }

  submitAddTz = () => {
    const { timezoneSelections, selectedTimezone, timezoneList } = this.state;
    const newTimezone = timezoneSelections.find((zone) => zone.value === selectedTimezone);
    const newTimezoneList = [...timezoneList, newTimezone];
    updateTimezoneList(newTimezoneList);
    this.setState({
      timezoneList: newTimezoneList,
    });
    triggerTimezoneListUpdate();
  }

  handleDelete = (value) => {
    const { timezoneList } = this.state;
    const index = timezoneList.findIndex((zone) => zone.value === value);
    timezoneList.splice(index, 1);
    updateTimezoneList(timezoneList);
    this.setState({
      timezoneList,
    });
    triggerTimezoneListUpdate();
  }

  render() {
    const { timezoneSelections, timezoneList } = this.state;
    const SortableItem = SortableElement(({ value }) => (
      <ListItem key={value.label}>
        <div className="timezone-list-item">
          <div className="label">{value.label}</div>
          <Button
            onClick={() => this.handleDelete(value.value)}
            style={{ marginRight: '-6px', marginTop: '1px' }}
            size="sm"
            square
          >
            <span style={{ fontWeight: 'bold', transform: 'translateY(-1px)' }}>X</span>
          </Button>
        </div>
      </ListItem>
    ));
    const SortableList = SortableContainer(({ items }) => (
      <ul>
        {items && items.map((value, index) => (
          <SortableItem key={`item-${value.value}`} index={index} value={value} />
        ))}
      </ul>
    ));
    return (
      <div className="tz-editor">
        <Fieldset label="ADD A TIMEZONE">
          <div className="tz-add">
            <Select
              selectedIndex={currentTimezoneIdx}
              items={timezoneSelections}
              onChange={this.onSelectChange}
              height="100px"
              width="400px"
            />
            <Button
              onClick={this.submitAddTz}
              disabled={timezoneList.length >= MAX_TIMEZONE_COUNT}
            >
              <span>ADD</span>
            </Button>
          </div>
        </Fieldset>
        <Fieldset label="SELECTED TIMEZONE">
          <SortableList items={timezoneList} onSortEnd={this.onSortEnd} distance={2} />
        </Fieldset>
      </div>
    );
  }
}

export default TzEditor;
