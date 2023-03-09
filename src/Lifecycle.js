import React from 'react';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      count: 0
    };
  }
  delHeader = () => {
    this.setState({show: false});
  }
  componentDidMount(){
    console.log("ComponentDidMount Method");
  }
  componentDidUpdate(){
    console.log("ComponentDidUpdate Method");
  }

  render() {
    let myheader;
    if (this.state.show) {
      myheader = <Child />;
    };
    return (
      <div>
        <center>
          {myheader}
          <button type="button" onClick={this.delheader}>Delete Header</button><hr /><hr />
          <h3>count : {this.state.count}</h3>
          <button onClick={()=>this.setState({count:this.state.count+1})}>Increment</button>
        </center>
      </div>
    );
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    console.log("componentWillUnmount method");
  }
  render() {
    return (
      <h1>Hello World</h1>
    );
  }
}

export default Container;