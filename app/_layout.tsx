import { Stack } from "expo-router";
import { SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View,Text } from "react-native";

export default function rootlayout() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{flex : 1}}>
    <Stack screenOptions={{ headerShown : false}} />
    </SafeAreaView>
    </SafeAreaProvider>
    );
}