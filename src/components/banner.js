import Image from 'next/image';
import styles from './banner.module.scss';


const Banner = ({headerText}) => {
    return (
      <header className={`row mb-4 mt-3 ${styles.contain}`}>
        <div className="col-3">
            <img src="/logo.png" alt="Terranova logo" className="img-logo" />
        </div>
        <div className={`${styles.subtitle} theme-text-color col-9 d-flex align-items-center`}>
            <h4 className="align-middle">{headerText}</h4>
        </div>
      </header>
    );
  };
  
  export default Banner;