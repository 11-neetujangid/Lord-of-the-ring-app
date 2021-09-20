
import './App.css';
import HomePage from './Component/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './Reducers/reducer'
import MovieQuotes from './Component/MovieQuotes';
import CharacterQuotes from './Component/CharacterQuotes';

const store = createStore(reducer, applyMiddleware(thunk));
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/movie/:record/quote" component={MovieQuotes}/>
            <Route exact path="/character/:record/quote" component={CharacterQuotes}/>
          </Switch>
        </Router>
      </div>
    </Provider >
    
  );
}

export default App;
