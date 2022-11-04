import {Route, Switch} from 'react-router-dom'
import Login from './components/Login'
import About from './components/About'
import LogoutButton from './components/LogoutButton'
import Home from './components/Home'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

const App = () => (
  <Switch>
    <ProtectedRoute exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/about" component={About} />
    <ProtectedRoute exact path="/logout-button" component={LogoutButton} />
    <NotFound />

    {/* This also can be used for mismatched paths <Route exact path="/not-found" component={NotFound} />
    <Redirect to="/not-found" /> */}
  </Switch>
)

export default App
