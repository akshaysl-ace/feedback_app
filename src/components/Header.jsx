import PropTypes from 'prop-types';

const Header = ({name}) => {

  const styles = {
    backgroundColor: 'rgba(0,0,0,0.4)',
    color: '#ff6a95'
  };

  return (
    <header>
        <div className="container" style={styles}>
            <h2>{name}</h2>
        </div>
    </header>
  )
}

Header.defaultProps = {
    name: "Feedback"
}

Header.propTypes = {
    name: PropTypes.string,
}

export default Header;