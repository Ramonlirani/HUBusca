import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Feather";

export const StyledIconBack = styled(Icon)`
   color: ${({ theme }) => theme.colors.text_primary};
   font-size: 18px;
`;
