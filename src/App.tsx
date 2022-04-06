import React from "react";
import p5 from "p5";

interface IProps {
  name: string;
}
class App extends React.Component {
  private myRef: React.RefObject<HTMLInputElement>;
  private myP5: p5;

  constructor(props: IProps) {
    super(props);
    this.myRef = React.createRef();
  }

  Sketch = (p: p5): void => {
    p.setup = () => {
      p.background("white");
    };

    p.draw = () => {
      p.square(0, 0, 50);
    };
  };

  componentDidMount(): void {
    const node: HTMLElement | undefined =
      this.myRef.current === null ? undefined : this.myRef.current;
    this.myP5 = new p5(this.Sketch, node);
  }

  render(): JSX.Element {
    return <div ref={this.myRef}></div>;
  }
}

export default App;
