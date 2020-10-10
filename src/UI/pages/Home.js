import React, {Component} from 'react';
import {
    StatusBar,
    Text,
    TouchableOpacity,
    View,
    ScrollView,
    FlatList,
    Image,
    Platform,
} from 'react-native';
import {colors} from '../../styles/misc/settings';
import {Styles} from '../../styles/styles';
import {dashboard} from '../../styles/screens/dashboard';
import {text} from '../../styles/theme/text';
import Icon from 'react-native-vector-icons/Feather';
import Swiper from 'react-native-swiper';
import {asyncGet, asyncStore, thousand} from '../../misc/helpers';
import {mh, mt} from '../../styles/misc/defaults';
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {useScrollToTop} from '@react-navigation/native';
import RecentTransaction from '../_partials/RecentTransaction';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transactions: [
                {
                    key: 1,
                    title: 'Loan',
                    amount: -9000,
                    type: 'Top up',
                    date: 'April 12, 2020',
                    code: '1234576',
                    time: '9:04 pm'
                },
                {
                    key: 2,
                    title: 'Shares',
                    amount: 500,
                    type: 'Top up',
                    date: 'March 6, 2020',
                    code: '34123456',
                    time: '1:55 pm'
                },
                {
                    key: 3,
                    title: 'Savings',
                    amount: 750,
                    type: 'Top up',
                    date: 'November 6, 2019',
                    time: '2:45 am'
                },
                {
                    key: 4,
                    title: 'Loan',
                    amount: -500,
                    type: 'Top up',
                    date: 'November 6, 2019',
                    code: '6234576',
                    time: '4:45 pm'
                },
                {
                    key: 5,
                    title: 'Shares',
                    amount: 500,
                    type: 'Top up',
                    date: 'November 6, 2019',
                    code: '12376576',
                    time: '7:45 pm'
                },
            ],
        };
    }
    componentDidMount(): void {

    }

    async getdata(){

    }

    renderItem({item, index}) {
        return (
            <RecentTransaction
                item={item}
                index={index}
                navigation={this.props.navigation}
            />
        );
    }
    renderListHeader() {
        return (
            <View>
                <Swiper
                    loop={false}
                    showsButtons={false}
                    style={dashboard.swiper}
                    paginationStyle={{
                        position: 'absolute',
                        bottom: 235,
                    }}>
                    <View style={dashboard.slide1}>
                        <View style={dashboard.slideinner}>
                            <View style={dashboard.slidetop}>
                                <Text style={[text.extraBoldItlic, text.h2, text.white]}>
                                    0012345678
                                </Text>
                                <Text style={[text.boldItlic, text.h4, text.white]}>
                                    Savings Account
                                </Text>
                                <Text
                                    style={[
                                        text.extraBold,
                                        text.h_big,
                                        text.white,
                                        mt(Platform.OS === 'ios' ? 15 : 10),
                                        {alignSelf: 'center'},
                                    ]}>{`₦${thousand('500000.00')}`}</Text>
                            </View>
                            <View
                                style={{flex: 1.2, flexDirection: 'row', paddingBottom: 10}}>
                                <TouchableOpacity style={dashboard.swipericon}>
                                    <Icon name="upload" color={colors.white} size={25} />
                                    <Text style={[text.white, text.light]} numberOfLines={1}>
                                        Transfer Money
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[dashboard.swipericon, dashboard.secondIcon]}>
                                    <IconEntypo
                                        name="bar-graph"
                                        color={colors.white}
                                        size={25}
                                    />
                                    <Text style={[text.white, text.light]} numberOfLines={1}>
                                        Savings
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={dashboard.swipericon}>
                                    <Icon name="upload" color={colors.white} size={25} />

                                    <Text style={[text.white, text.light]} numberOfLines={1}>
                                        Bills payment
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={dashboard.slide1}>
                        <View style={dashboard.slideinner}>
                            <View style={dashboard.slidetop}>
                                <Text style={[text.extraBoldItlic, text.h2, text.white]}>
                                    0012345678
                                </Text>
                                <Text style={[text.boldItlic, text.h4, text.white]}>
                                    Loan Account
                                </Text>
                                <Text
                                    style={[
                                        text.extraBold,
                                        text.h_big,
                                        text.white,
                                        mt(Platform.OS === 'ios' ? 15 : 10),
                                        {alignSelf: 'center'},
                                    ]}>{`-₦${thousand('20000.00')}`}</Text>
                            </View>
                            <View
                                style={{flex: 1.2, flexDirection: 'row', paddingBottom: 10}}>
                                <TouchableOpacity style={dashboard.swipericon}>
                                    <IconCommunity name="wallet" color={colors.white} size={25} />
                                    <Text style={[text.white, text.light]} numberOfLines={1}>
                                        Loan Top-up
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[dashboard.swipericon, dashboard.secondIcon]}>
                                    <IconEntypo name="cycle" color={colors.white} size={25} />
                                    <Text style={[text.white, text.light]} numberOfLines={1}>
                                        Repayment
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={dashboard.swipericon}>
                                    <Text style={[text.white, text.light, {fontSize: 25}]}>
                                        ₦
                                    </Text>

                                    <Text style={[text.white, text.light]} numberOfLines={1}>
                                        Loan Liquidation
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={dashboard.slide1}>
                        <View style={dashboard.slideinner}>
                            <View style={dashboard.slidetop}>
                                <Text style={[text.extraBoldItlic, text.h2, text.white]}>
                                    0012345678
                                </Text>
                                <Text style={[text.boldItlic, text.h4, text.white]}>
                                    Share Account
                                </Text>
                                <Text
                                    style={[
                                        text.extraBold,
                                        text.h_big,
                                        text.white,
                                        mt(Platform.OS === 'ios' ? 15 : 10),
                                        {alignSelf: 'center'},
                                    ]}>{`₦${thousand('10000.00')}`}</Text>
                            </View>
                            <View
                                style={{flex: 1.2, flexDirection: 'row', paddingBottom: 10}}>
                                <TouchableOpacity style={dashboard.swipericon}>
                                    <IconEntypo name="pie-chart" color={colors.white} size={25} />
                                    <Text style={[text.white, text.light]} numberOfLines={1}>
                                        Buy Shares
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[dashboard.swipericon, dashboard.secondIcon]}>
                                    <IconEntypo name="bar-graph" color={colors.white} size={25} />
                                    <Text style={[text.white, text.light]} numberOfLines={1}>
                                        Sell Share
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={dashboard.swipericon}>
                                    <Icon name="upload" color={colors.white} size={25} />
                                    <Text style={[text.white, text.light]} numberOfLines={1}>
                                        Transfer Shares
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Swiper>

                <Text style={[mh(20), mt(30), text.bold, text.h3]}>
                    Recent Transactions
                </Text>
            </View>
        );
    }
    render() {
        const {transactions} = this.state;
        return (
            <View style={Styles.misc.spanned}>
                <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
                <View style={[dashboard.firstsection]}>
                    <Text style={[text.light, text.white, text.h3]}>Welcome to FSDH,</Text>

                    <View style={dashboard.subheading}>
                        <TouchableOpacity
                            onPress={() => {}}>
                            <Icon name="home" color={colors.primary} size={30} />
                        </TouchableOpacity>
                        <Text
                            style={[text.white, text.bold, text.h2, {alignSelf: 'center'}]}>
                            Akande Afeez
                        </Text>
                        <Icon name="home" color={colors.primary} size={30} />
                    </View>
                </View>

                <FlatList
                    style={{backgroundColor: colors.white}}
                    data={transactions}
                    ref={this.props.scrollRef}
                    ListHeaderComponent={() => this.renderListHeader()}
                    renderItem={this.renderItem.bind(this)}
                    keyExtractor={item => `${item.id}-news`}
                />
            </View>
        );
    }
}

// export default Dashboard;

export default function(props) {
    const ref = React.useRef(null);
    useScrollToTop(ref);
    return <Home {...props} scrollRef={ref} />;
}
