import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import TodoScreen from "../../src/screens/TodoScreen";
import Layout from "./Layout";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("ToDo");

  return (
    <View style={styles.container}>
      {/* Pass navigation function to Layout */}
      <Layout navigate={setCurrentScreen}>
        <TodoScreen navigate={setCurrentScreen} />
      </Layout>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: { flex: 1 },
});
