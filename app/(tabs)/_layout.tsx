import { Tabs } from "expo-router";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ColorProperties } from "react-native-reanimated/lib/typescript/Colors";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { COLORS } from "@/constants/theme";

export default function Tablayout() {
  return (
    <Tabs screenOptions={{tabBarShowLabel: false,
    }}
    >
      <Tabs.Screen name="index"
       options={{
        tabBarIcon: ({size,color}) => <Ionicons name="home" size={size} color={color} />
      }}
      />
      <Tabs.Screen name="bookmarks" 
      options={{ 
        tabBarIcon:({size,color}) => <Ionicons name="bookmark" size={size} color={color}/>
        }} 
        />
      <Tabs.Screen name="create"
      options={{
        tabBarIcon:({size}) => <Ionicons name="add-circle" size={size} color={COLORS.primary}/>
       }}
       />
      <Tabs.Screen name="notifications"
      options={{
        tabBarIcon:({color,size}) => <Ionicons name="heart" size={size} color={color} />
      }}
      />
      <Tabs.Screen name="profile" 
      options={{
        tabBarIcon:({ color,size }) => <Ionicons name="person-circle" size={size} color={color}/>
      }}
      />
    </Tabs>
  );
}