import styled from "styled-components/native";

export const Container = styled.View`
   align-items: center;
   justify-items: center;
   max-height: 80%;
   background-color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.Text`
   font-size: 30px;
   text-align: center;
   color: ${({ theme }) => theme.colors.white};
   font-family: monospace;
`;

export const ContainerButtons = styled.View`
   height: 50px;
   flex-direction: row;
   justify-content: space-between;
   padding-top: 25px;
   padding-left: 40px;
   padding-right: 40px;
   align-items: center;
`;

export const EmptyContainer = styled.View`
   align-items: center;
   justify-content: center;
`;

export const EmptyText = styled.Text`
   font-size: 22px;
   text-align: center;
   color: ${({ theme }) => theme.colors.white};
   font-family: monospace;
`;
