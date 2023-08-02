import Link from 'next/link';
import styles from './index.module.css';

export const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<nav>
				<Link href="/">Home</Link> | <Link href="/test">Test</Link>
			</nav>
		</header>
	);
};
