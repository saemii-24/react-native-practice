import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center p-4">
      <Text className="text-2xl font-bold mb-8 text-center">Welcome! 🎉</Text>

      <Link href="/sign-in" asChild>
        <TouchableOpacity className="bg-blue-500 py-3 px-6 rounded-lg my-2 min-w-[120px]">
          <Text className="text-white text-base font-medium text-center">
            Sign In
          </Text>
        </TouchableOpacity>
      </Link>

      <Link href="/explore" asChild>
        <TouchableOpacity className="bg-green-500 py-3 px-6 rounded-lg my-2 min-w-[120px]">
          <Text className="text-white text-base font-medium text-center">
            Explore
          </Text>
        </TouchableOpacity>
      </Link>

      <Link href="/profile" asChild>
        <TouchableOpacity className="bg-purple-500 py-3 px-6 rounded-lg my-2 min-w-[120px]">
          <Text className="text-white text-base font-medium text-center">
            Profile
          </Text>
        </TouchableOpacity>
      </Link>

      <Link href="/properties/1" asChild>
        <TouchableOpacity className="bg-orange-500 py-3 px-6 rounded-lg my-2 min-w-[120px]">
          <Text className="text-white text-base font-medium text-center">
            Property
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
