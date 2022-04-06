import React from "react";
import p5 from "p5";
import { randomColour } from "./utils/colourUtils";

interface IProps {
  name: string;
}
class MySketch2 extends React.Component {
  private myRef: React.RefObject<HTMLInputElement>;
  private myP5: p5;

  constructor(props: IProps) {
    super(props);
    this.myRef = React.createRef();
  }

  Sketch = (p: p5): void => {
    let isRainbow = false;

    function handleMousePressed() {
      isRainbow = !isRainbow;
    }

    p.setup = () => {
      const canvas = p.createCanvas(700, 400);
      canvas.mousePressed(handleMousePressed);
      p.background("white");
      p.rectMode(p.CENTER);
      // p.frameRate(1);
    };

    p.draw = () => {
      //p5 doesn't provide shadows but the underlying canvas API does.
      p.drawingContext.shadowBlur = 10;
      p.drawingContext.shadowColor = 'black';

      const x = p.random(0, p.width);
      const y = p.random(0, p.height);
      if (isRainbow) {
        p.fill(randomColour(p));
      }
      else {
        p.fill(p.random(255));
      }
      const size = p.abs(p.randomGaussian(100, 30));
      const cornerRadius = p.random([size / 10, size / 2]);
      p.square(x, y, size, cornerRadius);
    };


  };

  componentDidMount(): void {
    const node: HTMLElement | undefined =
      this.myRef.current === null ? undefined : this.myRef.current;
    this.myP5 = new p5(this.Sketch, node);
  }

  render(): JSX.Element {
    return (
      <div className="mySketchComponent">
        <h1>A p5 sketch</h1>
        <div
          className='p5sketch'
          ref={this.myRef}
        ></div>
      </div >
    );
  }
}

export default MySketch2;

