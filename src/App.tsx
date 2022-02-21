import { useContext } from 'react';
import { ModalContextStore } from 'store/ModalContext';
import Calendar from "./CalendarLayout";
import Modal from 'Modal';
import css from './App.module.scss';

const App = () => {
  const modalContext = useContext(ModalContextStore);

  return (
    <>
      <Calendar />
      {modalContext?.isOpened && <Modal />}
    </>
  );
}

export default App;
