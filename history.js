import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { white } from "react-native-paper/lib/typescript/styles/colors";

const HIST = ["item #1", "item #2", "item #3", "history", "site visit", "more", "later"];

export default function History() {
  return (
    <View style={styles.container}>
      
      <Text style={{fontSize: 30, color: "#FFFFFF", alignSelf: "center", marginTop: 20, marginBottom: 30,}}>
        History
      </Text>
      
      <FlatList
        data={HIST}
        keyExtractor={(item, index) => index.toString()}
        renderItem={(history) => {
          return (
            <View style={styles.listItem}>
              <Text style={styles.item}>{history.item}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    width: '100%', 
    resizeMode: 'contain', 
    backgroundColor: '#192b59',
    padding: 25,
  },

  listItem: {
    backgroundColor: "#EF7768",
    borderWidth: 1,
    borderColor: "#333",
    padding: 25,
    margin: 10,
    borderRadius: 20,
  },

  item: {
    fontSize: 18,
    fontWeight: "bold",
  },
});