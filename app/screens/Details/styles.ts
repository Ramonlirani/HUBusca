import { SafeAreaView } from "react-native";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
   flex: 1;
   padding-top: 40px;
   background-color: ${({ theme }) => theme.colors.primary};
`;
