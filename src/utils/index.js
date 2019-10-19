export const toggleFullScreen = (event) => {
  let element = document.body;

  if (event instanceof HTMLElement) {
    element = event;
  }

  const isFullscreen = document.webkitIsFullScreen || document.mozFullScreen || false;

  element.requestFullScreen = element.requestFullScreen
    || element.webkitRequestFullScreen
    || element.mozRequestFullScreen
    || (() => false);
  document.cancelFullScreen = document.cancelFullScreen
    || document.webkitCancelFullScreen
    || document.mozCancelFullScreen
    || (() => false);

  if (isFullscreen) {
    document.cancelFullScreen();
  } else {
    element.requestFullScreen();
  }
};

export const nothing = () => {};
