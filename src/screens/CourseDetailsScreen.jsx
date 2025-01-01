import React from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useDispatch, useSelector} from 'react-redux';
import {enrollCourse} from '../redux/slices/enrolledCoursesSlice';

const CourseDetailsScreen = ({route}) => {
  const dispatch = useDispatch();
  const {course} = route.params;

  const enrolledCourses = useSelector(
    state => state.enrolledCourses.enrolledCourses,
  );
  const enrolled = enrolledCourses.includes(course);
  const handleEnrollment = () => {
    dispatch(enrollCourse(course));
    Alert.alert('Success', 'You have been enrolled in the course!');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <FastImage
          style={styles.thumbnail}
          source={{
            uri: course.thumbnail,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
        <Text style={styles.title}>{course.name}</Text>
        <Text style={styles.description}>{course.description}</Text>
        <Text style={styles.instructor}>Instructor: {course.instructor}</Text>
        <Text style={styles.duration}>Duration: {course.duration}</Text>
        {!enrolled ? (
          <TouchableOpacity onPress={handleEnrollment} style={styles.button}>
            <Text style={[styles.enrolledText, {marginTop: 0}]}>
              Mark as Enrolled
            </Text>
          </TouchableOpacity>
        ) : (
          <Text style={styles.alreadyEnrolledText}>
            You are enrolled in this course!
          </Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default CourseDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  thumbnail: {
    width: '100%',
    height: 250,
    borderRadius: 8,
  },
  instructor: {
    fontSize: 16,
    marginBottom: 4,
    color: '#555',
  },
  duration: {
    fontSize: 16,
    marginBottom: 12,
    color: '#555',
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  enrolledText: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  alreadyEnrolledText: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
  },
  button: {
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: 'green',
    borderColor: 'green',
  },
});
