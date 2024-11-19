import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import VisMenuDrawer from "./Vistas/VisMenuDrawer";

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="VMD"
        component={VisMenuDrawer}
        options={(title = "menu")}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default App;
