import React from "react";
import { Image, Text, View } from "react-native";
// 이제 TypeScript 에러 없이 이미지 import 가능!
import iconImage from "@/assets/images/icon.png";
import reactLogo from "@/assets/images/react-logo.png";

export default function ImageExample() {
  return (
    <View className="flex-1 justify-center items-center bg-accent-100">
      <Text className="text-black-300 text-xl font-bold mb-6">이미지 예시</Text>

      {/* 앱 아이콘 */}
      <Image
        source={iconImage}
        className="w-24 h-24 mb-4 rounded-xl"
        resizeMode="contain"
      />

      {/* React 로고 */}
      <Image source={reactLogo} className="w-32 h-32" resizeMode="contain" />

      {/* require() 방식도 여전히 사용 가능 */}
      <Image
        source={require("@/assets/images/favicon.png")}
        className="w-16 h-16 mt-4"
        resizeMode="contain"
      />
    </View>
  );
}
