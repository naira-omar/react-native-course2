import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import logo from "../../../assets/logo.png";

function RepoHeader({ imageSrc, text, containerStyle, textStyle }) {
  return (
    <View style={[styles.container, containerStyle]}>
      <Image
        source={imageSrc ? { uri: imageSrc } : logo}
        style={styles.image}
      />
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </View>
  );
}
export { RepoHeader };