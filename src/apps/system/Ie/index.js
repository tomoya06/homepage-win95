import {
  Button, Hourglass, Toolbar, TextField,
  Cutout,
} from 'react95';
import React from 'react';
import WindowFrame from '../../../layouts/WindowFrame';

import './index.scss';

const defaultLink = 'https://www.youtube.com/embed/-UYgORr5Qhg';
const hintSelections = [
  'DONT YOU HAVE A CHROME???',
  'WHAT??? YOU REALLY DONT HAVE A CHROME???',
  'DO YOU HAVE FIREFOX???',
  'WHEN THE HECK DID YOU GET YOUT COMPUTER???',
  'YOU SHOULD GET A NEW ONE.',
];

class IE extends React.Component {
  appName = 'system.ie'

  constructor(props) {
    super(props);
    this.state = {
      link: defaultLink,
      localLink: defaultLink,
      linkStack: [],
      hintIdx: -1,
      isIframeLoaded: false,
    };

    this.iframeRef = React.createRef();
  }

  handleLinkChange = (e) => {
    this.setState({
      localLink: e.target.value,
    });
  }

  handleSubmitLink = () => {
    const {
      localLink, linkStack, hintIdx, link,
    } = this.state;
    let newStack = [];
    if (linkStack.length === 0
      || (linkStack.length > 0 && linkStack[linkStack.length - 1] !== localLink)) {
      newStack = [...linkStack, link];
      this.setState({
        link: localLink,
        linkStack: newStack,
        hintIdx: (hintIdx + 1) % hintSelections.length,
      });
    }
  }

  resetLink = () => {
    const { link } = this.state;
    this.setState({
      localLink: link,
    });
  }

  goback = () => {
    const { linkStack } = this.state;
    const lastLink = [...linkStack].pop();
    if (lastLink) {
      this.setState({
        link: lastLink,
        localLink: lastLink,
        linkStack: [...linkStack].slice(0, -1),
      });
    }
  }

  handleIframeLoaded = () => {
    this.setState({
      isIframeLoaded: true,
    });
  }

  render() {
    const {
      link, localLink, hintIdx, isIframeLoaded, linkStack,
    } = this.state;
    const body = (
      <div className="ie-container">
        <div className="header">
          <Toolbar style={{ justifyContent: 'space-between' }}>
            <Button
              onClick={this.goback}
              disabled={linkStack.length === 0}
            >
              <span>BACK</span>
            </Button>
            <Button
              onClick={this.resetLink}
            >
              <span>F5</span>
            </Button>
            <TextField
              placeholder="Search..."
              style={{ flexGrow: 1, margin: '0 .6rem' }}
              value={localLink}
              onChange={this.handleLinkChange}
            />
            <Button onClick={this.handleSubmitLink}>
              {
                link !== defaultLink || !isIframeLoaded ? (
                  <Hourglass />
                ) : (
                  <span>GO</span>
                )
              }
            </Button>
          </Toolbar>
        </div>
        <div className="content">
          <Cutout style={{ width: '100%', height: '100%' }}>
            {
              link === defaultLink ? (
                <iframe
                  title="YOUTUBE"
                  width="100%"
                  height="100%"
                  src={link}
                  frameBorder="0"
                  onLoad={this.handleIframeLoaded}
                />
              ) : (
                <div
                  style={{
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span>{hintSelections[hintIdx]}</span>
                </div>
              )
            }
          </Cutout>
        </div>
      </div>
    );
    return (
      <WindowFrame
        appid={this.appName}
        header={`INTERNET EXPLORER - ${link}`}
        content={body}
        contentClassName="ie-content-container"
        width="800px"
        height="600px"
      />
    );
  }
}

export default IE;
