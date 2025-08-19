import React from "react";

interface MainState {
  name: string;
  age: string;
}

export default class Main extends React.Component<any, MainState> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: props.name,
      age: props.age,
    };
  }

  //   static getDerivedStateFromProps(nextProps: any, prevState: any) {
  //     console.log("GDSFP Method prev State", prevState, "next props", nextProps);
  //     if (nextProps.name != prevState.name) {
  //       console.log("executing GDSFP method 1");
  //       return {
  //         name: nextProps.name,
  //         age: nextProps.age,
  //       };
  //     } else {
  //       console.log("executing GDSFP method 2");
  //       return null;
  //     }
  //   }

  componentDidMount(): void {
    console.log("component is mounted and executing component did mount");
  }

  shouldComponentUpdate(
    nextProps: Readonly<any>,
    nextState: Readonly<MainState>,
    nextContext: any
  ): boolean {
    if (nextProps !== this.props) {
      console.log("executing shouldComponentUpdate 1");
      return true;
    } else if (nextState !== this.state) {
      console.log("executing shouldComponentUpdate 2", nextState);
      return true;
    }
    return false;
  }

  getSnapshotBeforeUpdate(
    prevProps: Readonly<any>,
    prevState: Readonly<MainState>
  ) {
    return { prevState: prevState, prevProps: prevProps };
  }

  componentDidUpdate(
    prevProps: Readonly<any>,
    prevState: Readonly<MainState>,
    snapshot?: any
  ): void {
    console.log("this is snapshot", snapshot);
    if (
      prevProps.name !== this.props.name ||
      prevProps.age !== this.props.age
    ) {
      console.log("current props", this.props);
      this.setState({
        name: this.props.name,
        age: this.props.age,
      });
    }
  }

  componentWillUnmount(): void {
    console.log("this executes when component unmounts");
  }

  render() {
    console.log("executing render", this.state.name, this.state.age);
    return (
      <div>
        <p>
          My name is {this.state.name} and age is {this.state.age}
        </p>
        <button
          onClick={() => {
            this.setState({ name: "chai", age: "25" });
          }}
        >
          Change State
        </button>
      </div>
    );
  }
}
