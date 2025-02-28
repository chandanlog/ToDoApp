import React from "react";
import { View, Button, StyleSheet, Text } from "react-native";

export default function Layout({ navigate, children }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>TODO</Text>
      </View>

      {/* Main Content */}
      <View style={styles.content}>{children}</View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 Todo. All Rights Reserved.</Text>
      </View>
    </View>
  );
}

const NavButton = ({ title, onPress }) => (
  <Button title={title} onPress={onPress} color="#36d576" />
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0c0c0c" },
  header: {
    backgroundColor: "#0c0c0c",
    paddingVertical: 12,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#36d576",
  },
  logo: { color: "#36d576", fontSize: 22, fontWeight: "bold" },
  navbar: { flexDirection: "row", gap: 10 },
  content: { flex: 1, padding: 10 },
  footer: {
    backgroundColor: "#0c0c0c",
    paddingVertical: 10,
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#36d576",
  },
  footerText: { color: "#aaa", fontSize: 14 },
});
