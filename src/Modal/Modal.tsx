import { useContext, useRef } from 'react';
import { ModalContextStore } from 'store/ModalContext';
import { MdOutlineClose } from 'react-icons/md';
import { useOnClickOutside } from 'utils/hook';
import css from './Modal.module.scss';

const Modal = () => {
  const modalContext = useContext(ModalContextStore);
  const modalRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(modalRef, () => closeModal());

  const closeModal = () => modalContext?.setIsOpened(false);

  return (
    <div className={css.dimmedBackground}>
      <section ref={modalRef} className={css.container}>
        <header className={css.recruitmentInfo}>
          <img src={modalContext?.employmentInfo?.image} alt='companyLogo' />
          <div>
            <p className={css.companyName}>{modalContext?.employmentInfo?.name}</p>
            <p className={css.period}>기간작성하기</p>
          </div>
          <MdOutlineClose className={css.closeIcon} onClick={closeModal} />
        </header>
        <div>
          {modalContext?.employmentInfo?.content}
        </div>
      </section>
    </div >
  )
}

export default Modal;