import React from "react";
import { StatusBar, Text, View } from "react-native";
import Button from "./components/ui/Button";


export default function App() {
  return (
    <View>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <Text>Hello 애지멍지</Text>
      <Button>버튼</Button>
    </View>
  );
}