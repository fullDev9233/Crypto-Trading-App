import { FC, useEffect } from 'react';
import styled from 'styled-components';
import Flex from '../Flex';

interface ModalProps {
  className?: string;
}

const Modal: FC<ModalProps> = ({ className = 'modal-body', children, ...props }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <Container className="modal">
      <ModalBody {...props} className={className}>
        {children}
      </ModalBody>
    </Container>
  );
};

export default Modal;

const Container = styled(Flex)`
  position: fixed;
  left: 0;
  top: 0;
  display: block;
  width: 100%;
  height: 100%;
  padding-left: 0px;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  background: ${({ theme }) => theme.colors.overlay};
  backdrop-filter: blur(4px);
  z-index: 1100;
`;

const ModalBody = styled(Flex)`
  flex-direction: column;
  width: calc(100% - 40px);
  max-width: fit-content;
  height: auto;
  margin: 60px auto;
  transition: transform 0.3s ease-out;
  transform: none;
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ theme }) => theme.shadows.shadow24};
  border-radius: 20px;

  ${({ theme }) => theme.mediaQueries.md} {
    width: 600px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    width: 670px;
  }
`;
