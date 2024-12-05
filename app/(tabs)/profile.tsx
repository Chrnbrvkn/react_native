import React from "react";
import { observer } from "mobx-react-lite";
import { View, Text } from "react-native";

const ProfileScreen = observer(() => {
  return (
    <View>
      <Text style={{ textAlign: 'center',marginTop: "30%" }}>Profile screen</Text>
    </View>
  );
});

export default ProfileScreen;
