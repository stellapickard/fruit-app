class CounterBody extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        count: 0,
        visible: true
      }
      this.increment = this.increment.bind(this)
      this.decrement = this.decrement.bind(this)
      this.reset = this.reset.bind(this)

  };

  increment(){
    this.setState({count: this.state.count += 1})
  }

  decrement(){
    this.setState({count: this.state.count -= 1})
  }

  reset(){
    this.setState({count: 0})
  }

  render(){
    return(
      <div className ='counter'>
        <h1> Let's count! </h1>
        <button onClick={this.increment}>Plus 1</button>
        <button onClick={this.decrement}>Minus 1</button>
        <br/>
        <p> Current count: {this.state.count} </p>
        <button onClick={this.reset}>Reset</button>
      </div>
    )
  }
}
