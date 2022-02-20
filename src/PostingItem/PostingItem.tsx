import { cn } from 'utils/styles';
import { JobPosting } from 'types';
import { TYPE_TO_STRING } from 'data';
import css from './PostingItem.module.scss';

interface Props {
  posting: JobPosting;
  type: 'start' | 'end';
}

const Posting: React.FC<Props> = ({ posting, type }) => {
  return (
    <div key={posting.id} className={css.notice}>
      <span className={cn(css.badge, css[type])}>
        {TYPE_TO_STRING[type]}
      </span>
      <span className={css.companyName}>{posting.name}</span>
    </div>

  )
};

export default Posting;
