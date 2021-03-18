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

const ContactsStack = createStackNavigator()
const ContactsStackScreen = () => (
  <ContactsStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: 'red' },
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
  <AppDrawer.Navigator>
    <AppDrawer.Screen name="Tabs" component={AppTabsScreen} />
    <AppDrawer.Screen name="Settings" component={Settings} />
  </AppDrawer.Navigator>
)

export default () => (
  <NavigationContainer>
    {/* <ContactsStackScreen /> */}
    {/* <AppTabsScreen /> */}
    <AppDrawerScreen />
  </NavigationContainer>
)
