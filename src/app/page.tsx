import { Text, View } from "react-native";

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "600" }}>
        Next.js with React Native for Web
      </Text>
      <View style={{ height: 20 }} />
      <Text style={{ fontSize: 24, fontWeight: "200" }}>
        This is a dumb boilerplate
      </Text>
    </View>
  );
}
