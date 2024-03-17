import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Animated, { StretchInX, FadeIn, FadeInUp } from 'react-native-reanimated';


export default function LoginScreen() {
    return (
        <View className='bg-white h-full w-full'>
            <StatusBar style='light' />
            <Image className="h-full w-full absolute" source={require('../Assets/images/background.png')} />

            {/*LOGO*/}
            <View className="flex-row justify-around w-full absolute" style={{ transform: 'rotate(-12deg)' }}>
                <Animated.Image entering={StretchInX.delay(200).duration(500).springify().damping(5)} className="h-[145] w-[240]" source={require('../Assets/images/fn-logo.png')} style={{ marginTop: 105, marginLeft: 28 }} />
            </View>

            {/*FORM*/}
            <View className="h-full w-full flex justify-around pt-80">

                {/*FORM*/}
                <View className="flex items-center mx-4 space-y-4">
                    <Animated.View entering={FadeIn.delay(200).duration(1000)} className="bg-white/90 p-5 rounded-2xl w-full">
                        <TextInput placeholder='Email' placeholderTextColor={'gray'} />
                    </Animated.View>
                    <Animated.View entering={FadeIn.delay(200).duration(1000)} className="bg-white/90 p-5 rounded-2xl w-full">
                        <TextInput placeholder='Password' placeholderTextColor={'gray'} secureTextEntry/>
                    </Animated.View>

                    <Animated.View entering={FadeInUp.delay(500).duration(1000)} className="w-full">
                        <TouchableOpacity
                            className="w-full bg-slate-500 p-2  rounded-2xl mb-3">
                                <Text className="text-xl font-bold text-white text-center">Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            className="w-full bg-slate-500 p-2  rounded-2xl mb-3">
                                <Text className="text-xl font-bold text-white text-center">Use a Login Partner</Text>
                        </TouchableOpacity>
                    </Animated.View>
                    
                    <View className="flex-row justify-center">
                        <Text className="font-bold text-white text-center">Don't have an account? </Text>
                        <TouchableOpacity>
                                <Text className="font-bold text-white text-center">Register</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>

        </View>
    )
}