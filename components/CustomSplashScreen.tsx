import React, { useEffect, useRef } from "react";
import { Animated, Dimensions, Text, View } from "react-native";

const { width, height } = Dimensions.get("window");

export default function CustomSplashScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.5)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // 페이드인 + 스케일 애니메이션
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 50,
        friction: 7,
        useNativeDriver: true,
      }),
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View className="flex-1 justify-center items-center bg-blue-50">
      <Animated.View
        style={{
          opacity: fadeAnim,
          transform: [{ scale: scaleAnim }, { rotate: spin }],
        }}
      >
        <View className="w-32 h-32 bg-blue-500 rounded-full justify-center items-center mb-8">
          <Text className="text-white text-4xl font-bold">🚀</Text>
        </View>
      </Animated.View>

      <Animated.View style={{ opacity: fadeAnim }}>
        <Text className="text-2xl font-bold text-gray-800 mb-2">
          Loading...
        </Text>
        <Text className="text-base text-gray-600 text-center">
          앱을 준비하고 있습니다
        </Text>
      </Animated.View>
    </View>
  );
}
