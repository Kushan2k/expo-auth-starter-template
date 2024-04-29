import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';


import { Tabs } from 'expo-router';
// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  
  return (
    <Tabs />

  );
}
