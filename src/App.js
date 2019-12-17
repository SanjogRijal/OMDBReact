import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Table from 'react-bootstrap/Table';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount(){
    fetch('https://www.omdbapi.com/?i=tt3896198&apikey=efe5ce36').then((res) => res.json()).then((json) => {
      
      this.setState({
        isLoaded: true,
        items: json,
      });
    })
  }

  render(){
    var data = []
    var {isLoaded, items} = this.state;
    
    data.push(items);
    console.log((data));

    if (!isLoaded) {
      return <div> Data not received. Connection to API Failed</div>
    } else {
      return (
      <div>
      

       <Table striped bordered hover>
        
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Poster</th>
            <th>Director</th>
            <th>Writer</th>
            <th>Cast and Crew</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            {(data).map(item => (
              <td key = {item.Title}>
              {item.Title}
              </td>
              
             ))}
          </tr> 
        </tbody>

      </Table>

      </div>
      
        
      
    )
    }
    
  }
  
}

export default App;
