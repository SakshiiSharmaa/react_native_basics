import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainNavigator from "./navigation/mainNavigation";
import AddTodosScreen from "./screen/AddTodosScreen";
import HomeScreen from "./screen/HomeScreen";
import { Provider } from "react-redux";
import { store } from "./store/store";

export default function App() {
  return;
  <Provider store={store}>
    <MainNavigator />
  </Provider>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
