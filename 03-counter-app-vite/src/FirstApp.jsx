
import PropTypes from 'prop-types'

export const FirstApp = ({title, subTitle}) => {

    // console.log(props)
 

    return (
        <>
         <h1>{ title }</h1>
           {/* <code>{ JSON.stringify( newMessage ) }</code>  */}
            <p> { subTitle }</p>
        </>
    )
} 

FirstApp.prototype = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
}


