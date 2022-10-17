import Image from '../../assets/new_loader.gif';

function Loader() {
  const styles = {
    width: '200px',
    height: '200px',
    margin: 'auto',
    display: 'block',
  };

  return <img src={Image} alt='Loading...' style={styles} />;
}

export default Loader;
