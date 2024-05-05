import Link from 'next/link';
import styles from './navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbar_links}>
                <li>
                    <Link href="/" className={styles.navbar_link}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/servers" className={styles.navbar_link}>
                        Servers
                    </Link>
                </li>
            </ul>
        </nav>
    );
};