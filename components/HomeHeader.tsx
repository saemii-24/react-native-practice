import { images } from "@/constants/images";
import { Bell } from "lucide-react-native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface HomeHeaderProps {
  username?: string;
  onBellPress?: () => void;
}

const HomeHeader: React.FC<HomeHeaderProps> = ({ onBellPress }) => {
  return (
    <SafeAreaView className="flex flex-row items-center justify-between pt-4 pb-2 px-4 bg-white">
      <View className="flex flex-row items-center px-5">
        <Image source={images.profile} className="size-12 rounded-full mr-3" />
        <View>
          <Text className="text-xs text-gray-400">Good Morning</Text>
          <Text className="text-base font-bold text-black">
            신짱구 | 떡잎마을방범대
          </Text>
        </View>
      </View>
      <TouchableOpacity onPress={onBellPress} className="p-2">
        <Bell size={24} className="text-gray-600" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeHeader;
