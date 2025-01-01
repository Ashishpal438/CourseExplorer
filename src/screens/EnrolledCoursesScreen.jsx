import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import CourseCard from '../components/CourseCard';

const EnrolledCoursesScreen = () => {
  const enrolledCourses = useSelector(
    state => state.enrolledCourses.enrolledCourses,
  );

  if (enrolledCourses.length === 0) {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.emptyContainer}>
          <Text style={styles.text}>You have not enrolled in any course!</Text>
        </View>
      </SafeAreaView>
    );
  }

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
  emptyContainer: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  listContainer: {
    padding: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 500,
  },
});

export default EnrolledCoursesScreen;
