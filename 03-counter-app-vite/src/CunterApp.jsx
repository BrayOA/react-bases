import PropTypes from 'prop-types'


export const CunterApp = ({value}) => {
  return (
    <>
    <h1>CunterApp</h1>
    <h2>{value}</h2>
    </>
  )
}

CunterApp.prototype = {
    value: PropTypes.number
}
