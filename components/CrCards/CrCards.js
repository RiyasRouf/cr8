import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default function CrCards() {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
            <View>
                <Image
                    source={require('../../assets/images/fitness.jpg')}
                    style={{
                        height: 135,
                        width: 120, borderRadius: 10
                    }}
                />
                <Text style={{ position: 'absolute', bottom: 10, left: 10 }}>Title</Text>
            </View>

            <View>
                <Image
                    source={require('../../assets/images/image1.png')}
                    style={{
                        height: 135,
                        width: 120, borderRadius: 10
                    }}
                />
                <Text style={{ position: 'absolute', bottom: 10, left: 10 }}>Title</Text>
            </View>
            <View>
                <Image
                    source={require('../../assets/images/image1.png')}
                    style={{
                        height: 135,
                        width: 120, borderRadius: 10
                    }}
                />
                <Text style={{ position: 'absolute', bottom: 10, left: 10 }}>Title</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})
