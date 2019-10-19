import React from 'react';
import { ListItem, Divider } from 'react95';

class StartMenuPopover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainList: [
        {
          name: 'Applications',
          active: true,
          children: [
            {
              name: 'Clock',
            },
          ],
        },
        {
          name: 'Settings',
          children: [],
        },
        {
          name: 'About',
          children: [],
        },
      ],
    };

    this.handleClickMainlistItem = this.handleClickMainlistItem.bind(this);
  }

  handleClickMainlistItem(idx) {
    const { mainList } = this.state;
    const newMainList = mainList.map((item, index) => ({
      ...item,
      active: index === idx,
    }));
    this.setState({
      mainList: newMainList,
    });
  }

  render() {
    const { mainList } = this.state;
    const sideList = mainList.find((item) => item.active).children || [];
    return (
      <div className="startmenu">
        <div className="panel left">
          {mainList.map((item, index) => (
            <ListItem
              onClick={() => this.handleClickMainlistItem(index)}
              style={{ textDecoration: item.active ? 'underline' : 'none' }}
            >
              {item.name}
            </ListItem>
          ))}
        </div>
        <Divider vertical size="sm" style={{ height: '100%' }} />
        <div className="panel right">
          {sideList.map((item) => (
            <ListItem>{item.name}</ListItem>
          ))}
        </div>
      </div>
    );
  }
}

export default StartMenuPopover;
