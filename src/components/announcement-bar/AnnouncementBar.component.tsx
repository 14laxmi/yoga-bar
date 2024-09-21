import styles from './AnnouncementBar.module.scss';

const AnnouncementBar = () => {
    return (
        <div className={styles.utilityBar}>
            <div className={styles.announcementBar}>
                Enjoy ₹100 OFF on orders over ₹499, plus a FREE surprise gift on orders over ₹749.
            </div>
        </div>
    )
}

export default AnnouncementBar;