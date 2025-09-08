import { useLocalSearchParams, useRouter } from "expo-router";

import React, { useState } from "react";

import { ScrollView, Text, TouchableOpacity } from "react-native";

const categories = [
  { title: "All", category: "all" },
  { title: "Houses", category: "houses" },
  { title: "Condos", category: "condos" },
  { title: "Duplexes", category: "duplexes" },
  { title: "Studios", category: "studios" },
  { title: "Townhomes", category: "townhomes" },
  { title: "Lofts", category: "lofts" },
];

const HomeFilter = () => {
  const params = useLocalSearchParams<{ filter?: string }>();
  const [selectedCategory, setSelectedCategory] = useState<string>(
    params.filter || "all"
  );

  const router = useRouter();
  const handleCategoryPress = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory("all");
      router.setParams({ filter: "all" });
      return;
    }
    setSelectedCategory(category);
    router.setParams({ filter: category });
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="mt-3 mb-2"
      contentContainerStyle={{ paddingHorizontal: 8 }}
    >
      {categories.map((item, index) => (
        <TouchableOpacity
          key={item.category}
          onPress={() => handleCategoryPress(item.category)}
          className={`flex flex-col items-center mr-4 px-4 py-2 rounded-full ${selectedCategory === item.category ? "bg-primary-300" : "bg-gray-200"}`}
        >
          <Text
            className={
              selectedCategory === item.category
                ? "text-white font-bold"
                : "text-black-300"
            }
          >
            {item.title}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default HomeFilter;
