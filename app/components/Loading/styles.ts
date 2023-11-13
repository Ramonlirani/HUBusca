import styled from "styled-components/native";

export const Container = styled.View`
   flex: 1;
   justify-content: center;
   align-items: center;
`;

export const LoadingStyle = styled.ActivityIndicator`
   size: "large";
   color: ${({ theme }) => theme.colors.secondary};
`;
