import { Tabs } from "expo-router";
import { House, Mail, Search, User } from "lucide-react-native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TabIcon = ({
  focused,
  Icon,
  title,
}: {
  focused: boolean;
  Icon: React.ElementType;
  title: string;
}) => (
  <View style={styles.tabIcon}>
    <View>
      <Icon
        size={24}
        color={focused ? "#0061FF" : "#999"}
        strokeWidth={focused ? 2 : 1.5}
      />
    </View>
    <Text style={[styles.tabText, { color: focused ? "#0061FF" : "#666" }]}>
      {title}
    </Text>
  </View>
);

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          position: "absolute",
          borderTopColor: "#0061FF1A",
          borderTopWidth: 1,
          minHeight: 70,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon Icon={House} focused={focused} title="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon Icon={Search} focused={focused} title="Explore" />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon Icon={Mail} focused={focused} title="Chat" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon Icon={User} focused={focused} title="Profile" />
          ),
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  tabIcon: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },
  tabText: {
    fontSize: 12,
    marginTop: 4,
    textAlign: "center",
  },
});

export default TabsLayout;
