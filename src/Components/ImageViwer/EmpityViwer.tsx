import React, { memo } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { Colors } from "../../Configs/Colors";

const EmpityViwer = (): JSX.Element => {
  return (
    <View style={Styles.container}>
      <ActivityIndicator size={'large'} color={Colors.primary} />
    </View>
  );
}

export default memo(EmpityViwer);

const Styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});