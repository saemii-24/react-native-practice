import { Search, SlidersHorizontal } from "lucide-react-native";
import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { useDebounce } from "use-debounce";

const HomeSearch = ({
  onSearch,
  placeholder = "찾으시는 건물을 입력해주세요.",
}: {
  onSearch?: (value: string) => void;
  placeholder?: string;
}) => {
  const [value, setValue] = useState("");
  const [debounced] = useDebounce(value, 400);

  React.useEffect(() => {
    if (onSearch) onSearch(debounced);
  }, [debounced, onSearch]);

  return (
    <View className="flex-row items-center bg-[#F7F7F7] rounded-xl px-4 py-3 mt-2">
      <Search size={20} className="text-gray-400 mr-2" />
      <TextInput
        className="flex-1 text-base text-black"
        placeholder={placeholder}
        placeholderTextColor="#BDBDBD"
        value={value}
        onChangeText={setValue}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TouchableOpacity>
        <SlidersHorizontal size={20} className="text-gray-400 ml-2" />
      </TouchableOpacity>
    </View>
  );
};

export default HomeSearch;
