import styled from 'styled-components/native';

export const Loader = styled.View`
  flex: 1;
`;

export const LoaderCenteredContent = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LoaderSplashScreenLayer = styled.View<{ background: string }>`
  background-color: ${props => props.styling ? props.background : '#4276ba'};
`;

export const LoaderWhiteLayer = styled.View`
  background-color: #ffffff;
`;
