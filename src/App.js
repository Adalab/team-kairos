import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import './App.scss';
import Login from './components/Login';
import DevelopersList from './components/DevelopersList';
import { devAsignation } from './components/Data';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '', 
      rol: 'head' ,
      devAsignation: devAsignation,
    };
    this.getUserData = this.getUserData.bind(this);
  }
  getUserData(event) {
    const value = event.currentTarget.value;
    const id = event.currentTarget.id;
    this.setState({[id]: value });
  }

  render() {
    const { email, devAsignation, rol } = this.state;
    return (
      <div className="app">
        <Header email={email}/>
        <Login
          email={email}
          getUserData={this.getUserData} />
        <DevelopersList devAsignation={devAsignation} />

         <Form rol ={rol} /> 
      </div>
    );
  }
}

export default App;
