import { useContext, useEffect } from 'react';
import { cn } from 'utils/styles';
import { ModalContextStore } from 'store/ModalContext';
import { JobPosting } from 'types';
import { TYPE_TO_STRING } from 'data';
import css from './PostingItem.module.scss';

interface Props {
  posting: JobPosting;
  type: 'start' | 'end';
}

const Posting: React.FC<Props> = ({ posting, type }) => {
  const modalContext = useContext(ModalContextStore);

  // TODO: 수정하기
  const handleClickPosting = () => {
    modalContext?.setEmploymentInfo(posting);
    openModal();
  }

  const openModal = () => {
    modalContext?.setIsOpened(true);
  }

  return (
    <div
      key={posting.id}
      className={css.notice}
      onClick={handleClickPosting}
    >
      <span className={cn(css.badge, css[type])}>
        {TYPE_TO_STRING[type]}
      </span>
      <span className={css.companyName}>{posting.name}</span>
    </div>

  )
};

export default Posting;
