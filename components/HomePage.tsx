import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { HomeCard } from "./HomeCard";
import HomeHeader from "./HomeHeader";
import HomeSearch from "./HomeSearch";

const HomePage = () => {
  return (
    <View className="w-full max-h-dvh">
      <HomeHeader />
      <HomeSearch />
      <View className="my-5">
        <View className="flex flex-row items-center justify-between">
          <Text className="text-xl font-rubik-bold text-black-300">특징</Text>
          <TouchableOpacity>
            <Text className="text-base font-rubik-bold text-primary-300">
              See All
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <HomeCard />
    </View>
  );
};

export default HomePage;
