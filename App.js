import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import React from 'react'
import {Provider} from './src/context/BlogContext'

import IndexScreen from './src/screen/IndexScreen'
import ShowScreen from './src/screen/ShowScreen'
import CreateScreen from './src/screen/CreateScreen'
import EditScreen from './src/screen/EditScreen'

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
    Edit: EditScreen
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blog'
    }
  }
)

const App = createAppContainer(navigator)

export default () => {
  return <Provider> 
    <App/>
  </Provider>
}
