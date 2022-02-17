import { useEntries } from '../../context/PlannerContext';
import styles from './Header.css';

export default function Header() {
  const { entries } = useEntries();
  return (
    <header className={styles.header}>
      <h2>My Planner</h2>
      {entries.length > 1 ? (
        <span>{entries.length} items left</span>
      ) : (
        <span>{entries.length} item left</span>
      )}
    </header>
  );
}
