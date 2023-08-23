import styles from './page.module.css';
import AbcIcon from '@mui/icons-material/Abc';

export default function Home() {
  return (
    <main className={styles.main}>
      <AbcIcon sx={{ fontSize: 200 }} />
      <h1 className="text-3xl font-bold underline">hello In-cheol</h1>
    </main>
  );
}
