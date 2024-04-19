import {createContext} from 'react'

const ThemeContext = createContext({
  dark: false,
  changeTheme: () => {},
  logOut: () => {},
})

export default ThemeContext
