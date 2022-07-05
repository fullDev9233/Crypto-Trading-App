import { FC, useCallback } from 'react';
import styled from 'styled-components';
import Flex from '../Flex';
import Text from '../Text';
import { OptionProps } from './types';

const Container = styled.div<{ scrollHeight?: number; hoverColor?: string }>`
  flex-direction: column;
  position: absolute;
  top: 65px;
  left: 0;
  width: 100%;
  height: ${({ scrollHeight }) => `${scrollHeight}px` || 'auto'};
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 6px;
  z-index: 100;
  overflow-x: hidden;
  overflow-y: auto;

  .select-element {
    &:hover {
      background: ${({ hoverColor }) => hoverColor || 'transparent'};
    }
  }
`;

const Option = styled(Flex)`
  width: 100%;
  flex-direction: column;
  cursor: pointer;
`;

const StyledText = styled(Text)`
  padding: 12px 26px;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors.textPrimary};
`;

interface DropdownProps {
  options: OptionProps[];
  scrollHeight?: number;
  isDivider?: boolean;
  hoverColor?: string;
  closeHandler: (idx: number) => void;
}

const Dropdown: FC<DropdownProps> = ({
  options,
  isDivider,
  scrollHeight,
  hoverColor,
  closeHandler,
}) => {
  const optionHandler = useCallback(
    (idx: number) => {
      closeHandler(idx);
    },
    [closeHandler],
  );

  return (
    <Container scrollHeight={scrollHeight} hoverColor={hoverColor} className="select-dropdown">
      {options.map((option, id) => (
        <Option key={id} onClick={() => optionHandler(id)} className="select-element">
          <StyledText font="captionRegular" color="tdPrimary">
            {option.label}
          </StyledText>
          {isDivider && id !== options.length - 1 && <Divider />}
        </Option>
      ))}
    </Container>
  );
};

export default Dropdown;
