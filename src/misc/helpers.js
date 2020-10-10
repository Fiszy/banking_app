import {getStatusBarHeight} from 'react-native-status-bar-height';


export const isIPhoneX = () => {
  return getStatusBarHeight(true) > 20;
};

export const thousand = num => {
  if (typeof num !== 'string') {
    num = num.toString();
  }
  return num.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
