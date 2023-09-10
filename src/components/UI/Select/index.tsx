import styles from './styles.module.scss';

interface SelectProps {
  label?: string;
  name: string;
  defaultValue: string;
  options: Array<string>;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Select = ({ label, name, defaultValue, options, onChange }: SelectProps) => {
  return (
    <div className={styles.wrapper}>
      {label && <span>{label}</span>}
      <select name={name} defaultValue={defaultValue} onChange={onChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
