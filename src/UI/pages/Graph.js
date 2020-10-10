import React, {Component} from 'react';
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View,
} from 'react-native';
import {text} from '../../styles/theme/text';
import {mb, mh, mt, mv, pb, ph, pv} from '../../styles/misc/defaults';
import {Styles} from '../../styles/styles';
import {transactions} from '../../styles/screens/transaction';

import {colors} from '../../styles/misc/settings';
import IconAnt from 'react-native-vector-icons/AntDesign';
import CustomInput from '../_partials/CustomInput';
import {button} from '../../styles/theme/button';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import Spinner from 'react-native-loading-spinner-overlay';
import { LineChart, Path, Grid , XAxis, YAxis } from 'react-native-svg-charts';
import PureChart from 'react-native-pure-chart';


const filters = [{name: 'Amount'}, {name: 'Date'}];
let sampleData = [
    {
        seriesName: 'Savings',
        data: [
            {x: 'Jan', y: 30},
            {x: 'Feb', y: 400},
            {x: 'Mar', y: 170},
            {x: 'Apr', y: 250},
            {x: 'May', y: 10},
            {x: 'Jun', y: 100},
        ],
        color: '#6979F8'
    },
    {
        seriesName: 'Loan',
        data: [
            {x: 'Jan', y: 60},
            {x: 'Feb', y: 10},
            {x: 'Mar', y: 10},
            {x: 'Apr', y: 200},
            {x: 'May', y: 109},
            {x: 'Jun', y: 10},
        ],
        color: '#EB001B'
    },
    {
        seriesName: 'Loan',
        data: [
            {x: 'Jan', y: 350},
            {x: 'Feb', y: 103},
            {x: 'Mar', y: 120},
            {x: 'Apr', y: 200},
            {x: 'May', y: 19},
            {x: 'Jun', y: 0},
        ],
        color: '#12D879'
    }
]


const sourceAccount = [
    {name: 'Savings', Number: '011462345', Balance: 50000000},
    {name: 'Loan', Number: '0114623232', Balance: 3000000},
    {name: 'Current', Number: '0314623232', Balance: 400000},
    {name: 'Shares', Number: '12345678', Balance: 3000},
];
const data1 = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]
const data2 = [ -87, 66, -69, 92, -40, -61, 16, 62, 20, -93, -54, 47, -89, -44, 18 ]
//Array of datasets, following this syntax:
const mdata = [
    {
        data: data1,
        svg: { stroke: 'purple' },
    },
    {
        data: data2,
        svg: { stroke: 'green' },
    },
]

let today = new Date();
let pastYear = new Date('Apr 30, 1990');

const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]
const dataa = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun' ]

const axesSvg = { fontSize: 10, fill: 'grey' };
const verticalContentInset = { top: 10, bottom: 10 }
const xAxisHeight = 30
// tomorrow.setDate(new Date().getDate()+1);
const Decorator = ({ x, y, data }) => {
    return data.map((value, index) => (
        <Circle
            key={ index }
            cx={ x(index) }
            cy={ y(value) }
            r={ 4 }
            stroke={ 'rgb(134, 65, 244)' }
            fill={ 'white' }
        />
    ))
}

const Line = ({ line }) => (
    <Path
        d={ line }
        stroke={ 'rgba(134, 65, 244)' }
        fill={ 'none' }
    />
)

class Graph extends Component {
    constructor() {
        super();
        this.state = {
            filter: 'Amount',
            selectedFromDate: new Date(),
            showFromDatePicker: false,
            selectedToDate: new Date(),
            showToDatePicker: false,
            fromDate: null,
            toDate: null,
            loading: false,
            form: {
                accountNumber: '0111',
                min: '',
                max: '',
                fromDate: '',
                toDate: '',
            },
        };
        this.submit = this.submit.bind(this);
    }
    submit(){
        this.setState({
            loading: true,
        });
        let form = Object.assign({}, this.state.form);
        setTimeout(() => {
            this.setState({
                loading: false,
            });
            this.props.navigation.navigate('SearchResult', {form: form});
        }, 1000);
    }
    valid() {
        const {filter} = this.state;
        let form = Object.assign({}, this.state.form);

        if (filter === 'Amount') {
            if (form.accountNumber && form.min && form.max) {
                return true;
            }
        }
        if (filter === 'Date') {
            if (form.accountNumber && form.fromDate && form.toDate) {
                return true;
            }
        }

        return false;
    }
    _dropdown_2_renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
        if (rowID == filters.length - 1) {
            return;
        }
        let key = `spr_${rowID}`;
        return <View style={transactions.dropdown_2_separator} key={key} />;
    }
    _dropdown_Filter_Button(rowData) {
        const {name} = rowData;
        return `Filter By ${name}`;
    }
    _dropdown_Filter_renderRow(rowData, rowID, highlighted) {
        return (
            <TouchableHighlight
                underlayColor="cornflowerblue"
                onPress={() => {
                    this._dropdown_filter.select(rowID);
                    this._dropdown_filter.hide();
                    this.setState({
                        filter: rowData.name,
                    });
                }}>
                <View
                    style={[
                        transactions.dropdown_row_filter,
                        ph(15),
                        {backgroundColor: highlighted ? '#C4C4C4' : 'white'},
                    ]}>
                    <Text style={[text.bold]}>{`${rowData.name}`}</Text>
                </View>
            </TouchableHighlight>
        );
    }

    onAccountChange(sourceAccount) {
        let form = Object.assign({}, this.state.form, {
            accountNumber: sourceAccount.Number,
        });
        this.setState({form});
    }

    _dropdown_account_renderRow(rowData, rowID, highlighted) {
        let evenRow = rowID % 2;
        return (
            <TouchableHighlight
                underlayColor="cornflowerblue"
                onPress={() => {
                    this._dropdown_account.select(rowID);
                    this._dropdown_account.hide();
                    this.onAccountChange(rowData);
                }}>
                <View
                    style={[
                        transactions.dropdown_2_row,
                        {backgroundColor: highlighted ? '#C4C4C4' : 'white'},
                    ]}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={[text.bold]}>{`${rowData.name}`}</Text>
                        <Text> - {rowData.Number}</Text>
                    </View>
                    <Text style={{textAlign: 'right'}} />
                </View>
            </TouchableHighlight>
        );
    }
    _dropdown_2_accountButton(rowData) {
        const {name, Number} = rowData;
        return `${name} - ${Number}`;
    }
    handleOnTextChange(field, input) {
        let form = Object.assign({}, this.state.form);
        form[field] = input;
        this.setState({form});
    }
    handleConfirmFromDate = dateOfBirth => {
        this.setState({
            fromDate: moment(dateOfBirth).format('MMMM Do YYYY'),
            showFromDatePicker: false,
            selectedFromDate: dateOfBirth,
        });
        let form = Object.assign({}, this.state.form, {
            fromDate: dateOfBirth.toString(),
        });
        this.setState({form});
    };
    toggleFromDatePicker = () => {
        this.setState({
            showFromDatePicker: !this.state.showFromDatePicker,
        });
    };

    handleConfirmToDate = date => {
        this.setState({
            toDate: moment(date).format('MMMM Do YYYY'),
            showToDatePicker: false,
            selectedToDate: date,
        });
        let form = Object.assign({}, this.state.form, {
            toDate: date.toString(),
        });
        this.setState({form});
    };
    toggleToDatePicker = () => {
        this.setState({
            showToDatePicker: !this.state.showToDatePicker,
        });
    };
    render() {


        const {
            form,
            filter,
            selectedFromDate,
            showFromDatePicker,
            fromDate,
            loading,
            selectedToDate,
            showToDatePicker,
            toDate,
        } = this.state;
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : null}
                keyboardVerticalOffset={100}
                style={{flex: 1, backgroundColor: colors.white}}>
                <Spinner
                    visible={loading}
                    textContent={'Please wait...'}
                    textStyle={{color: '#FFF'}}
                />
                <DateTimePickerModal
                    isVisible={showFromDatePicker}
                    mode="date"
                    maximumDate={
                        form.toDate
                            ? new Date(
                            Date.parse(
                                moment(form.toDate).format('YYYY-MM-DDTHH:mm:ss.sssZ'),
                            ),
                            )
                            : today
                    }
                    date={selectedFromDate}
                    onConfirm={date => this.handleConfirmFromDate(date)}
                    onCancel={() => this.toggleFromDatePicker()}
                />
                <DateTimePickerModal
                    minimumDate={
                        form.fromDate
                            ? new Date(
                            Date.parse(
                                moment(form.fromDate).format('YYYY-MM-DDTHH:mm:ss.sssZ'),
                            ),
                            )
                            : pastYear
                    }
                    maximumDate={today}
                    isVisible={showToDatePicker}
                    mode="date"
                    date={selectedToDate}
                    onConfirm={date => this.handleConfirmToDate(date)}
                    onCancel={() => this.toggleToDatePicker()}
                />
                <ScrollView>
                    <View style={[mh(20), Styles.misc.spanned]}>



                            <View style={[mt(30)]}>
                                <Text style={[text.bold, text.h4, mb(7)]}>Search</Text>
                                <TouchableOpacity onPress={() => this.toggleFromDatePicker()}>
                                    <View
                                        style={[
                                            text.textElevated,
                                            {justifyContent: 'space-between', flexDirection: 'row'},
                                        ]}
                                        pointerEvents="none">
                                        <Text
                                            style={[
                                                fromDate ? fromDate : text.gray500,
                                                text.h4,
                                                {marginLeft: 5, alignSelf: 'center'},
                                            ]}>
                                            {fromDate ? fromDate : 'FROM'}
                                        </Text>

                                        <IconAnt
                                            name="calendar"
                                            style={{alignSelf: 'center'}}
                                            size={25}
                                        />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[mt(15)]}
                                    onPress={() => this.toggleToDatePicker()}>
                                    <View
                                        style={[
                                            text.textElevated,
                                            {justifyContent: 'space-between', flexDirection: 'row'},
                                        ]}
                                        pointerEvents="none">
                                        <Text
                                            style={[
                                                toDate ? text.black : text.gray500,
                                                text.h4,
                                                {marginLeft: 5, alignSelf: 'center'},
                                            ]}>
                                            {toDate ? toDate : 'TO'}
                                        </Text>

                                        <IconAnt
                                            name="calendar"
                                            style={{alignSelf: 'center'}}
                                            size={25}
                                        />
                                    </View>
                                </TouchableOpacity>
                            </View>


                        {filter === 'Amount' && (
                            <View style={[mt(30)]}>
                                <Text style={[text.bold, text.h4, mb(7)]}>
                                    Transaction Amount
                                </Text>
                                <CustomInput
                                    keyboardType="numeric"
                                    placeholder="MIN"
                                    returnKeyType="next"
                                    ref={ref => (this.MinAmount = ref)}
                                    onChangeText={this.handleOnTextChange.bind(this, 'min')}
                                    value={form.min}
                                />
                                <CustomInput
                                    keyboardType="numeric"
                                    placeholder="MAX"
                                    style={[text.textElevated, {marginTop: 20}]}
                                    returnKeyType="next"
                                    ref={ref => (this.MaxAmount = ref)}
                                    onChangeText={this.handleOnTextChange.bind(this, 'max')}
                                    value={form.max}
                                />
                            </View>
                        )}
                        <View style={[transactions.buttonContainer, mt(30)]}>
                            <TouchableOpacity
                                onPress={this.submit}
                                style={[button.submitButton, {opacity: this.valid() ? 1 : 0.5}]}
                                disabled={!this.valid()}>
                                <Text style={[button.text, text.bold]}>Search</Text>
                            </TouchableOpacity>
                        </View>
                    </View>



                    <View style={[transactions.cardStyle]}>
                        <Text style={[text.bold, text.h4, mb(10)]}>Transaction Chart</Text>

                        <PureChart data={sampleData} type='line' />
                    </View>

                    <View style={[ ph(20), mb(10),{flexDirection:'row'}]}>
                        <View style={{flexDirection: 'row'}}>
                            <Image source={require('../../assets/savings.png')}/>
                            <Text style={{marginHorizontal: 10, color:'#999999'}}>Savings</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Image source={require('../../assets/load.png')}/>
                            <Text style={{marginHorizontal: 10, color:'#999999'}}>Loan</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Image source={require('../../assets/shares.png')}/>
                            <Text style={{marginHorizontal: 10, color:'#999999'}}>Shares</Text>
                        </View>

                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}

export default Graph;
