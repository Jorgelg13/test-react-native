import React from 'react';
import {View, Text} from 'react-native';

export default function Titulo(props){
    const {title} = props
    return(
        <View>
            <Text>{title}</Text>
        </View>
    )
}