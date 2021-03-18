import React from 'react'
import { Button, SafeAreaView } from 'react-native'

export default ({ navigation }) => (
  <SafeAreaView>
    <Button title="Toggle Drawer" onPress={() => navigation.toggleDrawer()} />
    <Button
      title="To Actions via Tabs"
      onPress={() => navigation.navigate('Tabs', { screen: 'Actions' })}
    />
    <Button title="To Actions" onPress={() => navigation.navigate('Actions')} />
  </SafeAreaView>
)
