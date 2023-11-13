import { SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
   flex: 1;
   padding-top: 10px;
   background-color: ${({ theme }) => theme.colors.primary};
`;
export const ContainerButtons = styled.View`
   height: 40px;
   flex-direction: row;
   justify-content: space-between;
   padding-top: 25px;
   padding-left: 40px;
   padding-right: 40px;
   align-items: center;
`;

export const HeaderContainer = styled.View`
   margin: 30px 0;
   flex-direction: row;
   justify-content: center;
   align-items: center;
`;

export const Avatar = styled.Image`
   width: 50px;
   height: 50px;
   border-radius: 25px;
`;

export const HeaderTextContainer = styled.View`
   flex-direction: column;
`;

export const NameText = styled.Text`
   font-size: 22px;
   margin-left: 5px;
   font-weight: normal;
   color: ${({ theme }) => theme.colors.text_primary};
   font-family: monospace;
`;

export const LoginText = styled.Text`
   font-size: 16px;
   margin-left: 5px;
   font-weight: normal;
   color: ${({ theme }) => theme.colors.text_secondary};
   font-family: monospace;
`;

export const HeaderDataUserContainer = styled.View`
   flex-direction: row;
   justify-content: space-between;
   width: 100%;
   padding-right: 40px;
   padding-left: 40px;
`;

export const HeaderLocationUserContainer = styled.View`
   flex-direction: row;
   align-items: center;
   padding-left: 14px;
   padding-bottom: 6px;
`;

export const StyledIconLocation = styled(Icon)`
   color: ${({ theme }) => theme.colors.text_secondary};
   font-size: 18px;
`;

export const LocationText = styled.Text`
   font-size: 16px;
   margin-left: 10px;
   font-weight: normal;
   color: ${({ theme }) => theme.colors.text_secondary};
   font-family: monospace;
`;

export const HeaderIDUserContainer = styled.View`
   flex-direction: row;
   align-items: center;
   padding-bottom: 6px;
`;

export const IDText = styled.Text`
   font-size: 16px;
   font-weight: normal;
   color: ${({ theme }) => theme.colors.text_secondary};
   font-family: monospace;
`;

export const HeaderQuantityRepoContainer = styled.View`
   flex-direction: row;
   align-items: center;
   padding-left: 40px;
   padding-bottom: 20px;
`;

export const QuantityRepoText = styled.Text`
   font-size: 16px;
   font-weight: normal;
   color: ${({ theme }) => theme.colors.text_secondary};
   font-family: monospace;
`;

export const FollowsContainer = styled.View`
   flex-direction: row;
   align-items: center;
   padding-left: 40px;
`;

export const StyledIconFollows = styled(Icon)`
   color: ${({ theme }) => theme.colors.text_secondary};
   font-size: 18px;
`;

export const NumberText = styled.Text`
   font-size: 16px;
   margin-left: 10px;
   font-weight: normal;
   color: ${({ theme }) => theme.colors.text_primary};
   font-family: monospace;
`;

export const FollowsText = styled.Text`
   font-size: 16px;
   margin-left: 10px;
   font-weight: normal;
   color: ${({ theme }) => theme.colors.text_secondary};
   font-family: monospace;
`;
