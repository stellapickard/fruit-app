
// class DateInput extends React.Component {
//   constructor(props){
//     super(props);
//     state={
//       deadline: 'December 25, 2019',
//       new_deadline: ''
//     }
//     this.updateDeadline = this.updateDeadline.bind(this)
//   };

//   updateDeadline(){
//     this.setState={new_deadline: this.state.newDeadline}
//   }


//   render(){
//     return(
//       <div className ='date-input'>
//         <h1> Pick a date </h1>
//         <form>
//           <label for='date'>Date</label>
//           <input type='date' id='date' onChange={event=> this.setState({newDeadline: event.target.value})}></input>
//           <br/>
//           <button onClick={this.updateDeadline()}>Submit</button>
//         </form>
//         <h1> We are counting down to:</h1>
//         <h3>{this.state.deadline}</h3>
        
//       </div>
//     )
//   }
// }