import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";

const App = () => {
  const Stack = createStackNavigator();

  const theme = {
    ...DefaultTheme,
    colors: { ...DefaultTheme.colors, background: "transparent" },
  };
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
        <Stack.Screen name="Home" component={}/>
        <Stack.Screen name="Details" component={}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
