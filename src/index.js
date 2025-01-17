import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from 'react-router-dom';

const routing = (
  <Router>
    <div>
    	<Switch>
        	<Route exact path="/" component={App} />
      	</Switch>
  	</div>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();