import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { HomeCard } from "./HomeCard";
import HomeHeader from "./HomeHeader";
import HomeRecommendCard from "./HomeRecommendCard";
import HomeSearch from "./HomeSearch";

const HomePage = () => {
  return (
    <ScrollView className="w-full bg-white">
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
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          columnGap: 16,
        }}
      >
        <HomeCard />
        <HomeCard />
        <HomeCard />
      </ScrollView>
      <HomeRecommendCard />
    </ScrollView>
  );
};

export default HomePage;
