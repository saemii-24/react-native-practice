import images from "@/constants/images";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface Props {
  onPress?: () => void;
  title?: string;
  address?: string;
  price?: string;
  rating?: string;
}

const ExploreCard = ({
  onPress,
  title = "Modern Apartment",
  address = "22 W 15th St, New York",
  price = "$2,500",
  rating = "4.4",
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex flex-col items-start w-full h-80 relative overflow-hidden rounded-2xl"
    >
      <Image source={images.feature} className="w-full h-full rounded-2xl" />

      <View className="absolute left-3 top-3 bg-white rounded-full px-3 py-1 shadow">
        <Text className="text-xs font-bold text-primary-300">{rating}</Text>
      </View>
      <View className="absolute left-3 bottom-6">
        <Text className="text-lg font-bold text-white mb-1">{title}</Text>
        <Text className="text-xs text-white mb-1">{address}</Text>
        <Text className="text-base font-bold text-white">{price}</Text>
      </View>
      <TouchableOpacity className="absolute right-3 bottom-6">
        <Text className="text-white text-xl">♡</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ExploreCard;
