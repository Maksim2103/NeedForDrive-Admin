import BodyContent from './BodyContent/BodyContent';
import FooterContent from './FooterContent/FooterContent';
import HeaderContent from './HeaderContent/HeaderContent';

import styles from './content.module.scss';

const Content = () => {
  return (
    <div className={styles.contentWrapper}>
      <HeaderContent />
      <BodyContent />
      <FooterContent />
    </div>
  );
};

export default Content;
