import './styles/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexLink, IndexRoute, browserHistory } from 'react-router';

import {Home, Products, Orders} from './components/home';
import About from './components/about';

class Dashboard extends React.Component{

    render() {
        return <div>Welcome to the app!</div>
    }
}

class App extends React.Component {

    render() {
        return (
            <div>
                <h1><Link to="/" className="header-link">Simple SPA</Link></h1>
                <ul className="header">
                    <li><Link to="/home" activeClassName="active">Home</Link></li>
                    <li><Link to="/about" activeClassName="active">About</Link></li>
                </ul>
                <div className="content">
                    {console.log(this.props)}
                    {this.props.children}
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            {/* Show the dashboard at / */}
            <IndexRoute component={Dashboard} />
            <Route path="home" component={Home} >
                <Route path='/products' component={Products} />
                <Route path='/orders' component={Orders} />
            </Route>
            <Route path="about" component={About} />
        </Route>
    </Router>,
  document.getElementById('app')
);