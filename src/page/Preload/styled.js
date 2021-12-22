import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #434343;
    justify-content:center;
    align-items:center;
`;

export const Loading = styled.ActivityIndicator.attrs({
    size: 40,
    color:'#fff'
})` `;

