import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/UI/Button';

import styles from './styles.module.scss';

export const NotFound = () => {
  const navigate = useNavigate();

  const onButtonClick = () => {
    navigate('/');
  };

  return (
    <div className={styles.wrapper}>
      <h2>Страница не&nbsp;найдена</h2>
      <p>Возможно, она была перемещена, или вы&nbsp;просто неверно указали адрес страницы.</p>
      <img src='/page-not-found.svg' alt='Страница не найдена' />
      <Button className={styles.btn} onClick={onButtonClick}>
        Back to home
      </Button>
    </div>
  );
};
