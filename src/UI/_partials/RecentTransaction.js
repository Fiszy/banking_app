import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {dashboard} from '../../styles/screens/dashboard';
import {thousand} from '../../misc/helpers';
import {text} from '../../styles/theme/text';
import {mt} from '../../styles/misc/defaults';

class RecentTransaction extends Component {

  render() {
    const {item, navigation} = this.props;
    return (
      <TouchableOpacity
        style={dashboard.transactionlist}
>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <Text style={[text.bold]}>{item.title}</Text>
          {parseInt(item.amount) > 0 ? (
            <Text style={[text.success, text.light]}>
              {' '}
              {`₦${thousand(item.amount)}`}
            </Text>
          ) : (
            <Text style={[text.danger, text.light]}>{`-₦${thousand(
              Math.abs(item.amount),
            )}`}</Text>
          )}
        </View>
        <View
          style={[
            mt(10),
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            },
          ]}>
          <Text style={[text.gray500]}>{item.type}</Text>

          <Text style={[text.light]}>
            {item.date} {item.time}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default RecentTransaction;
