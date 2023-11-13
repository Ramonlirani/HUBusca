import { Container } from "./styles";
import { useState, useCallback } from "react";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { UserProps } from "../../types/user";
import { KeyboardAvoidingView } from "react-native";
import apiGitHub from "../../services/api";
import { saveUserDataHistory, saveUserHistory } from "../../utils/AsyncStorage";
import { useFocusEffect } from "@react-navigation/native";

export const HomePage = () => {
   const [user, setUser] = useState<UserProps>({
      name: "",
      login: "",
      followers: 0,
      following: 0,
      id: 0,
      location: "",
      avatar_url: "",
      repository_public: 0,
      repository_url: "",
   });

   const userSearch = async (login: string) => {
      try {
         const res = await apiGitHub.get(`/users/${login}`);

         const newUser = {
            name: res.data.name,
            login: res.data.login,
            followers: res.data.followers,
            following: res.data.following,
            id: res.data.id,
            location: res.data.location,
            avatar_url: res.data.avatar_url,
            repository_public: res.data.public_repos,
            repository_url: res.data.repos_url,
         };

         setUser(newUser);
         saveUserDataHistory(newUser);
         saveUserHistory(newUser);
      } catch (error) {
         setUser({
            name: "",
            login: "",
            followers: 0,
            following: 0,
            id: 0,
            location: "",
            avatar_url: "",
            repository_public: 0,
            repository_url: "",
         });
      }
   };

   const resetSearch = () => {
      setUser({
         name: "",
         login: "",
         followers: 0,
         following: 0,
         id: 0,
         location: "",
         avatar_url: "",
         repository_public: 0,
         repository_url: "",
      });
   };

   useFocusEffect(
      useCallback(() => {
         resetSearch();
      }, [])
   );
   return (
      <KeyboardAvoidingView style={{ flex: 1 }}>
         <Container>
            <Header />
            <Input userSearch={userSearch} user={user} />
         </Container>
      </KeyboardAvoidingView>
   );
};
