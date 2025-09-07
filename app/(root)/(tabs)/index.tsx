import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import { View } from "react-native";

export default function Index() {
  return (
    <View>
      <HomeHeader />
      <HomeSearch
        onSearch={(text) => {
          // TODO: 검색 결과 반영 로직 연결
          // 예시: console.log(text)
        }}
      />
    </View>
  );
}
