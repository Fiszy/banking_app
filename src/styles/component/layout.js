import {StyleSheet, Platform} from 'react-native';
import {colors} from '../misc/settings';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const master = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});

export const navbar = StyleSheet.create({
  manual: {
    alignItems: 'center',
    elevation: Platform.OS == 'android' ? 0 : 0,
  },
  container: {
    shadowColor: 'rgba(0,0,0,0)',
    shadowOpacity: 0,
    backgroundColor: colors.primary,
    height: getStatusBarHeight(true) > 20 ? 72 : 52,
    borderBottomWidth: 0,
    elevation: 0,
    paddingTop: getStatusBarHeight(true),
  },
  authcontainer: {
    shadowColor: 'rgba(0,0,0,0)',
    shadowOpacity: 0,
    backgroundColor: colors.white,
    height: getStatusBarHeight(true) > 20 ? 72 : 52,
    borderBottomWidth: 0,
    elevation: 0,
    paddingTop: getStatusBarHeight(true),
  },
  altContainer: {
    shadowColor: 'rgba(0,0,0,0)',
    shadowOpacity: 0,
    backgroundColor: colors.gray100,
    height: getStatusBarHeight(true) > 20 ? 72 : 52,
    borderBottomWidth: 0,
    elevation: 0,
    paddingTop: getStatusBarHeight(true),
  },
  titleWrapper: {
    marginTop: 5,
  },
  title: {
    flex: 1,
    fontFamily: 'Muli-Light',
    fontWeight: '400',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 20,
  },
  titleImage: {
    width: 100,
    height: 50,
    alignSelf: 'center',
  },
  profilePicture: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
    borderRadius: 14,
    backgroundColor: colors.gray200,
  },
  imageIcon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  back: {
    width: 20,
  },
  altProfilePicture: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
    borderRadius: 14,
    backgroundColor: colors.primary,
  },
  rightButton: {
    height: 30,
    justifyContent: 'center',
  },
  rightButtonContent: {},
  icon: {
    color: colors.white,
    fontSize: 24,
  },
  altIcon: {
    color: colors.gray700,
    fontSize: 24,
  },
  notificationDot: {
    color: colors.gray300,
    right: 2,
    bottom: 15,
    fontSize: 10,
    position: 'absolute',
  },
});

export const tabbar = StyleSheet.create({
  main: {
    // height         : getStatusBarHeight(true) > 20 ? 72 : 50,
    paddingVertical: 5,
    // paddingBottom: getStatusBarHeight(true) > 20 ? 22 : 5,
    backgroundColor: colors.primary,
  },
  label: {
    color: colors.white,
    fontSize: 9,
    textAlign: 'center',
  },

  labelActive: {color: colors.secondaryLight},

  icon: {
    color: colors.white,
    fontSize: 24,
  },

  iconActive: {color: colors.secondaryLight},

  tabContent: {
    alignItems: 'center',
  },
});
