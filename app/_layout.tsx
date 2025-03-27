import { Stack } from "expo-router";
import { SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function rootlayout() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{flex : 1}}>
    <Stack>
       <Stack.Screen name="index" options={{ title: "feed" }} />
       <Stack.Screen name="notifications" options={{ title: "notifications",headerShown: false }} />
    </Stack>
    </SafeAreaView>
    </SafeAreaProvider>
    );
}