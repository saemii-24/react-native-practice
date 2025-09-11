import React, { useState } from "react";
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const messages = [
  { id: "1", text: "안녕 철수야!", time: "오전 11:02", sender: "me" },
  {
    id: "2",
    text: "너 오늘 봤던 부동산 뭐였지?",
    time: "오전 11:03",
    sender: "me",
  },
  {
    id: "3",
    text: "아, 내가 예쁘다고 했던 매물?",
    time: "오전 11:17",
    sender: "Alan",
  },
  {
    id: "4",
    text: "이렇게 생겼어",
    time: "오전 11:20",
    sender: "Alan",
  },
  {
    id: "5",
    text: "",
    time: "오전 11:20",
    sender: "Alan",
    attachment: require("../../../assets/images/feature.jpg"),
  },
  {
    id: "6",
    text: "오오~여기로 계약했어?",
    time: "오전 11:34",
    sender: "me",
    replyTo: 4,
  },
  {
    id: "7",
    text: "아직 고민중이야.",
    time: "오전 11:52",
    sender: "Alan",
  },
];

export default function ChatScreen() {
  const [input, setInput] = useState("");

  const renderMessage = ({ item }) => (
    <View
      className={
        `max-w-[80%] my-1 overflow-hidden ` +
        (item.sender === "me" ? "self-end" : "self-start")
      }
    >
      {item.replyTo && (
        <View className="bg-gray-100 p-2 rounded-md">
          <Text className="text-xs text-gray-500">
            {messages.find((m) => m.id === String(item.replyTo))?.text}
          </Text>
        </View>
      )}
      <View
        className={
          `rounded-xl p-3 ` +
          (item.sender === "me"
            ? "bg-primary"
            : "bg-white border border-gray-200")
        }
        style={item.sender === "me" ? { backgroundColor: "#0061FF" } : {}}
      >
        {item.attachment && (
          <Image
            source={item.attachment}
            style={{ width: 120, height: 80, borderRadius: 8, marginBottom: 6 }}
          />
        )}
        {item.text !== "" && (
          <Text className={item.sender === "me" ? "text-white" : "text-black"}>
            {item.text}
          </Text>
        )}
        <Text className="text-[10px] text-gray-400 self-end mt-1">
          {item.time}
        </Text>
      </View>
    </View>
  );

  return (
    <View className="flex-1 bg-gray-50 p-3">
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 60 }}
      />
      <View className="absolute bottom-0 left-0 right-0 flex-row items-center bg-white p-2 border-t border-gray-200">
        <TextInput
          className="flex-1 h-10 rounded-full bg-gray-100 px-4"
          placeholder="Enter your message here"
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity className="ml-2">
          <Text className="text-primary font-bold">전송</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
