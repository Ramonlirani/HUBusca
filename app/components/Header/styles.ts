import styled from "styled-components/native";

export const Container = styled.View`
   width: 100%;
   padding-top: 30px;
   align-items: center;
   justify-content: center;
`;

export const Title = styled.Text`
   font-size: 32px;
   font-weight: bold;
   color: ${({ theme }) => theme.colors.white};
   font-family: monospace;
`;

export const SubTitle = styled.Text`
   font-size: 14px;
   font-weight: normal;
   color: ${({ theme }) => theme.colors.white};
   font-family: monospace;
`;
