import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserProps } from "../types/user";

export async function saveUserDataHistory(user: UserProps) {
   try {
      const json = JSON.stringify(user);
      await AsyncStorage.setItem("@user_data", json);
   } catch (error) {
      Alert.alert("Something went wrong while saving the information");
   }
}

export async function saveUserHistory(user: UserProps) {
   try {
      const jsonValue = await AsyncStorage.getItem("@user_history");
      let userHistory = jsonValue ? JSON.parse(jsonValue) : [];

      const userExists = userHistory.find(
         (userID: UserProps) => userID.id === user.id
      );

      if (!userExists) {
         userHistory = [...userHistory, user];
         const json = JSON.stringify(userHistory);
         await AsyncStorage.setItem("@user_history", json);
      }
   } catch (error) {
      Alert.alert("Something went wrong, please try again later");
   }
}
