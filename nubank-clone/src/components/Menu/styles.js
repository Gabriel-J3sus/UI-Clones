import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
    contentContainerStyle: { alignItems: 'center' },
})`
    margin: 0 30px;
    overflow: hidden;
`;

export const Code = styled.View`
    background: #FFF;
    padding: 10px;
`;