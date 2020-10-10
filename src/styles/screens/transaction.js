import {StyleSheet} from 'react-native';
import {colors} from '../misc/settings';
import {isIPhoneX} from '../../misc/helpers';

export const transactions = StyleSheet.create({
  topItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tableHead: {
    backgroundColor: colors.primary,
    padding: 20,
  },
  listContainer: {
    backgroundColor: '#E5E5E5',
  },
  buttonContainer:{
    flex:1,
    alignItems:'center',
    justifyContent: 'center',

  },
  modal: {
    textAlignVertical: 'center',
    marginTop: 15,
    marginHorizontal: 6,
    fontSize: 15,
  },
  itemList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    marginHorizontal: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.gray500,
  },

  filterDropdown: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderColor: colors.gray300,
    borderWidth: 2,
    borderRadius: 3,
    height: 140,
  },
  filterButton: {
    backgroundColor: colors.primary,
  },
  filterContainer: {},
  dropdown_row_filter: {
    padding: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 55,
    alignItems: 'center',
  },
  cardStyle: {
    backgroundColor: colors.white,
    elevation: 5,
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    paddingHorizontal: 10,
    paddingVertical: 25,
    marginBottom: 20,
  },

  dropdown: {
    paddingHorizontal: 10,

    width: '91%',
    borderColor: colors.gray300,
    borderWidth: 2,
    borderRadius: 3,
  },
  dropdown_2_row: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 55,
    alignItems: 'center',
  },
  dropdown_2_separator: {
    height: 1,
    backgroundColor: colors.gray400,
  },
});
