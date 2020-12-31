/* import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux';
import store from './store/store';
import AddPost from './AddPost';
 */
/* function App() {
  return (
    <Provider store={store}>
      <div className="App">




         <AddPost/> 

      </div>
    </Provider>
  );
}


export default App; */
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from "react";
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import AddPost from './AddPost';
import { AdddPost } from './Pages/AdddPost'
import Home from './Pages/Home'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <Router>

        <div className={classes.root} className="navbar">
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">

              </IconButton>
              <Typography variant="h6" className={classes.title}>
                API DATA
              </Typography>
              <Button color="inherit"><Link to="/" className="link">Home</Link></Button>
              <Button color="inherit"><Link to="/Add" className="link">Add Post</Link></Button>
              <Button color="inherit"><Link to="/Post" className="link">Post</Link></Button>

            </Toolbar>
          </AppBar>
        </div>

        <div className="App">
          <header>

            <div>

              <Switch>
                <Route path="/Add">
                  <AdddPost />
                </Route>
                <Route path="/Post">
                  <AddPost />
                </Route>

                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>

          </header>
        </div >
      </Router>
    </Provider>
  );
}

export default App;

