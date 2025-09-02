import { images } from "@/constants/images";
import { Bell } from "lucide-react-native";
import { Image, ScrollView, Text, TouchableOpacity, View, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Profile = () => {
  const handleLogout = async () => {};

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32 px-7"
      >
        <View className="flex flex-row items-center justify-between mt-5">
          <Text className="text-xl font-regular">Profile</Text>
         
              <Bell 
                 size={24}
               />
               <TouchableOpacity>
                <Image  source={images.profile} />
               </TouchableOpacity>
             </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;