# Course Explorer App

An app where users can browse courses, view course
details, and mark courses as &quot;enrolled.&quot;

## Development Setup

1. Configure your machine for React Native development by following the [official documentation](https://reactnative.dev/docs/environment-setup).

2. Clone the repo.

```bash
 git clone git@github.com:Ashishpal438/CourseExplorer.git
```

3. Navigate to the project directory.

```bash
 cd 'project-name'
```

4. Install project dependencies.

```bash
 yarn
```

5. Install iOS dependencies.

```bash
 npx pod-install
```

## Running the app

1. To run the Android or iOS version of the app.

```
npx react-native run-ios  ||  npx react-native run-android
```

## Technologies used

```
React
React Native
Redux
Redux Toolkit
```

## Features Implemented

1. A home page with list of dummy courses.
2. Course Details Screen.
3. Enroll Course
4. View Enrolled Courses.
5. Home and Enrolled bottom tabs.
6. Store Enrolled courses using redux.
7. Added React-Native-Fast-Image for enhanced image loading.

[DEMO VIDEO](https://drive.google.com/file/d/1lhx_OD_RfSCAIIF2KSy9IUJWpAOraBlK/view?usp=sharing)

## Aproach

There were 5 main features, so i started with the navigation part first, i added bottom tabs and stack navigators with 3 screens (All Courses, Course Details, Enrolled Courses). Then i created a dummy data for each course and used flatlist to display the data in the Home Tab. After that i developed the Course details screen. Then i added redux toolkit to store the enrolled courses throughout the application and display then in the enrolled tab. I found that the image were loading slowly, so i added react-native-fast-image for enhanced image loading.
