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
  
}