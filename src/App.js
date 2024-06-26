import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import Video from './components/VideoItemDetails'
import SavedVideo from './components/SavedVideo'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import ThemeContext from './context/ThemeContext'
import SavedVideoContext from './context/SavedVideoContext'

class App extends Component {
  state = {dark: false, savedVideos: []}

  changeTheme = () => {
    this.setState(prevState => ({dark: !prevState.dark}))
  }

  logOut = () => {
    Cookies.remove('jwt_token')
  }

  onSave = videoDetails => {
    const {savedVideos} = this.state
    if (savedVideos.find(obj => obj.id === videoDetails.id) === undefined)
      this.setState(prev => ({
        savedVideos: [...prev.savedVideos, videoDetails],
      }))
  }

  removeSave = id => {
    this.setState(prev => ({
      savedVideos: prev.savedVideos.filter(video => video.id !== id),
    }))
  }

  render() {
    const {dark, savedVideos} = this.state
    return (
      <ThemeContext.Provider
        value={{dark, changeTheme: this.changeTheme, logOut: this.logOut}}
      >
        <SavedVideoContext.Provider
          value={{
            savedVideos,
            onSave: this.onSave,
            removeSave: this.removeSave,
          }}
        >
          <Switch>
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/trending" component={Trending} />
            <ProtectedRoute exact path="/gaming" component={Gaming} />
            <ProtectedRoute exact path="/videos/:id" component={Video} />
            <ProtectedRoute exact path="/saved-videos" component={SavedVideo} />
            <Route exact path="/bad-path" component={NotFound} />
            <Redirect to="/bad-path" />
          </Switch>
        </SavedVideoContext.Provider>
      </ThemeContext.Provider>
    )
  }
}
export default App
