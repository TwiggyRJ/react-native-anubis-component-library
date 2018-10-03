import styled from 'styled-components/native';

export const Loader = styled.View`
  flex: 1;
`;

export const LoaderCenteredContent = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const AbsoluteFill = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const LoaderSplashScreenLayer = AbsoluteFill.extend<{ background: string }>`
  background-color: ${props => props.background ? props.background : '#4276ba'};
`;

export const LoaderWhiteLayer = AbsoluteFill.extend`
  background-color: #fff;
`;
