import styled from 'styled-components/native';

export const ButtonContainerHighlight = styled.TouchableHighlight<{styling: string}>`
  align-self: stretch;
  align-items: center;
  ${props => (props.styling ? props.styling : null)};
`;

export const ButtonContainerOpacity = styled.TouchableOpacity<{ styling: string }>`
  align-self: stretch;
  align-items: center;
  ${props => (props.styling ? props.styling : null)};
`;

export const ButtonContainerAndroidInnerView = styled.View<{ styling: string }>`
  border-radius: 2px;
  background-color: #4276ba;
  height: 50px;
  align-self: stretch;
  align-items: center;
  ${props => (props.styling ? props.styling : null)};
`;

export const ButtonContainerAndroidOuterView = styled.View<{ styling: string }>`
  border-radius: 2px;
  height: 50px;
  ${props => (props.styling ? props.styling : null)};
`;

export const ButtonText = styled.Text<{styling: string}>`
  font-size: 16;
  font-weight: 500;
  line-height: 22ß;
  ${props => (props.styling ? props.styling : null)};
`;
