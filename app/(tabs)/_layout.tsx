import { Tabs } from "expo-router";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Tablayout() {
  return (
    <Tabs screenOptions={{tabBarShowLabel: false,
    }}
    >
      <Tabs.Screen name="index"
       options={{
        tabBarIcon: () => <Ionicons name="home" />
      }}
      />
      <Tabs.Screen name="bookmarks" 
      options={{ 
        tabBarIcon:() => <Ionicons name="bookmark" />
        }} 
        />
      <Tabs.Screen name="create"
      options={{
        tabBarIcon:() => <Ionicons name="add-circle" />
       }}
       />
      <Tabs.Screen name="notifications"
      options={{
        tabBarIcon:() => <Ionicons name="notifications" />
      }}
      />
      <Tabs.Screen name="profile" 
      options={{
        tabBarButton: () => <Ionicons name="person" />
      }}
      />
    </Tabs>
  );
}