import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Feather";

export const TouchableOpacityContainer = styled.TouchableOpacity`
   background-color: ${({ theme }) => theme.colors.primary};
   align-items: center;
   justify-items: center;
`;

export const CardContainer = styled.View`
   width: 80%;
   flex-direction: column;
   background-color: ${({ theme }) => theme.colors.primary};
   border-radius: 6px;
   border-width: 0.5px;
   border-color: white;
   padding: 10px;
   margin-bottom: 20px;
`;

export const TittleText = styled.Text`
   padding: 40px;
   padding-bottom: 10px;
   font-size: 16px;
   font-weight: normal;
   color: ${({ theme }) => theme.colors.text_primary};
   font-family: monospace;
`;

export const HeaderText = styled.View`
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
`;

export const PublicText = styled.Text`
   font-size: 11px;
   font-weight: normal;
   color: ${({ theme }) => theme.colors.text_primary};
   font-family: monospace;
   border-width: 0.5px;
   border-radius: 10px;
   border-color: ${({ theme }) => theme.colors.text_primary};
   padding: 2px;
   padding-right: 4px;
   padding-left: 4px;
`;

export const NameText = styled.Text`
   font-size: 14px;
   font-weight: normal;
   color: ${({ theme }) => theme.colors.blue_text};
   font-family: monospace;
`;

export const DescriptionText = styled.Text`
   margin-top: 6px;
   font-size: 12px;
   font-weight: normal;
   color: ${({ theme }) => theme.colors.text_secondary};
   font-family: monospace;
`;

export const DataRepoContainer = styled.View`
   flex-direction: row;
   align-items: center;
   margin-top: 10px;
   justify-content: space-between;
`;

export const TechContainer = styled.View`
   flex-direction: row;
   align-items: center;
`;

export const CircleColorTech = styled.View`
   width: 14px;
   height: 14px;
   margin-top: 6px;
   background-color: #b07219;
   border-radius: 7px;
`;

export const TechText = styled.Text`
   margin-left: 8px;
   margin-top: 6px;
   font-size: 14px;
   font-weight: normal;
   color: ${({ theme }) => theme.colors.text_secondary};
   font-family: monospace;
`;

export const CreateAtContainer = styled.View`
   flex-direction: row;
`;

export const CreateAtText = styled.Text`
   margin-left: 18px;
   margin-top: 6px;
   font-size: 12px;
   font-weight: normal;
   color: ${({ theme }) => theme.colors.text_primary};
   font-family: monospace;
`;

export const DataCreateAtText = styled.Text`
   margin-top: 6px;
   font-size: 12px;
   font-weight: normal;
   color: ${({ theme }) => theme.colors.text_secondary};
   font-family: monospace;
`;

export const LastCommitContainer = styled.View`
   flex-direction: row;
   justify-content: flex-end;
`;

export const LastCommitText = styled.Text`
   margin-left: 18px;
   margin-top: 6px;
   font-size: 12px;
   font-weight: normal;
   color: ${({ theme }) => theme.colors.text_primary};
   font-family: monospace;
`;

export const DataLastCommitText = styled.Text`
   margin-top: 6px;
   font-size: 12px;
   font-weight: normal;
   color: ${({ theme }) => theme.colors.text_secondary};
   font-family: monospace;
`;

export const EmptyText = styled.Text`
   padding-bottom: 10px;
   font-size: 16px;
   font-weight: normal;
   color: ${({ theme }) => theme.colors.text_primary};
   font-family: monospace;
`;

export const StyledIconEmpty = styled(Icon)`
   color: ${({ theme }) => theme.colors.text_secondary};
   font-size: 18px;
   margin-left: 10px;
`;

export const EmptyContainer = styled.View`
   flex-direction: row;
   padding: 40px;
   justify-content: center;
`;
