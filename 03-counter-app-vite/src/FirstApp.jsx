import PropTypes from 'prop-types';

export const FirstApp = ({ title, subTitle, name }) => {

  // console.log(props);
  
  return (
    <>
      <h1 data-testid="test-title"> { title } </h1>
      {/* <code>{ JSON.stringify( newMessage ) }</code> */}
      <h1>{ subTitle }</h1>
      <p>{ subTitle }</p>
      <p>{ name }</p>
    </>
  )
}


FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
}

FirstApp.defaultProps = {
  name: 'Brayan Orcon',
  subTitle: 'No hay subtítulo',
  // title: 'No hay título',
}


