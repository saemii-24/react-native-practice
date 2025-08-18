import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center p-4 bg-accent-100">
      <Text className="text-3xl font-bold mb-12 text-center text-black-300">
        Welcome! 🎉
      </Text>

      <Link href="/sign-in" asChild>
        <TouchableOpacity className="bg-primary-300 py-4 px-8 rounded-xl my-3 min-w-[140px] shadow-lg">
          <Text className="text-white text-lg font-semibold text-center">
            Sign In
          </Text>
        </TouchableOpacity>
      </Link>

      <Link href="/explore" asChild>
        <TouchableOpacity className="bg-primary-200 py-4 px-8 rounded-xl my-3 min-w-[140px] shadow-lg">
          <Text className="text-primary-300 text-lg font-semibold text-center">
            Explore
          </Text>
        </TouchableOpacity>
      </Link>

      <Link href="/profile" asChild>
        <TouchableOpacity className="bg-black-100 py-4 px-8 rounded-xl my-3 min-w-[140px] shadow-lg">
          <Text className="text-black-300 text-lg font-semibold text-center">
            Profile
          </Text>
        </TouchableOpacity>
      </Link>

      <Link href="/properties/1" asChild>
        <TouchableOpacity className="bg-danger py-4 px-8 rounded-xl my-3 min-w-[140px] shadow-lg">
          <Text className="text-white text-lg font-semibold text-center">
            Property
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
