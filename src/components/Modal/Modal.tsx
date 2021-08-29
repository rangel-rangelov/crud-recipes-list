import { MouseEventHandler, ReactNode, useEffect } from 'react';
import styled from 'styled-components';

import { ReactComponent as CloseIcon } from 'assets/icons/close.svg';
import { colors, others } from 'styles/variables';

interface Props {
  children: ReactNode;
  className?: string;
  onClose: MouseEventHandler;
  heading: string;
  isOpen: boolean;
}

const Modal = ({
  children,
  onClose,
  heading,
  isOpen,
}: Props): JSX.Element | null => {
  useEffect(() => {
    if (isOpen) document.body.classList.add('modal-open');
    else document.body.classList.remove('modal-open');
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <ModalWrapper>
      <StyledModal>
        <ModalHeader>
          <ModalClose type="button" onClick={onClose}>
            <CloseIcon />
            Close
            {/* Text for accessibility */}
          </ModalClose>
          <ModalTitle>{heading}</ModalTitle>
        </ModalHeader>
        <ModalContent>
          {children}
        </ModalContent>
      </StyledModal>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: stretch;
  padding: 80px 20px 0;
  background: ${colors.opacityBlack};
`;

const StyledModal = styled.div`
  position: relative;
  z-index: 4;
  overflow: auto;
  width: 100%;
  max-width: 600px;
  background: ${colors.lighterGrey};
  border-top-left-radius: ${others.borderRadiusBig};
  border-top-right-radius: ${others.borderRadiusBig};
`;

const ModalHeader = styled.div`
  padding: 32px 24px 16px;
  background: ${colors.white};
  border-bottom: 1px solid ${colors.lighterGrey};
`;

const ModalTitle = styled.h2`
  margin: 0 0 24px;
  font-size: 32px;
  line-height: 40px;
`;

const ModalContent = styled.div`
  padding: 16px 32px;
  background: ${colors.white};
`;

const ModalClose = styled.button`
  display: block;
  margin-bottom: 30px;
  padding: 0;
  background: none;
  border: none;
  font-size: 0;
  cursor: pointer;
`;

export default Modal;
