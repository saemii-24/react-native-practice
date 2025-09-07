import { images } from "@/constants/images";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface Props {
  onPress?: () => void;
  title?: string;
  address?: string;
  price?: string;
  rating?: string;
}

const HomeRecommendCard = ({
  onPress,
  title = "Cozy Studio",
  address = "22 W 15th St, New York",
  price = "$2,500",
  rating = "4.4",
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex flex-col w-60 rounded-2xl bg-white shadow"
    >
      {/* 이미지 영역 */}
      <View className="relative w-full h-40 rounded-t-2xl overflow-hidden">
        <Image source={images.recommend} className="w-full h-full" />

        {/* 별점 뱃지 */}
        <View className="absolute right-3 top-3 bg-white rounded-full px-3 py-1 shadow">
          <Text className="text-xs font-bold text-primary-300">
            {rating} ⭐
          </Text>
        </View>
      </View>

      {/* 텍스트 영역 */}
      <View className="p-4 flex flex-col">
        <Text className="text-lg font-bold text-gray-900 mb-1">{title}</Text>
        <Text className="text-xs text-gray-500 mb-2">{address}</Text>
        <View className="flex flex-row justify-between items-center">
          <Text className="text-base font-bold text-primary-500">{price}</Text>
          <TouchableOpacity>
            <Text className="text-xl text-gray-400">♡</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default HomeRecommendCard;
