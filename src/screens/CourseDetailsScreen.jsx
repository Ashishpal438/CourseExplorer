import React, {useState} from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const CourseDetailsScreen = ({route}) => {
  const {course} = route.params;
  const [enrolled, setEnrolled] = useState(false);

  const handleEnrollment = () => {
    setEnrolled(true);
    Alert.alert('Success', 'You have been enrolled in the course!');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.title}>{course.name}</Text>
        <Text style={styles.instructor}>Instructor: {course.instructor}</Text>
        <Text style={styles.duration}>Duration: {course.duration}</Text>
        <Text style={styles.description}>{course.description}</Text>
        {!enrolled ? (
          <Button title="Mark as Enrolled" onPress={handleEnrollment} />
        ) : (
          <Text style={styles.enrolledText}>
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
    color: 'green',
  },
});
