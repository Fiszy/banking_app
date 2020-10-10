import {StyleSheet, Platform} from 'react-native';
import {colors} from '../misc/settings';

export const button = StyleSheet.create({

  submitButton:{
    backgroundColor: colors.secondary,
    alignItems:'center',
    paddingVertical:15,
    borderRadius: 5,
    width:'95%'
  },
  loginText:{
    color: colors.white,
    fontSize: 18,
  },
  container: {
    flex: null,
    width: null,
    // minWidth         : 150,
    borderRadius: 3,
    paddingVertical: 15,
    backgroundColor: colors.white,
    paddingHorizontal: 18,
    shadowOffset: {width: 0, height: 1},
    shadowColor: colors.gray900,
    shadowOpacity: 0.3,
    elevation: 3,
    marginBottom: Platform.select({ios: 0, android: 4}),
  },

  noElevation: {
    elevation: 0,
    marginBottom: 0,
    shadowOpacity: 0,
    shadowColor: 'rgba(0,0,0,0)',
  },

  lg: {
    paddingVertical: 18,
    paddingHorizontal: 20,
  },

  sm: {
    paddingVertical: 8,
    paddingHorizontal: 14,
  },

  xs: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },

  label: {
    color: colors.primary,
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Muli-Bold',
    shadowOffset: null,
    shadowColor: null,
    shadowOpacity: null,
  },

  link: {
    backgroundColor: 'rgba(0,0,0,0)',
    elevation: 0,
    shadowOffset: {width: 0, height: 0},
    shadowColor: null,
    shadowOpacity: 0,
  },
  outline: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(0,0,0,0)',
    backgroundColor: 'rgba(0,0,0,0)',
    shadowOffset: null,
    shadowColor: null,
    shadowOpacity: null,
    elevation: 0,
  },

  // background colors
  default: {},
  primary: {backgroundColor: colors.primary},
  secondary: {backgroundColor: colors.secondary},
  success: {backgroundColor: colors.success},
  warning: {backgroundColor: colors.warning},
  danger: {backgroundColor: colors.danger},
  gray: {backgroundColor: colors.gray600},

  // ouline styles
  outlineDefault: {borderColor: colors.white},
  outlinePrimary: {borderColor: colors.primary},
  outlineSecondary: {borderColor: colors.secondary},
  outlineSuccess: {borderColor: colors.success},
  outlineWarning: {borderColor: colors.warning},
  outlineDanger: {borderColor: colors.danger},
  outlineGray: {borderColor: colors.gray600},

  // link styles
  linkDefault: {borderWidth: 0},
  linkPrimary: {borderWidth: 0},
  linkSecondary: {borderWidth: 0},
  linkSuccess: {borderWidth: 0},
  linkWarning: {borderWidth: 0},
  linkDanger: {borderWidth: 0},
  linkGray: {borderWidth: 0},

  // label colors
  labelDark: {color: colors.gray900},
  labelLight: {color: colors.white},
  labelDefault: {color: colors.white},
  labelPrimary: {color: colors.primary},
  labelSuccess: {color: colors.success},
  labelWarning: {color: colors.warning},
  labelDanger: {color: colors.danger},
  labelSecondary: {color: colors.secondary},
  labelGray: {color: colors.gray600},

  lgLabel: {fontSize: 18},
  smLabel: {fontSize: 10},
  xsLabel: {fontSize: 9},

  disabled: {opacity: 0.5},
});
