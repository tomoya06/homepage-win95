import {
  AppBar, Button, Hourglass, Toolbar, TextField,
} from 'react95';
import React from 'react';
import WindowFrame from '../../../layouts/WindowFrame';

class IE extends React.Component {
  appName = 'system.ie'

  constructor(props) {
    super(props);
    this.state = {
      link: 'https://www.google.com',
    };

    this.iframeRef = React.createRef();
  }

  handleLinkChange = (e) => {
    this.setState({
      link: e.target.value,
    });
  }

  render() {
    const { link } = this.state;
    const body = (
      <div className="ie-container">
        <div className="header">
          <AppBar>
            <Toolbar style={{ justifyContent: 'space-between' }}>
              <Button>
                <Hourglass />
              </Button>
              <TextField
                placeholder="Search..."
                style={{ flexGrow: 1 }}
                value={link}
                onChange={this.handleLinkChange}
              />
              <Button>
                <span>GO</span>
              </Button>
            </Toolbar>
          </AppBar>
        </div>
        <div className="content">
          <iframe
            title="IE"
            width="100%"
            height="100%"
            ref={this.iframeRef}
            src={link}
          />
        </div>
      </div>
    );
    return (
      <WindowFrame
        appid={this.appName}
        header={`INTERNET EXPLORER - ${link}`}
        content={body}
        width="800px"
        height="600px"
      />
    );
  }
}

export default IE;
