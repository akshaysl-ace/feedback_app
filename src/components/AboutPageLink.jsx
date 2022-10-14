import { FaQuestion } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function AboutPageLink() {
  const styles = {
    marginTop: '30px',
  };

  return (
    <div className='about-link'>
      <Link to='/about'>
        <FaQuestion size={30} style={styles} />
      </Link>
    </div>
  );
}

export default AboutPageLink;
