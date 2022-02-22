import { useContext, useRef } from 'react';
import parse from 'html-react-parser';
import { MdOutlineClose } from 'react-icons/md';
import { ModalContextStore } from 'store/ModalContext';
import { useOnClickOutside } from 'utils/hook';
import { convertDateToFormat, calculateDiffFromToday } from 'utils/date';
import { DATE_CONVERT_FORM } from 'data';
import css from './Modal.module.scss';

const Modal = () => {
  const modalContext = useContext(ModalContextStore);
  const modalRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(modalRef, () => closeModal());

  const closeModal = () => modalContext?.setIsOpened(false);

  const { image, name, start_time, end_time, content } = modalContext?.employmentInfo || {};
  const startDate = convertDateToFormat(start_time!, DATE_CONVERT_FORM.fullDate);
  const endDate = convertDateToFormat(end_time!, DATE_CONVERT_FORM.fullDate);

  return (
    <div className={css.dimmedBackground}>
      <section ref={modalRef} className={css.container}>
        <header className={css.recruitmentInfo}>
          <img src={image} alt='company logo' />
          <div className={css.nameDateWrapper}>
            <p className={css.companyName}>{name}</p>
            <span className={css.period}>{`${startDate} ~ ${endDate}`}</span>
            <span className={css.diffDate}>{`(${calculateDiffFromToday(endDate)})`}</span>
          </div>
          <MdOutlineClose className={css.closeIcon} onClick={closeModal} />
        </header>
        <div className={css.contentWrapper}>
          {parse(content!)}
        </div>
      </section>
    </div>
  )
}

export default Modal;