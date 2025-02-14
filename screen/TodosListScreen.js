import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import TodoList from "../components/TodoList";
import HeaderTop from "../components/HeaderTop";
import data from "../assets/data/todo-data";
import COLORS from "../constants/COLORS";

const TodosListScreen = ({ navigation }) => {
  return (
    <>
      <HeaderTop title="TodosApp" color={COLORS.colorheader} />
      <TodoList todosList={data} />
    </>
  );
};

export default TodosListScreen;

const styles = StyleSheet.create({});
