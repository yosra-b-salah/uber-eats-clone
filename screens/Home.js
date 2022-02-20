import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { HeadersTab } from '../composants/HeaderTab'

const Home = () => {
    return (

        <SafeAreaView style={{
            backgroundColor: "red",
            flex: 1
        }}>
            <View style={{
                backgroundColor: "white",
                padding: 15
            }}>
                <HeadersTab />
            </View>

        </SafeAreaView>


    )
}

export default Home