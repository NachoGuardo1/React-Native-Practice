import React from "react";
import { StyleSheet, View } from "react-native";
import Colors from "../../screens/utils/colors";

export const Card = ({ children }) => {
  return <View style={styles.allContainer}>{children}</View>;
};

const styles = StyleSheet.create({
  allContainer: {
    padding: 16,
    marginTop: 36,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: Colors.primary,
    //elevation es para andriod
    elevation: 4,
    //shadows para Ios
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.3,
  },
});
