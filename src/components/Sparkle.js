import React from 'react'

const defaultCount = 50;
const defaultColor = ["#c5392a","#C0C0C0"];
const LIFE_SPAN = 1500;
const SPEED_Y = 2;
const SPEED_X = 1;
const SPEED_MULTIPLIER = 1/10;

const MOVE_COUNT = 0.5;
const MOUSE_RANGE = 25;

class sparkle {
  constructor ({x,y,color,style,vx,vy, size, isMouse = false}) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.style = style;
    this.vx = vx;
    this.vy = vy;
    this.opacity = Math.random();
    this.fading = false;
    this.size = size;
    this.isMouse = isMouse;
  }

  update = () => {
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    // update the opacity such that the sparkle lives 3s
    if (!this.fading) {
      this.opacity = this.opacity + (1/LIFE_SPAN)*60;
      if (this.opacity > 1) this.opacity = 1;
    } else {
      this.opacity = this.opacity - (1/LIFE_SPAN)*60;
      if (this.opacity < 0) this.opacity = 0;
    }
    if (this.opacity >= 1) this.fading = true;
  }
}

// add event listener for mouse move

// on mouse move spawn some new sparkles and add them to our list at the position of the mouse

// do no regenerate mouse sparkles

export default class SparkleView extends React.Component {

  constructor () {
    super();
    this._sparkles = [];
    this._canvas = null;
    this._initCanvas();
    this.sprite = new Image();
    this.sprites = [0,6,13,20];
    this.sprite.src = dataUri;
    this._spawnSparkles();

    // window.addEventListener('mousemove', this._handleMouseMove);
  }

  _initCanvas = () => {
    this._canvas = document.createElement('canvas');
    this._canvas.style.position = 'absolute';
    this._canvas.style.top = '0';
    this._canvas.style.pointerEvents = 'none';
    this._canvasContext = this._canvas.getContext('2d');
    this._resizeCanvas();
    document.body.appendChild(this._canvas);
    window.addEventListener('resize', this._resizeCanvas);
    window.requestAnimationFrame(this._go);
  }

  _resizeCanvas = () => {
    this._canvas.width = window.innerWidth;
    this._canvas.height = window.innerHeight;
  }

  _handleMouseMove = (e) => {
    for( let i = 0; i < MOVE_COUNT; i++ ) {
      const rand0 = Math.random() < 0.5 ? -1 : 1;
      const rand1 = Math.random() < 0.5 ? -1 : 1;
      const newX = (Math.random() * MOUSE_RANGE * rand0) + e.clientX + (25*Math.random());
      const newY = (Math.random() * MOUSE_RANGE * rand1) + e.clientY + (25*Math.random());
      this._sparkles.push(this._newSparkle(newX, newY, true));
    }
  }

  _spawnSparkles = () => {
    for( let i = 0; i < defaultCount; i++ ) {
      this._sparkles.push(this._newSparkle());
    }
  }

  _newSparkle = (x, y, isMouse) => {
    const color = defaultColor[ Math.floor(Math.random()*defaultColor.length) ];
    const rand0 = Math.random() < 0.5 ? -1 : 1;
    const rand1 = Math.random() < 0.5 ? -1 : 1;
    return new sparkle({
      x: x ? x : Math.floor(Math.random()*this._canvas.width),
      y: y ? y : Math.floor(Math.random()*this._canvas.height),
      color,
      style: this.sprites[ Math.floor(Math.random()*4) ],
      size: parseFloat((Math.random()*2).toFixed(2)),
      vx: Math.floor(Math.random() * SPEED_X * rand0)* SPEED_MULTIPLIER,
      vy: Math.floor(Math.random() * SPEED_Y * rand1)* SPEED_MULTIPLIER,
      isMouse,
    });
  }

  _updateSparkles = () => {
    let i = this._sparkles.length;
    while (i--) {
    // for (let i = 0; i < this._sparkles.length; i++) {
      const sparkle = this._sparkles[i];
      sparkle.update();
      // might need to check if it is off the canvas or has opacity 0 or something and create some new ones

      // check if sparkle has no opacity
      if (sparkle.opacity <= 0) {
        if (!sparkle.isMouse ) {
          this._sparkles[i] = this._newSparkle();
        } else {
          this._sparkles.splice(i,1);
        }
      }
      if (
        sparkle.x > this._canvas.width ||
        sparkle.x < 0 ||
        sparkle.y > this._canvas.height ||
        sparkle.y < 0
      ) {
        if (!sparkle.isMouse) {
          this._sparkles[i] = this._newSparkle();
        } else {
          this._sparkles.splice(i,1);
        }
      }
    }
  }

  // paint gets called with a time from requestAnimationFrame
  _paint = (time) => {
    // get the context
    const ctx = this._canvasContext;

    // clear the area
    ctx.clearRect( 0, 0, this._canvas.width, this._canvas.height );

    // loop through the sparkles and draw them
    for (const sparkle of this._sparkles) {
      // update the type if image if need be
      const modulus = Math.floor(Math.random()*7);

      if( Math.floor(time) % modulus === 0 ) {
        sparkle.style = this.sprites[ Math.floor(Math.random()*4) ];
      }

      ctx.save();
      ctx.globalAlpha = sparkle.opacity;
      ctx.drawImage(this.sprite, sparkle.style, 0, 7, 7, sparkle.x, sparkle.y, 7, 7);

      ctx.globalCompositeOperation = "source-atop";
      ctx.globalAlpha = 0.5;
      ctx.fillStyle = sparkle.color;
      ctx.fillRect(sparkle.x, sparkle.y, 7, 7);

      ctx.restore();
    }
  }

  _go = (time) => {
    this._paint(time);
    this._updateSparkles();
    window.requestAnimationFrame(this._go);
  }

  render () {
    return (<div>{this.props.children}</div>);
  }

  componentWillUnmount () {
    document.body.removeChild(this._canvas);
    window.removeEventListener('mousemove', this._handleMouseMove);
  }
}

const dataUri = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAHCAYAAAD5wDa1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIE1hY2ludG9zaCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozNDNFMzM5REEyMkUxMUUzOEE3NEI3Q0U1QUIzMTc4NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozNDNFMzM5RUEyMkUxMUUzOEE3NEI3Q0U1QUIzMTc4NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjM0M0UzMzlCQTIyRTExRTM4QTc0QjdDRTVBQjMxNzg2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM0M0UzMzlDQTIyRTExRTM4QTc0QjdDRTVBQjMxNzg2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+jzOsUQAAANhJREFUeNqsks0KhCAUhW/Sz6pFSc1AD9HL+OBFbdsVOKWLajH9EE7GFBEjOMxcUNHD8dxPBCEE/DKyLGMqraoqcd4j0ChpUmlBEGCFRBzH2dbj5JycJAn90CEpy1J2SK4apVSM4yiKonhePYwxMU2TaJrm8BpykpWmKQ3D8FbX9SOO4/tOhDEG0zRhGAZo2xaiKDLyPGeSyPM8sCxr868+WC/mvu9j13XBtm1ACME8z7AsC/R9r0fGOf+arOu6jUwS7l6tT/B+xo+aDFRo5BykHfav3/gSYAAtIdQ1IT0puAAAAABJRU5ErkJggg==";