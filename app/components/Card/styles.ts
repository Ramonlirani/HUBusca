import Icon from "react-native-vector-icons/Feather";
import styled from "styled-components/native";

export const Container = styled.View`
   border-radius: 6px;
   border-width: 1px;
   border-color: white;
   margin-bottom: 10px;
`;

export const InfoAvatarNameContainer = styled.View`
   padding: 10px;
   flex-direction: row;
   width: 100%;
`;

export const Avatar = styled.Image`
   width: 35px;
   height: 35px;
   border-radius: 16.25px;
`;

export const NameText = styled.Text`
   font-size: 18px;
   margin-left: 20px;
   font-weight: normal;
   color: ${({ theme }) => theme.colors.blue_text};
   font-family: monospace;
`;

export const InfoLoginLocationContainer = styled.View`
   flex-direction: column;
   padding: 10px;
   width: 100%;
`;

export const LoginContainer = styled.View`
   flex-direction: row;
`;
export const LocationContainer = styled.View`
   flex-direction: row;
   padding-top: 5px;
`;

export const LoginText = styled.Text`
   font-size: 14px;
   margin-left: 10px;
   font-weight: normal;
   color: ${({ theme }) => theme.colors.text_secondary};
   font-family: monospace;
   margin-bottom: 5px;
`;

export const StyledIconLocation = styled(Icon)`
   color: ${({ theme }) => theme.colors.text_secondary};
   font-size: 18px;
`;

export const StyledIconLogin = styled(Icon)`
   color: ${({ theme }) => theme.colors.text_secondary};
   font-size: 18px;
   margin-bottom: 5px;
`;

export const LocationText = styled.Text`
   font-size: 14px;
   margin-left: 10px;
   font-weight: normal;
   color: ${({ theme }) => theme.colors.text_secondary};
   font-family: monospace;
`;
