import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";

import { Home } from "@screens/Home";
import { Order } from "@screens/Order";
import { AuthRoutes } from "./auth.routes";

const { Navigator, Screen } = createNativeStackNavigator();

export function Routes() {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const subscribe = auth().onAuthStateChanged(setUser);
    return subscribe;
  }, []);

  return (
    <NavigationContainer>
      {user ? (
        //@ts-ignore
        <Navigator screenOptions={{ headerShown: false }}>
          <Screen name="home" component={Home} />
          <Screen name="order" component={Order} />
        </Navigator>
      ) : (
        <AuthRoutes />
      )}
    </NavigationContainer>
  );
}
