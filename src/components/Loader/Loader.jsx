import React from 'react';
import styles from './Loader.module.css'; // Estilos CSS para el loader

const Loader = () => {
  return (
    <div className={styles.loader}>
        <div className={`${styles.loaderCircle} ${styles.spin}`}>
          <img src='/images/logo.png' alt="Logo" className={styles.logo} />
        </div>
    </div>
  );
};

export default Loader;
