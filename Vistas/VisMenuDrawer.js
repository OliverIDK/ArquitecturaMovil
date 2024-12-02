import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import VisInicio from "./VisInicio";
import VisFlexUno from "./VisFlexUno";
import VisFlexDos from "./VisFlexDos";
import VisFotoDetalle from "./VisFotoDetalle";
import VisFormUno from "./VisFormUno";
import VisPrincipal from "./VisPrincipal";
import VisSecundaria from "./VisSecundaria";
import Icon from "react-native-vector-icons/Entypo";
import VisParametroUno from "./VisParametroUno";
import VisParametroDos from "./VisParametroDos";
import VisElements from "./VisElements";
import VisNativeBase from "./VisNativeBase"

const DrawerApp = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{
        statusBarcolor: "#0163d2",
        headerStyle: {
          backgroundColor: "#0163d2",
        },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
        headerTitle: "App de Alumnos",
        headerShown: true,
      }}
    >
      <Drawer.Screen
        name="VPrincipal"
        component={VisPrincipal}
        options={{
          title: "Principal",
          drawerIcon: (config) => <Icon size={23} name="home" />,
        }}
      />
      <Drawer.Screen
        name="VSecundario"
        component={VisSecundaria}
        options={{ drawerItemStyle: { display: "none" } }}
      />

      <Drawer.Screen
        name="VInicio"
        component={VisInicio}
        options={{
          title: "Home",
          drawerIcon: (config) => <Icon size={23} name="home" />,
        }}
      />

      <Drawer.Screen
        name="VF1"
        component={VisFlexUno}
        options={{
          title: "Vista Flex 1",
          drawerIcon: (config) => <Icon size={23} name="tree" />,
        }}
      />

      <Drawer.Screen
        name="VF2"
        component={VisFlexDos}
        options={{
          title: "Vista Flex 2",
          drawerIcon: (config) => <Icon size={23} name="v-card" />,
        }}
      />
      <Drawer.Screen
        name="VFD"
        component={VisFotoDetalle}
        options={{
          title: "Vista Foto Detalle",
          drawerIcon: (config) => <Icon size={23} name="pin" />,
        }}
      />
      <Drawer.Screen
        name="VFUno"
        component={VisFormUno}
        options={{
          title: "Vista Formulario Uno",
          drawerIcon: (config) => <Icon size={23} name="key" />,
        }}
      />
      <Drawer.Screen
        name="VPUno"
        component={VisParametroUno}
        options={{
          title: "Vista Parametro",
          drawerIcon: (config) => <Icon size={23} name="key" />,
        }}
      />
      <Drawer.Screen
        name="VPDos"
        component={VisParametroDos}
        options={{ drawerItemStyle: { display: "none" } }}
      />
      <Drawer.Screen
        name="VElements"
        component={VisElements}
        options={{
          title: "Vista Elementos",
          drawerIcon: (config) => <Icon size={23} name="key" />,
        }}
      />
            <Drawer.Screen
        name="VisNBase"
        component={VisNativeBase}
        options={{
          title: "Vista Elementos",
          drawerIcon: (config) => <Icon size={23} name="key" />,
        }}
      />
    </Drawer.Navigator>
  );
};

function VisMenuDrawer() {
  return <DrawerApp />;
}

export default VisMenuDrawer;
