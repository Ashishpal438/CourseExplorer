import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import CourseListScreen from './CourseListScreen';
import EnrolledCoursesScreen from './EnrolledCoursesScreen';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: () => {
          let iconName;
          if (route.name === 'CourseListScreen') {
            iconName = 'home';
          } else if (route.name === 'Enrolled') {
            iconName = 'bookmark';
          }

          return <Icon name={iconName} size={20} color={'black'} />;
        },
      })}>
      <Tab.Screen
        name="CourseListScreen"
        component={CourseListScreen}
        options={{
          title: 'Home',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Enrolled"
        component={EnrolledCoursesScreen}
        options={{title: 'Enrolled', headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
