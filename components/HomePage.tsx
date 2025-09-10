import React from "react";
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { HomeCard } from "./HomeCard";
import HomeFilter from "./HomeFilter";
import HomeHeader from "./HomeHeader";
import HomeRecommendCard from "./HomeRecommendCard";
import HomeSearch from "./HomeSearch";

const HomePage = () => {
  return (
    <ScrollView
      className="w-full bg-white"
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <HomeHeader />
      <HomeSearch />
      <View className="my-5 px-4">
        <View className="flex flex-row items-center justify-between">
          <Text className="text-xl font-rubik-bold text-black-300">특징</Text>
          <TouchableOpacity>
            <Text className="text-base font-rubik-bold text-primary-300">
              See All
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={[1, 2, 3]} // 카드 개수에 맞는 데이터 배열
        keyExtractor={(item) => item.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          columnGap: 16,
        }}
        renderItem={({ item }) => <HomeCard />} // 아이템 렌더링
      />

      <View className="my-5 px-4">
        <View className="flex flex-row items-center justify-between">
          <Text className="text-xl font-rubik-bold text-black-300">
            추천 부동산
          </Text>
          <TouchableOpacity>
            <Text className="text-base font-rubik-bold text-primary-300">
              See All
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <HomeFilter />
      <View className="flex flex-row gap-5 mt-5">
        <HomeRecommendCard />
        <HomeRecommendCard />
      </View>
    </ScrollView>
  );
};

export default HomePage;
