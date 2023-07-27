/*import { Component } from 'react'

class Box extends Component {
    componentWillUnmount(){
      console.log('Unmounting');
    }
    render(){
      return(
        <h4>Box</h4>
      )
    }
  }

  class App extends Component {
    state = {
      count: 0,
      showBox: true,
    };
  
    constructor(){
      super();
      console.log("CONSTRUCTOR");
    }
  
    static getDerivedStateFromProps(nextProps, prevState){
      console.log("gdsfp", nextProps, prevState);
      return null;
    }
    componentDidMount(){
      console.log("Mount");
    }
  
    getSnapshotBeforeUpdate(prevProps, prevState){
      console.log('gsbu', prevProps, prevState);
      return null;
    }
  
    componentDidUpdate(){
      console.log('Update');
    }
  
    componentWillUnmount(){
      console.log('unmount');
    }

    render(){
        console.log("RENDER");
        return (
          <>
          <button onClick={()=> this.setState(prevState => ({...prevState, count: prevState.count-1 }))}>-</button>
          <h1>{this.state.count}</h1>
          <button onClick={()=> this.setState(prevState => ({...prevState, count: prevState.count+1 }))}>+</button>
          <button onClick={()=> this.setState(prevState => ({...prevState, showBox: !prevState.showBox}))}>{this.state.showBox ? "HIDE": "SHOW"}</button>
          {this.state.showBox && <Box/>}
          </>
    
        )
      }
    }
    
    export default App
    */