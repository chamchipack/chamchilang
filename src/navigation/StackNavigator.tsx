import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screen/HomeScreen';
import SearchScreen from '../screen/SearchScreen';
import WordListScreen from '../screen/WordListScreen';
import WordViewScreen from '../screen/WordViewScreen';
import MyPageScreen from '../screen/MyPageScreen';
import VocaListScreen from '../screen/VocaListScreen';
import VocaWordListScreen from '../screen/VocaWordListScreen';
import BlogListScreen from '../screen/BlogListScreen';
import BlogViewScreen from '../screen/BlogViewScreen';
import CreateWordScreen from '../screen/CreateWordScreen';
import LoginScreen from '../screen/LoginScreen';
import SketchBookScreen from '../screen/SketchBookScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="search" component={SearchScreen} />
      <Stack.Screen name="wordlist" component={WordListScreen} />
      <Stack.Screen name="wordview" component={WordViewScreen} />
      <Stack.Screen name="mypage" component={MyPageScreen} />
      <Stack.Screen name="vocalist" component={VocaListScreen} />
      <Stack.Screen name="vocawordlist" component={VocaWordListScreen} />
      <Stack.Screen name="bloglist" component={BlogListScreen} />
      <Stack.Screen name="blogview" component={BlogViewScreen} />
      <Stack.Screen name="createword" component={CreateWordScreen} />
      <Stack.Screen name="sketchbook" component={SketchBookScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
    </Stack.Navigator>
  );
}
