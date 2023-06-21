import React from 'react';
import { Text, ScrollView } from 'react-native';
const Board = props => {
    return (
        <ScrollView>
            <Text 
            style={{padding: 10, marginBottom: 10 }}>
                [{props.board.no}]  {props.board.date} I 조회수 {props.board.hit}  {props.board.title}
            </Text>
        </ScrollView>
    );
};
export default Board;