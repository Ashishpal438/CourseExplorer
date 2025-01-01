import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import CourseDetailsScreen from '../screens/CourseDetailsScreen';
import EnrolledCoursesScreen from '../screens/EnrolledCoursesScreen';
import HomeScreen from '../screens/HomeScreen';

const Navigator = () => {
  const Stack = createNativeStackNavigator();
  const initialRouteName = 'HomeScreen';
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRouteName}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CourseDetailsScreen"
          component={CourseDetailsScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="EnrolledCoursesScreen"
          component={EnrolledCoursesScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;