import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";
import { Card } from 'react-bootstrap';
//import Home from './Home.js'
//import Articles from './Articles.js';

//const posts = [];
function Home (){
  return <h1>Home</h1>
}

const tab = [
  <div className="row">
  <Card style={{ width: '24rem' }}>
    <Card.Body>
      <Card.Title>Clavier</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Logitech</Card.Subtitle>
      <Card.Text>
        Un clavier resistant et abordable
      </Card.Text>
      <Card.Link href="#">Acheter</Card.Link>
      <Card.Link href="#">30€</Card.Link>
    </Card.Body>
  </Card>
  <Card style={{ width: '24rem' }}>
    <Card.Body>
      <Card.Title>Souris</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Logitech</Card.Subtitle>
      <Card.Text>
        Une souris fiable et resistante
      </Card.Text>
      <Card.Link href="#">Acheter</Card.Link>
      <Card.Link href="#">20€</Card.Link>
    </Card.Body>
  </Card>
  <Card style={{ width: '24rem' }}>
    <Card.Body>
      <Card.Title>Ecran</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Samsung</Card.Subtitle>
      <Card.Text>
        Un écran 4k merveilleux
      </Card.Text>
      <Card.Link href="#">Acheter</Card.Link>
      <Card.Link href="#">230€</Card.Link>
    </Card.Body>
  </Card>
  </div>
];

function Articles() {
  return (
    <div className="row">
      {tab}
    </div>
  );
}
const App = () => ( {
  render() {
    return (
           <div className="App">
            <ul className="App-header">
              <li>
                <Link to="/Home">Home</Link>
              </li>
              <li>
                <Link to="/Articles">Articles</Link>
              </li>
            </ul>
            <Switch>
              <Route exact path='/Home' component={Home}></Route>
              <Route exact path='/Articles' component={Articles}></Route>
            </Switch>
          </div>
   );
  }
})
 
export default App;