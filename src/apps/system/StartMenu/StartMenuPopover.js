import React from 'react';
import { ListItem, Divider } from 'react95';
import { CATALOG, REGISTRY } from '../../registry';

class StartMenuPopover extends React.Component {
  constructor(props) {
    super(props);
    const mainList = Object.keys(CATALOG).map((cat, index) => ({
      name: CATALOG[`${cat}`],
      active: index === 0,
      children: REGISTRY.filter((reg) => reg.catalog === CATALOG[`${cat}`])
        .map((app) => ({
          ...app,
        })),
    }));
    this.state = {
      mainList,
    };
  }

  handleClickMainlistItem = (idx) => {
    const { mainList } = this.state;
    const newMainList = mainList.map((item, index) => ({
      ...item,
      active: index === idx,
    }));
    this.setState({
      mainList: newMainList,
    });
  }

  handleClickApplication = (app) => {
    window.launchApp(app.id);
  }

  render() {
    const { mainList } = this.state;
    const sideList = mainList.find((item) => item.active).children || [];
    return (
      <div className="startmenu">
        <div className="panel left">
          {mainList.map((item, index) => (
            <ListItem
              key={`main-${item.name}`}
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
            <ListItem
              key={`side-${item.name}`}
              onClick={() => this.handleClickApplication(item)}
            >
              {item.name}
            </ListItem>
          ))}
        </div>
      </div>
    );
  }
}

export default StartMenuPopover;
