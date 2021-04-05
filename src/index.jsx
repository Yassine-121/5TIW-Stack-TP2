import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board';
import AppToolbar from './components/AppToolbar';

function App() {
  const [Voitures, setVoitures] = React.useState([
  		{title: 'Mercedes'},
  		{title: 'BMW'},
  		{title: 'Audi'}
  	]);

  setVoitures = voitures => this.setState({voitures});

  return (
    <div className="app">
      <AppToolbar />
      <Board />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
