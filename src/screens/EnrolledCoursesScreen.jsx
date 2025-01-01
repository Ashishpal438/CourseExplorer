import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import CourseCard from '../components/CourseCard';

const EnrolledCoursesScreen = () => {
  const enrolledCourses = useSelector(
    state => state.enrolledCourses.enrolledCourses,
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <FlatList
          data={enrolledCourses}
          keyExtractor={item => item.id}
          renderItem={({item}) => <CourseCard item={item} />}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  listContainer: {
    padding: 10,
  },
});

export default EnrolledCoursesScreen;
