import React, {useRef, useContext, useEffect, useState} from 'react';
import {
    View,
    Text,
    Button,
    FlatList,
    SafeAreaView,
    ScrollView
} from 'react-native';
import {ExpandableCalendar, CalendarProvider, WeekCalendar, LocaleConfig} from 'react-native-calendars';
import testIDs from './testIDs';
import {agendaItems, getMarkedDates} from './mocks/agendaItems';
import {getTheme, themeColor} from './mocks/theme';
import {SelectContext} from 'react-native-calendars/src/expandableCalendar/Context';

LocaleConfig.locales['ko'] = {
    monthNames: [
        '1월',
        '2월',
        '3월',
        '4월',
        '5월',
        '6월',
        '7월',
        '8월',
        '9월',
        '10월',
        '11월',
        '12월'
    ],
    monthNames: [
        '1월',
        '2월',
        '3월',
        '4월',
        '5월',
        '6월',
        '7월',
        '8월',
        '9월',
        '10월',
        '11월',
        '12월'
    ],
    monthNamesShort: [
        '1월',
        '2월',
        '3월',
        '4월',
        '5월',
        '6월',
        '7월',
        '8월',
        '9월',
        '10월',
        '11월',
        '12월'
    ],
    dayNames: [
        '일요일',
        '월요일',
        '화요일',
        '수요일',
        '목요일',
        '금요일',
        '토요일'
    ],
    dayNamesShort: [
        '일',
        '월',
        '화',
        '수',
        '목',
        '금',
        '토'
    ],
    today: "오늘"
};

LocaleConfig.defaultLocale = 'ko';

const leftArrowIcon = require('./assets/previous.png');
const rightArrowIcon = require('./assets/next.png');

interface Props {
    weekView?: boolean;
}

const Caroro = (props : Props) => {

    const con = useContext(SelectContext);
    const {year} = con;
    const [num,
        setNum] = useState(0);
    const [mealcontentstr,
        setMealcontentstr] = useState([]);
    const {weekView} = props;
    const marked = useRef(getMarkedDates());
    const theme = useRef(getTheme());
    const todayBtnTheme = useRef({todayButtonTextColor: themeColor});
    const [disabledSave, 
        setDisabledSave] = useState(true); // true is gongdae and true is default, false is haesadae
    const myLiteralTodayDateConstant = new Date().getDate(); // type: number

    getMeals = () => {

        fetch('https://bridgeservers.herokuapp.com/posts/gongdae').then((response) => response.json()).then((json) => {
            // console.log(json[0].toString());
            setMealcontentstr(json);
        }).catch((error) => console.error(error)). finally(() => setNum(myLiteralTodayDateConstant));
    }

    getMealsOnGongdaeBtnPressed = () => {
        setDisabledSave(true);
        fetch('https://bridgeservers.herokuapp.com/posts/gongdae').then((response) => response.json()).then((json) => {
            // console.log(json[0].toString());
            setMealcontentstr(json);
        }).catch((error) => console.error(error)). finally(() => console.log());
    }

    getMealsOnHaesadaeBtnPressed = () => {
        setDisabledSave(false);
        fetch('https://bridgeservers.herokuapp.com/posts/haesadae').then((response) => response.json()).then((json) => {
            // console.log(json[0].toString());
            setMealcontentstr(json);
        }).catch((error) => console.error(error)). finally(() => console.log());
    }

    useEffect(() => {
        getMeals();
        const interval = setInterval(() => {
            if (con.year != 2023) {
                setNum(con.year)
            } else {
                console.log()
                // setNum(9)
            }

        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <View>
            <CalendarProvider
                date={agendaItems[1].title}
                theme={todayBtnTheme.current}>

                {weekView
                    ? (<WeekCalendar
                        testID={testIDs.weekCalendar.CONTAINER}
                        firstDay={1}
                        markedDates={marked.current}/>)
                    : (<ExpandableCalendar
                        testID={testIDs.expandableCalendar.CONTAINER}
                        theme={theme.current}
                        firstDay={1}
                        markedDates={marked.current}
                        leftArrowImageSource={leftArrowIcon}
                        rightArrowImageSource={rightArrowIcon}/>)}

            </CalendarProvider>
            <SafeAreaView style={{
                flex: 1
            }}>
                <ScrollView>
                    <SelectContext.Provider value={num}>
                        <View
                            style={{
                            alignItems: 'stretch'
                        }}>

                            <View
                                style={{
                                width: '100%',
                                padding: 2,
                                backgroundColor: '#fff',
                                minHeight: 50,
                                flexDirection: 'row'
                            }}>
                                <View
                                    style={{
                                    minHeight: 50,
                                    width: '50%',
                                    borderRightColor: '#000',
                                    padding: 2
                                }}>
                                    <Button
                                        title="공대"
                                        disabled={disabledSave}
                                        onPress={() => getMealsOnGongdaeBtnPressed() /*console.log('GONGDAE CLICKED')*/}
                                        style={{
                                        backgroundColor: '#123',
                                        borderRightWidth: 1,
                                        borderRightColor: '#000',
                                        padding: 1
                                    }}></Button>
                                </View>
                                <View
                                    style={{
                                    minHeight: 50,
                                    width: '50%',
                                    padding: 2
                                }}>
                                    <Button
                                        title="해사대"
                                        disabled={!disabledSave}
                                        onPress={() => getMealsOnHaesadaeBtnPressed() /*console.log('HAESADAE CLICKED')*/}
                                        style={{
                                        backgroundColor: '#123',
                                        borderLeftWidth: 1,
                                        borderLeftColor: '#000',
                                        padding: 1
                                    }}></Button>
                                </View>
                            </View>
                            <View
                            style={{
                                width: '100%',
                                padding: 2,
                                minHeight: 26
                            }}  
                            >
                                <Text
                                style={{
                                    fontSize: 30
                                }}
                                >{`아침`}</Text>
                            </View>
                            <View
                                style={{
                                width: '100%',
                                padding: 2,
                                backgroundColor: '#f0f',
                                minHeight: 26
                            }}>
                                <FlatList
                                data={mealcontentstr}
                                keyExtractor={({ _id }) => _id.toString()}
                                horizontal={true}
                                renderItem={({ item }) => (
                                    <View>
                                        <Text
                                            style={{
                                            overflow: "scroll",
                                            maxHeight: 24,
                                            lineHeight: 24,
                                            }}
                                        >
                                            {
                                            (item.date.substring(2, 3) == num.toString() || item.date.substring(2, 4) == num.toString()) ? item.m_food.replace(/\n/g, "") : console.log()
                                            }
                                        </Text>
                                    </View>
                                )}
                                ></FlatList>

                            </View>
                            <View
                            style={{
                                width: '100%',
                                padding: 2,
                                minHeight: 26
                            }}  
                            >
                                <Text
                                style={{
                                    fontSize: 30
                                }}
                                >{`점심`}</Text>
                            </View>
                            <View
                                style={{
                                width: '100%',
                                padding: 2,
                                backgroundColor: '#0ff',
                                minHeight: 26
                            }}>

                                <FlatList
                                data={mealcontentstr}
                                keyExtractor={({ _id }) => _id.toString()}
                                horizontal={true}
                                renderItem={({ item }) => (
                                    <View>
                                        <Text
                                            style={{
                                            overflow: "scroll",
                                            maxHeight: 24,
                                            lineHeight: 24,
                                            }}
                                        >
                                            {
                                            (item.date.substring(2, 3) == num.toString() || item.date.substring(2, 4) == num.toString()) ? item.l_food.replace(/\n/g, "") : console.log()
                                            }
                                        </Text>
                                    </View>
                                )}
                                ></FlatList>
                                
                            </View>
                            <View
                            style={{
                                width: '100%',
                                padding: 2,
                                minHeight: 26
                            }}  
                            >
                                <Text
                                style={{
                                    fontSize: 30
                                }}
                                >{`저녁`}</Text>
                            </View>
                            <View
                                style={{
                                width: '100%',
                                padding: 2,
                                backgroundColor: '#f00',
                                minHeight: 26
                            }}>

                                <FlatList
                                data={mealcontentstr}
                                keyExtractor={({ _id }) => _id.toString()}
                                horizontal={true}
                                renderItem={({ item }) => (
                                    <View>
                                        <Text
                                            style={{
                                            overflow: "scroll",
                                            maxHeight: 24,
                                            lineHeight: 24,
                                            }}
                                        >
                                            {
                                            (item.date.substring(2, 3) == num.toString() || item.date.substring(2, 4) == num.toString()) ? item.d_food.replace(/\n/g, "") : console.log()
                                            }
                                        </Text>
                                    </View>
                                )}
                                ></FlatList>
                                
                            </View>

                            
                            <Text
                                style={{
                                fontSize: 42,
                                paddingLeft: 10,
                                paddingStart: 10,
                                color: '#ded'
                            }}>
                                {
                                    `* 종강까지 파이팅 *`
                                }
                            </Text>

                        </View>
                    </SelectContext.Provider>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
};

export default Caroro;
