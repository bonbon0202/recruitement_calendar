import { cn } from 'utils/styles';
import { JobPosting } from '../CalendarLayout/types';
import css from './Posting.module.scss';

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

const TYPE_TO_STRING = {
  start: '시',
  end: '끝'
}
