import React, {createContext, useState, useEffect} from 'react';
import {Image} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import Loading from '~/Components/Loading';

interface Props {
  cache?: boolean;
  children: JSX.Element | Array<JSX.Element>;
}

interface IRandomUserData {
  getMyFeed: (number: number) => Array<IFeed>;
}

const RandomUserDataContext = createContext<IRandomUserData>({
  getMyFeed: (number: number = 10) => {
    return [];
  },
});

const RandomUserDataProvider = ({cache, children}:Props) => {
  const [userList, setUserList] = useState<Array<IUserProfile>>([]);
  const [description, setDescription] = useState<Array<string>>([]);
  const [imageList, setImageList] = useState<Array<string>>([]);

  const getCacheData = async (key: string) => {
    const cacheData = await AsyncStorage.getItem('key');
    if (cache === false || cacheData === null ) {
      return undefined;
    };

    const cacheList = JSON.parse(cacheData);

    if (cacheList.length !== 25 ) {
      return undefined;
    };
    
    return cacheList;
  };

  const setCacheData = (key: string, data: Array<any>) => {
    AsyncStorage.setItem(key, JSON.stringify(data))
  };

  const setUsers = async () => {
    const cacheData = await getCacheData('UserList');
    if (cacheData) {
      setUserList(cacheData);
      return;
    }

    try {
      const response = await fetch(
        'https://raw.githubusercontent.com/dev-yakuza/users/master/api.json',
      );
      const data = await response.json();
      setUserList(data);
      setCacheData('UserList', data);
    } catch (err) {
      console.log(err);
    };
  };

  const setDescription = async () => {
    const cacheData = await getCacheData('DescriptionList');
    console.log(cacheData);
    if (cacheData) {
      setDescription(cacheData);
      return;
    }
    try {
      const response = await fetch(
        'https://opinionated-quotes-api.gigalixirapp.com/v1/quotes?rand=t&n=25',
      );
      const data = await response.json();
      
    }
  }
};

