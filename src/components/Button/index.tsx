import { PlusCircle } from 'phosphor-react';
import styles from './Button.module.css';

interface InputProps {
  onClick: () => void;
}

export function Button({ onClick }: InputProps) {
  return (
    <button type='button' onClick={() => onClick()} className={styles.button}>
      Criar
      <PlusCircle size={18} color='#fff' />
    </button>
  );
}
