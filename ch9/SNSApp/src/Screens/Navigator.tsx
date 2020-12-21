import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomNavigator} from '@react-navigation/bottom-tabs';

import {UserContext} from '~/Context/User';
import SearchBar from '~/Component/SearchBar';
import Loading from '~/Component/Loading';

// 로그인 컴포넌트
import Login from '~/Screens/Login';
import PasswordReset from '~/Screens/PasswordReset';
import Signup from '~/Screens/Signup';

//게시물 컴포넌트
import MyFeed from '~/Screens/MyFeed';
import Feeds from '~/Screens/Feeds';
import FeedListOnly from '~/Screens/FeedListOnly';
import Upload from '~/Screens/Upload';
import Notification from '~/Screens/Notification';
import Profile from '~/Screens/Profile';
import CustomDrawer from '~/Screens/CustomDrawer';

// 해당 네비게이션 호출
const Stack = createStackNavigator();
const BottomTab = createBottomNavigator();
const Drawer = createDrawerNavigator();

const LoginNavigator = () => {
  return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Signup' component={Signup} />
      <Stack.Screen name='PasswordReset'component={PasswordReset} />
    </Stack.Navigator>
  );
};

const MyFeedTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='MyFeed'
        component={MyFeed}
        options={{title: 'SNS App'}}
      />
    </Stack.Navigator>
  );
};

const FeedTab = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen
        name='Feeds'
        component={Feeds}
        options={{
          header: ()=> <SearchBar />
        }}
      />
      <Stack.Screen 
        name='FeedListOnly'
        component={FeedListOnly}
        options={{
          headerBackTitleVisible: false,
          title: '둘러보기',
          headerTintColor: '#292929',
        }}
      />
    </Stack.Navigator>
  );
};

const UploadTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='Upload'
        component={Upload}
        options={{
          title: '사진 업로드'
        }}
      />
    </Stack.Navigator>
  )
}

const Profile = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen
        name='Profile'
        component={Profile}
        options={{title: 'Profile'}}
      />
    </Stack.Navigator>
  )
}

const MainTab = () => {
  return(
    <BottomTab.Navigator TabBarOptions={{showLabel: false}}>
      <BottomTab.Screen
        name='MyFeed'
        component={MyFeedTab}
        options={{
          tabBarIcon: ({color, focused}) => (
            <Image
              source={
                focused
                ? require('~/Assets/Images/Tabs/ic_home.png')
                : require('~/Assets/Images/Tabs/ic_home_online.png')
              }
            />
          ),
        }}
      />
      <BottomTab.Screen
        name='Feeds'
        component={FeedsTab}
        options={{
          tabBarIcon: ({color, focused}) => (
            <Image
              source={
                focused
                ? require('~/Assets/Images/Tabs/ic_search.png')
                : require('~/Assets/Images/Tabs/ic_serch_online.png')
              }
            />
          ),
        }}
      />
      <BottomTab.Screen
        name='Upload'
        component={Upload}
        options={{
          tabBarLabel: 'Third',
          tabBarIcon: ({color, focused}) => (
            <Image
              source={
                focused
                ? require('~/Assets/Images/Tabs/ic_add.png')
                : require('~/Assets/Images/Tabs/ic_add_outline.png')
              }
            />
          ),
        }}
      />
      <BottomTab.Screen
        name='Notification'
        component={Notification}
        options={{
          tabBarIcon: ({color, focused}) => (
            <Image
              source={
                focused
                ? require('~/Assets/Images/Tabs/ic_favorite.png')
                : require('~/Assets/Images/Tabs/ic_favorite_outline.png')
              }
            />
          ),
        }}
      />
      <BottomTab.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarIcon: ({color, focused}) => (
            <Image
              source={
                focused
                ? require('~/Assets/Images/Tabs/ic_profile.png')
                : require('~/Assets/Images/Tabs/ic_profile_outline.png')
              }
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

const MainNavigatior = () => {
  return (
    <Drawer.Navigator
      drawerPosition='right'
      drawerType='slide'
      drawerContent={(props)=> <CustomDrawer prop={props} />}
    >
      <Drawer.Screen name='MainTabs' component={MainTab} />
    </Drawer.Navigator>
  );
};

export default () => {
  const { isLoading, setIsLoading} = useContext<IUserContext>(UserContext);

  if (isLoading === false ) {
    return <Loading />
  };

  return(
    <NavigationContainer>
      {userInfo? <MovieNavigator /> : <LoginNavigator />}
    </NavigationContainer>
  );
};