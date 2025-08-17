import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center p-4">
      <Text className="text-2xl font-bold mb-8 text-center">Welcome! 🎉</Text>

      <View className="bg-blue-500 py-3 px-6 rounded-lg my-2 min-w-[120px]">
        <Link href="/sign-in">
          <Text className="text-white text-base font-medium text-center">
            Sign In
          </Text>
        </Link>
      </View>

      <View className="bg-green-500 py-3 px-6 rounded-lg my-2 min-w-[120px]">
        <Link href="/explore">
          <Text className="text-white text-base font-medium text-center">
            Explore
          </Text>
        </Link>
      </View>

      <View className="bg-purple-500 py-3 px-6 rounded-lg my-2 min-w-[120px]">
        <Link href="/profile">
          <Text className="text-white text-base font-medium text-center">
            Profile
          </Text>
        </Link>
      </View>

      <View className="bg-orange-500 py-3 px-6 rounded-lg my-2 min-w-[120px]">
        <Link href="/properties/1">
          <Text className="text-white text-base font-medium text-center">
            Property
          </Text>
        </Link>
      </View>
    </View>
  );
}
