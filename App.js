import * as React from "react";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import VisMenuDrawer from "./Vistas/VisMenuDrawer";

const MyStack = () => {
  return (
    <GluestackUIProvider mode="light"><Stack.Navigator>
        <Stack.Screen
          name="VMD"
          component={VisMenuDrawer}
          options={(title = "menu")}
        />
      </Stack.Navigator></GluestackUIProvider>
  );
};

const App = () => {
  return (
    <GluestackUIProvider mode="light"><NavigationContainer>
        <MyStack />
      </NavigationContainer></GluestackUIProvider>
  );
};

export default App;
