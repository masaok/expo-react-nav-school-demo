import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { Ionicons } from '@expo/vector-icons'

import ActionsList from '../screens/ActionsList'
import ActionDetails from '../screens/ActionDetails'
import ContactsList from '../screens/ContactsList'
import ContactDetails from '../screens/ContactDetails'
import Settings from '../screens/Settings'
import Loading from '../screens/Loading'
import Modal from '../screens/Modal'
import Modal2 from '../screens/Modal2'

import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'

const ContactsStack = createStackNavigator()
const ContactsStackScreen = () => (
  <ContactsStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: 'pink' },
    }}
  >
    <ContactsStack.Screen
      name="ContactsList"
      component={ContactsList}
      options={{
        headerTitle: 'Contacts',
      }}
    />
    <ContactsStack.Screen
      name="ContactDetails"
      component={ContactDetails}
      options={({ route }) => {
        return {
          headerTitle: `${route.params.contact.name.first} ${route.params.contact.name.last}`,
          headerStyle: { backgroundColor: 'green' },
        }
      }}
    />
  </ContactsStack.Navigator>
)

const ActionsStack = createStackNavigator()
const ActionsStackScreen = () => (
  <ActionsStack.Navigator>
    <ActionsStack.Screen name="ActionsList" component={ActionsList} />
    <ActionsStack.Screen name="ActionDetails" component={ActionDetails} />
  </ActionsStack.Navigator>
)

const AppTabs = createBottomTabNavigator()
const AppTabsScreen = () => (
  <AppTabs.Navigator
    tabBarOptions={{
      activeTintColor: 'red',
      activeBackgroundColor: 'blue',
    }}
  >
    <AppTabs.Screen
      name="Contacts"
      component={ContactsStackScreen}
      options={{
        tabBarIcon: props => (
          // https://reactnavigation.org/docs/tab-based-navigation/#customizing-the-appearance
          <Ionicons name="ios-construct" size={props.size} color={props.color} />
        ),
      }}
    />
    <AppTabs.Screen
      name="Actions"
      component={ActionsStackScreen}
      options={{
        tabBarIcon: props => (
          <Ionicons name="ios-construct" size={props.size} color={props.color} />
        ),
      }}
    />
    <AppTabs.Screen name="Contacts2" component={ContactsStackScreen} />
    <AppTabs.Screen name="Actions2" component={ActionsStackScreen} />
  </AppTabs.Navigator>
)

const AppDrawer = createDrawerNavigator()
const AppDrawerScreen = () => (
  <AppDrawer.Navigator drawerType="slide">
    <AppDrawer.Screen name="Tabs" component={AppTabsScreen} options={{ drawerLabel: 'Home' }} />
    <AppDrawer.Screen name="Settings" component={Settings} />
  </AppDrawer.Navigator>
)

const AuthStack = createStackNavigator()
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="SignIn" component={SignIn} />
    <AuthStack.Screen name="SignUp" component={SignUp} />
  </AuthStack.Navigator>
)

const RootStack = createStackNavigator()
const RootStackScreen = () => {
  const [isLoading, setIsLoading] = React.useState(true)
  const [user, setUser] = React.useState(null)

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading)
      setUser({})
    }, 500)
  }, [])

  return (
    <RootStack.Navigator headerMode="none" screenOptions={{ animationEnabled: false }} mode="modal">
      {isLoading ? (
        <RootStack.Screen name="Loading" component={Loading} />
      ) : user ? (
        <RootStack.Screen name="AppDrawerScreen" component={AppDrawerScreen} />
      ) : (
        <RootStack.Screen name="AuthStackScreen" component={AuthStackScreen} />
      )}
      <RootStack.Screen name="Modal" component={Modal} options={{ animationEnabled: true }} />
      <RootStack.Screen name="Modal2" component={Modal} options={{ animationEnabled: false }} />
    </RootStack.Navigator>
  )
}

export default () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  )
}
