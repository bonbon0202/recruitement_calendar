import { createContext, useState, Dispatch, SetStateAction } from 'react';
import { JobPosting } from 'types';

export const ModalContextStore = createContext<ModalContext | null>(null);

interface ModalContext {
  isOpened: boolean;
  setIsOpened: Dispatch<SetStateAction<boolean>>;
  employmentInfo: JobPosting | null;
  setEmploymentInfo: Dispatch<SetStateAction<JobPosting | null>>;
}

const ModalContext: React.FC = ({ children }) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [employmentInfo, setEmploymentInfo] = useState<JobPosting | null>(null);

  return (
    <ModalContextStore.Provider
      value={{
        isOpened,
        setIsOpened,
        employmentInfo,
        setEmploymentInfo
      }}>
      {children}
    </ModalContextStore.Provider>
  )
}

export default ModalContext;