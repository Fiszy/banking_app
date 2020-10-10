import React, {Component} from 'react';
import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {earnings} from '../../styles/screens/earnings';
import {mh, mt} from '../../styles/misc/defaults';
import {text} from '../../styles/theme/text';
import {thousand} from '../../misc/helpers';
import {colors} from '../../styles/misc/settings';
import Icon from 'react-native-vector-icons/AntDesign';
import Spinner from 'react-native-loading-spinner-overlay';
import {BarChart} from 'react-native-chart-kit';


const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

// Returns the ISO week of the date.
Date.prototype.getWeek = function() {
  var date = new Date(this.getTime());
  date.setHours(0, 0, 0, 0);
  // Thursday in current week decides the year.
  date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
  // January 4 is always in week 1.
  var week1 = new Date(date.getFullYear(), 0, 4);
  // Adjust to Thursday in week 1 and count number of weeks from date to week1.
  return (
    1 +
    Math.round(
      ((date.getTime() - week1.getTime()) / 86400000 -
        3 +
        ((week1.getDay() + 6) % 7)) /
        7,
    )
  );
};

class Savings extends Component {
  constructor() {
    super();
    this.state = {
      firstDay: null,
      lastDay: null,
      weekNo: null,
      currentWeekNo: null,
      amount: 0,
      isFetching: false,
      balance: this.getRndInteger(0, 50000),
      barData: [],
    };
  }
  componentDidMount() {
    this.getCurrentWeek();
  }

  generateRandomArray() {
    return Array.from({length: 7}, () => Math.floor(Math.random() * 100));
    // this.setState({
    //     barData
    // })
  }
  barChartData() {
    const {barData} = this.state;
    return {
      labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      datasets: [
        {
          data: barData,
        },
      ],
      barColors: ['#dfe4ea', '#ced6e0', '#a4b0be', '#000', '#000', '#000'],
    };
  }

  getWeekNumber(d) {
    // Copy date so don't modify original
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    // Get first day of year
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);

    //  // get current date
    // var first = d.getDate() - d.getDay(); // First day is the dzay of the month - the day of the week
    // var last = first + 6; // last day is the first day + 6
    //
    // var firstday = new Date(d.setDate(first));
    // var lastday = new Date(d.setDate(last));
    this.setState({
      weekNo: weekNo,
    });
    this.getDateRangeOfWeek(weekNo, d.getFullYear());
    // Return array of year and week number
    // return [d.getUTCFullYear(), weekNo, firstday, lastday];
  }

  getDateRangeOfWeek(weekNo, y) {
    var d1, numOfdaysPastSinceLastMonday, rangeIsFrom, rangeIsTo;
    d1 = new Date('' + y + '');
    numOfdaysPastSinceLastMonday = d1.getDay() - 1;
    d1.setDate(d1.getDate() - numOfdaysPastSinceLastMonday);
    d1.setDate(d1.getDate() + 7 * (weekNo - d1.getWeek()));
    rangeIsFrom =
      d1.getMonth() + 1 + '-' + d1.getDate() + '-' + d1.getFullYear();
    let fDay = new Date(d1.getFullYear(), d1.getMonth(), d1.getDate());
    d1.setDate(d1.getDate() + 6);
    rangeIsTo = d1.getMonth() + 1 + '-' + d1.getDate() + '-' + d1.getFullYear();
    //return moment(rangeIsFrom).format('YYYY-MM-DDTHH:mm:ss.sssZ');
    let lDay = new Date(d1.getFullYear(), d1.getMonth(), d1.getDate());
    this.setState({
      isFetching: true,
    });
    setTimeout(() => {
      this.setState({
        firstDay: fDay,
        lastDay: lDay,
        isFetching: false,
        amount: this.getRndInteger(0, 5000),
        barData: this.generateRandomArray(),
      });
    }, 1500);
    //return  moment(lDay).format("MMMM Do YYYY");
    // return rangeIsFrom + " to " + rangeIsTo;
  }

  getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  //console.log(getDateRangeOfWeek(52, 2015)); //12-21-2015 to 12-27-2015

  getCurrentWeek() {
    let d = new Date();
    // Copy date so don't modify original
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    // Set to nearest Thursday: current date + 4 - current day number

    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    // Get first day of year
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);

    this.setState({
      weekNo: weekNo,
      currentWeekNo: weekNo,
    });
    this.getDateRangeOfWeek(weekNo, d.getFullYear());
    // Return array of year and week number
    // return [d.getUTCFullYear(), weekNo, firstday, lastday];
  }
  gotoPreviousWeek() {
    const {weekNo, isFetching} = this.state;
    if (weekNo <= 1 || isFetching) {
      return;
    }
    let d = new Date();
    this.setState(
      {
        weekNo: weekNo - 1,
      },
      () => this.getDateRangeOfWeek(weekNo - 1, d.getFullYear()),
    );
  }
  gotoNextWeek() {
    const {weekNo, currentWeekNo, isFetching} = this.state;
    if (weekNo >= 52 || weekNo === currentWeekNo || isFetching) {
      return;
    }
    let d = new Date();
    this.setState(
      {
        weekNo: weekNo + 1,
      },
      () => this.getDateRangeOfWeek(weekNo + 1, d.getFullYear()),
    );
  }
  getMonthHeader() {
    const {firstDay, lastDay} = this.state;
    return (
      monthNames[firstDay.getMonth()] +
      ' ' +
      firstDay.getDate() +
      ' - ' +
      monthNames[lastDay.getMonth()] +
      ' ' +
      lastDay.getDate()
    );
  }
  render() {
    const {
      firstDay,
      weekNo,
      currentWeekNo,
      amount,
      isFetching,
      balance,
    } = this.state;
    return (
      <View style={earnings.container}>
        <Spinner
          visible={isFetching}
          textContent={'Loading..'}
          textStyle={{color: '#FFF'}}
        />
        {/*<Text>{JSON.stringify(this.getWeekNumber(new Date()))}</Text>*/}
        <ScrollView>
          <View style={[mh(20)]}>
            <Text style={[mt(20), text.bold, text.h2]}>My Savings</Text>

            <View style={[earnings.withdrawContainer, mt(15)]}>
              <View>
                <Text style={[text.description, text.regular]}>Balance</Text>

                  <Text style={[mt(5), text.bold, text.h2]}>
                    {`₦${thousand(250000)}`}
                    <Text style={[text.bold, text.h4]}>.OO</Text>
                  </Text>

              </View>

              <TouchableOpacity style={[earnings.withdrawButton]}>
                <Text style={[text.secondary, text.bold, text.h4]}>
                  Withdraw
                </Text>
              </TouchableOpacity>
            </View>
            {firstDay && (
              <View
                style={[
                  earnings.withdrawContainer,
                  mt(15),
                  {flexDirection: 'column'},
                ]}>
                <TouchableWithoutFeedback
                  style={{alignItems: 'center', width: '100%'}}>
                  <Text
                    style={[
                      text.regular,
                      text.h4,
                      text.center,
                      {color: colors.gray700},
                    ]}>
                    {this.getMonthHeader()}
                  </Text>
                </TouchableWithoutFeedback>
                <View
                  style={[
                    mt(20),
                    {flexDirection: 'row', justifyContent: 'space-between'},
                  ]}>
                  <TouchableOpacity
                    style={{alignSelf: 'center', padding: 10}}
                    onPress={() => this.gotoPreviousWeek()}
                    disabled={weekNo <= 1}>
                    <Icon
                      name="left"
                      color={weekNo <= 1 ? colors.gray500 : colors.black}
                    />
                  </TouchableOpacity>
                  <Text
                    style={[
                      text.bold,
                      {fontSize: 35, alignSelf: 'center'},
                    ]}>{`₦${thousand(amount)}`}</Text>
                  <TouchableOpacity
                    style={{alignSelf: 'center', padding: 10}}
                    onPress={() => this.gotoNextWeek()}
                    disabled={weekNo >= 52 || weekNo === currentWeekNo}>
                    <Icon
                      name="right"
                      color={
                        weekNo >= 52 || weekNo === currentWeekNo
                          ? colors.gray500
                          : colors.black
                      }
                    />
                  </TouchableOpacity>
                </View>
                <BarChart
                  data={this.barChartData()}
                  width={Dimensions.get('window').width - 95}
                  height={220}
                  yAxisLabel=""
                  // chartConfig={{
                  //     backgroundColor: "#e26a00",
                  //         backgroundGradientFromOpacity: 0,
                  //
                  //         backgroundGradientToOpacity: 0,
                  //     backgroundGradientFrom: colors.white,
                  //     backgroundGradientTo: colors.white,
                  //     decimalPlaces: 2, // optional, defaults to 2dp
                  //     color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  //     labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  //     style: {
                  //         borderRadius: 16
                  //     },
                  //     propsForDots: {
                  //         r: "6",
                  //         strokeWidth: "2",
                  //         stroke: "#ffa726"
                  //     }
                  // }}
                  //
                  // style={{
                  //     marginVertical: 8,
                  //     borderRadius: 16
                  // }}
                  chartConfig={{
                    backgroundGradientFrom: colors.black,
                    backgroundGradientFromOpacity: 0,
                    backgroundGradientTo: colors.white,
                    backgroundGradientToOpacity: 0,
                    fillShadowGradientOpacity: 1,
                    fillShadowGradient: colors.primary,
                    decimalPlaces: 1,
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    strokeWidth: 0, // optional, default 3
                    barPercentage: 0.7,
                    useShadowColorFromDataset: false, // optional
                  }}
                  style={{
                    marginVertical: 10,
                    borderRadius: 16,
                    marginLeft: -15,
                  }}
                />
                <View style={[mt(10), earnings.barBottom]}>
                  <View>
                    <Text style={[text.description, text.regular, text.h4]}>
                      Week Withdrawal
                    </Text>
                    <Text style={[text.bold, text.h2]}>23</Text>
                  </View>
                  <View>
                    <Text style={[text.description, text.regular, text.h4]}>
                      Total Savings
                    </Text>
                    <Text style={[text.bold, text.h2]}>23</Text>
                  </View>

                </View>
              </View>
            )}
          </View>
          <View style={{height: 20}} />
        </ScrollView>
      </View>
    );
  }
}

export default Savings;
