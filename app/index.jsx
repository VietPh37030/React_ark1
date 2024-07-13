import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React from "react";
import { Link,Redirect,router} from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";
export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
       <StatusBar backgroundColor='#161622' barStyle={'light-content'} />
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full  items-center min-h-[85vh] px-4 ">
          <Image
            source={images.logo}
            className="2-[130px] h-[84px] "
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w--[380px] w-full  h-[300px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-2xl text-white font-bold text-center ">
              Discover Endless{"\n"}
              Possibilities with <Text className="text-secondary">Porn</Text>
            </Text>
            <Image source={images.path} className="w-[136px] h-[15px] absolute -bottom-2 -right-8" resizeMode="contain" />
          </View>
          <Text  className="text-sm text-gray-100 mt-7 text-center">Where creativity meets innovation: embark on a journey of limitless exploration  with <Text className="text-secondary-100">Porn</Text></Text>

            <CustomButton title="Continue with Email"
            
            handlePress={()=>router.push('/sign-in')}
            containerStyles ="w-full mt-7"
            />
        </View>
      </ScrollView>
     
    </SafeAreaView>
  );
}
