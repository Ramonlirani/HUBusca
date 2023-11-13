import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Feather";

export const InputContainer = styled.View`
   flex-direction: row;
   align-items: center;
   justify-content: center;
   padding-top: 32px;
`;

export const CardContainer = styled.View`
   padding-top: 10px;
   padding-right: 40px;
   padding-left: 40px;
`;

export const InputSearch = styled.TextInput`
   width: 70%;
   height: 40px;
   border-width: 1px;
   padding: 6px;
   border-right-width: 0px;
   border-top-left-radius: 6px;
   border-bottom-left-radius: 6px;
   border-color: ${({ theme }) => theme.colors.white};
   color: ${({ theme }) => theme.colors.white};
   font-family: monospace;
`;
export const IconButton = styled.TouchableOpacity`
   background-color: ${({ theme }) => theme.colors.secondary};
   border-width: 1px;
   border-color: ${({ theme }) => theme.colors.white};
   width: 35px;
   height: 40px;
   align-items: center;
   justify-content: center;
   border-top-right-radius: 6px;
   border-bottom-right-radius: 6px;
`;

export const StyledIcon = styled(Icon)`
   color: ${({ theme }) => theme.colors.white};
   font-size: 18px;
`;
