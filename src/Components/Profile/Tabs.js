import { Text } from "native-base";
import React, { useState } from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import Colors from "../../color";
import Orders from "./Orders";
import Profile from "./Profile";

const renderScene = SceneMap({
  first: Profile,
  second: Orders,
});
export default function Tabs() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "PROFILE" },
    { key: "second", title: "ORDERS" },
  ]);

  const renderTabsBar = (props) => {
    return (
      <TabBar
        {...props}
        tabStyle={{ backgroundColor: Colors.charcoal }}
        indicatorStyle={{ backgroundColor: Colors.charcoal }}
        activeColor={Colors.platinum}
        inactiveColor={Colors.ashGray}
        renderLabel={({ route, color }) => {
          return <Text style={{ color, ...style.text }}>{route.title}</Text>;
        }}
      />
    );
  };

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabsBar}
    />
  );
}

const style = StyleSheet.create({
  text: {
    fontSize: 13,
    fontWeight: "bold",
  },
});
