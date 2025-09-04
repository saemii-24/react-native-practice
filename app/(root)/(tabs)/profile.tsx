import { images } from "@/constants/images";
import {
  Bell,
  CalendarCheck,
  ChevronRight,
  CreditCard,
  Globe,
  HelpCircle,
  Pencil,
  Shield,
  User,
  Users,
} from "lucide-react-native";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const settings = [
  {
    icon: <CalendarCheck size={20} className="text-gray-800" />,
    title: "My Bookings",
  },
  {
    icon: <CreditCard size={20} className="text-gray-800" />,
    title: "Payments",
  },
  { icon: <User size={20} className="text-gray-800" />, title: "Profile" },
  {
    icon: <Bell size={20} className="text-gray-800" />,
    title: "Notifications",
  },
  { icon: <Shield size={20} className="text-gray-800" />, title: "Security" },
  { icon: <Globe size={20} className="text-gray-800" />, title: "Language" },
  {
    icon: <HelpCircle size={20} className="text-gray-800" />,
    title: "Help Center",
  },
  {
    icon: <Users size={20} className="text-gray-800" />,
    title: "Invite Friends",
  },
];

const Profile = () => {
  const handleLogout = async () => {};

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32 px-7"
      >
        {/* Header */}
        <View className="flex flex-row w-full items-center justify-between mt-5">
          <Text className="text-xl font-regular">Profile</Text>
          <Bell size={24} />
        </View>

        {/* Profile Image & Name */}
        <View className="flex items-center mt-8 mb-4">
          <View className="relative">
            <Image source={images.profile} className="size-28 rounded-full" />
            <TouchableOpacity className="absolute bottom-4 right-20 bg-blue-500 p-3 rounded-lg ">
              <Pencil size={30} fill="white" className="text-blue-500" />
            </TouchableOpacity>
          </View>
          <Text className="text-xl font-bold mt-4">
            신짱구 | 떡잎마을방범대
          </Text>
        </View>

        {/* Settings List */}
        <View className="bg-white rounded-xl mt-2">
          {settings.map((item, idx) => {
            // Payments(1번째)와 Invite Friends(마지막) 아래에만 border
            const border =
              idx === 1 || idx === settings.length - 1
                ? "border-b border-gray-200"
                : "";

            return (
              <TouchableOpacity
                key={item.title}
                className={`flex-row items-center py-4 ${border}`}
                onPress={() => {}}
              >
                <View className="mr-4">{item.icon}</View>
                <Text className="flex-1 text-base">{item.title}</Text>
                <ChevronRight size={20} className="text-gray-800" />
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Logout */}
        <TouchableOpacity className="mt-8" onPress={handleLogout}>
          <Text className="text-base text-red-500 font-semibold">Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
