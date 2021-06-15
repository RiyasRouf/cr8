import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function SubTitle(props) {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', padding: 15, marginLeft:15 }}>
            <Text>{props.title}</Text>
            <Text>View all</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
