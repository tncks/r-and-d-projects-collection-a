import React, {useEffect, useState} from 'react';
import {View, Button, FlatList, TouchableOpacity} from 'react-native';
import {WebView} from 'react-native-webview';
import Board from './Board';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    BoardDetailContainer: {
        height: 1200
    }

})

const MyWeb = (props) => {

    return (
        <View style={{
            minHeight: 1200
        }}>
            <WebView
                source={{
                uri: props.link
            }}
                style={styles.BoardDetailContainer}/>
        </View>
    );
}

const Boards = props => {
    const [isLoading,
        setLoading] = useState(false);
    const [isWebShow,
        setWebShow] = useState(false);
    const [pressedLink,
        setPressedLink] = useState("");
    const [boardcontent,
        setBoardcontent] = useState([]);
    getBoards = () => {

        fetch('https://bridgeservers.herokuapp.com/posts').then((response) => response.json()).then((json) => {
            setBoardcontent(json);
        }).catch((error) => console.error(error)). finally(() => setLoading(false));
    }

    useEffect(() => {
        setLoading(false);
        setWebShow(false);
        setPressedLink("");
        getBoards();
    }, []);

    pressandShow = (link) => {
        return (
            <View
                style={{
                minWidth: 50,
                minHeight: 50
            }}>
                <MyWeb link={link}/>
            </View>
        )
    }

    return (
        <View>
            {
            <View>
                    <View
                style={{
                width: 'auto',
                height: 'auto',
                justifyContent: 'space-around',
                flexDirection: 'row'
            }}>
                <View
                    style={{
                    flex: 1,
                    height: '100%',
                    borderColor: '#000',
                    borderStyle: 'solid',
                    backgroundColor: '#fff'
                }}></View>
                <View
                    style={{
                    flex: 2,
                    height: '100%',
                    borderRadius: 1,
                    borderWidth: 1,
                    borderColor: '#0000fa'
                }}>

                    <Button
                        style={{
                        borderRadius: 20,
                        overflow: 'hidden',
                        padding: 8
                    }}
                        variant="contained"
                        color="#3f51b5"
                        value="value"
                        title="해성공지"
                        onPress={() => {
                        setWebShow(false);
                        setBoardcontent([]);
                        fetch('https://bridgeservers.herokuapp.com/posts').then((response) => response.json()).then((json) => {
                            setBoardcontent(json);
                        }).catch((error) => console.error(error)). finally(() => setLoading(false));
                        console.log('hasung clicked')
                    }}></Button>

                </View>
                <View
                    style={{
                    flex: 1,
                    height: '100%',
                    borderColor: '#000',
                    borderStyle: 'solid',
                    backgroundColor: '#fff'
                }}></View>
                <View
                    style={{
                    flex: 2,
                    height: '100%',
                    borderRadius: 1,
                    borderWidth: 1,
                    borderColor: '#0000fa'
                }}>

                    <Button
                        style={{
                        borderRadius: 30
                    }}
                        borderRadius="30"
                        variant="contained"
                        color="#3f51b5"
                        value="value"
                        title="학사공지"
                        onPress={() => {
                        setWebShow(false);
                        setBoardcontent([]);
                        fetch('https://bridgeservers.herokuapp.com/posts/haksa').then((response) => response.json()).then((json) => {
                            setBoardcontent(json);
                        }).catch((error) => console.error(error)). finally(() => setLoading(false));
                        console.log('haksa clicked')
                    }}></Button>

                </View>
                <View
                    style={{
                    flex: 1,
                    height: '100%',
                    borderColor: '#000',
                    borderStyle: 'solid',
                    backgroundColor: '#fff'
                }}></View>

                    </View>
             </View>
            }
            <View>
                {
                isLoading ? console.log("LoadingData..")
                    : (
                        <FlatList
                            data={boardcontent}
                            keyExtractor={({_id}) => _id.toString()}
                            renderItem={({item}) => <TouchableOpacity
                                                    onPress={() => {
                                                    setPressedLink(item.link);
                                                    setWebShow(true)
                                                }}>
                            <View>
                                <Board board={item}></Board>
                                {
                                 (item.link == pressedLink) ? ((isWebShow && (pressandShow(pressedLink))))
                                    : console.log()
                                }
                            </View>
                        </TouchableOpacity>
                        }></FlatList>
                        )
                }
            </View>
        </View>
    );
}

export default Boards;