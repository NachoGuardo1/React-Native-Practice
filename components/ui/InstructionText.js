import React from "react";
import { StyleSheet, Text } from "react-native";
import Colors from "../../screens/utils/colors";

export const InstructionText = ({ children, style }) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.secondary,
    fontSize: 24,
    textAlign: "center",
  },
});
