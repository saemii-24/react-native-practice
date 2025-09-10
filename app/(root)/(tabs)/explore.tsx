import ExploreCard from "@/components/ExploreCard";
import HomeSearch from "@/components/HomeSearch";
import React from "react";
import { FlatList, Text, View } from "react-native";

const Explore = () => {
  return (
    <View className="flex-1 bg-white">
      <HomeSearch />
      <Text className="px-4 py-2 font-semibold">Found 6 Properties</Text>

      <FlatList
        data={[1, 2, 3, 4]}
        keyExtractor={(_, index) => index.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={() => (
          <View className="flex-1 p-2">
            <ExploreCard />
          </View>
        )}
      />
    </View>
  );
};

export default Explore;
