import { ChangeEvent, FormEvent } from 'react';
import styles from './Input.module.css';

interface InputProps {
  value: string;
  onChange: (text: string) => void;
}

export function Input({ value, onChange }: InputProps) {
  return (
    <input
      type='text'
      placeholder='Adicione uma nova tarefa'
      onChange={({ target }) => onChange(target.value)}
      value={value}
      className={styles.input}
    />
  );
}
