import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { images } from "@/constants/images";
import { useGlobalContext } from "@/context/GlobalProvider";
import { login } from "@/lib/appwrite";

const SignIn = () => {
  console.log("🚀 SignIn 컴포넌트가 렌더링되었습니다!");
  const { refetch, loading, isLoggedIn } = useGlobalContext();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleLogin = async () => {
    const result = await login();
    if (result) {
      refetch();
    } else {
      Alert.alert("Error", "Failed to login");
    }
  };

  return (
    <View className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        <View className="relative h-full">
          <Image
            source={images.onboarding}
            className="w-full h-full"
            resizeMode="cover"
          />
          {/* 중앙에서 하단까지 그라데이션 오버레이 */}
          <LinearGradient
            colors={[
              "transparent",
              "rgba(255,255,255,0.8)",
              "rgba(255,255,255,1)",
            ]}
            locations={[0, 0.3, 1]}
            className="absolute w-full"
            style={{
              position: "absolute",
              top: "40%",
              bottom: 0,
              left: 0,
              right: 0,
            }}
          />
          {/* 텍스트를 하단에 배치 */}
          <View className="absolute bottom-[120px] left-0 right-0 px-10">
            <Text className="text-base text-center uppercase font-medium text-black-200">
              Welcome to ReState
            </Text>

            <Text className="text-3xl font-bold text-black-300 text-center mt-2">
              Let&apos;s Get You Closer to {"\n"}
              <Text className="text-primary-300">Your Ideal Home</Text>
            </Text>

            <Text className="text-lg font-medium text-black-200 text-center mt-4">
              Login to ReState with Google
            </Text>

            <TouchableOpacity
              onPress={handleLogin}
              disabled={isSubmitting}
              className={`bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5 ${
                isSubmitting ? "opacity-50" : ""
              }`}
            >
              <View className="flex flex-row items-center justify-center">
                <Image
                  source={require("../../assets/images/google.png")}
                  className="w-5 h-5"
                  style={{ marginRight: 8 }}
                />
                <Text className="text-lg font-medium text-black-300 ml-2">
                  {isSubmitting ? "Connecting..." : "Continue with Google"}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignIn;
