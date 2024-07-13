import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import {Link} from "expo-router"
const SignIn = () => {
  const [form, setForm] = useState({
    email:'',
    password:''
  })
  const submit = ()=>{

  }
  const [isSubmitting, setisSubmitting] = useState(false)
  return (
    <SafeAreaView className="bg-primary  h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[83vh] px-4 my-6 ">
          <Image
            source={images.logoSmall}
            className="w-[115px] h-[45px]"
            resizeMode="contain"
          />
          <Text className="text-white text-2xl font-semibold mt-8 my-3">Log in to <Text className="text-secondary-100">Porn</Text></Text>
          <FormField 
          title="Email"
          value={form.email}
          handleChangeText={(e)=>setForm({...form,email:e})}
          otherStyles="mt-10"
          keyboardType="email-address"
          />
          <FormField 
          title="Password"
          value={form.password}
          handleChangeText={(e)=>setForm({...form,password:e})}
          otherStyles="mt-10"
        
          />
          <CustomButton title="Sign In" 
          handlePress={submit}
          containerStyles="mt-7"
          isLoading={isSubmitting}
          />
          <View className="justify-center pt-5 flex-row gap-2">
        <Text className="text-lg text-gray-100 font-medium">
Don't have an account?
        </Text>
        <Link href={"/sign-up"} className="text-lg text-secondary-100">SignUp</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
