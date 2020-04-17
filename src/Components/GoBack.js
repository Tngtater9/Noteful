import React from 'react'

function GoBack (props) {
    return(
        <button onClick={() => props.onGoBack()}>Go Back</button>
    )
}

export default GoBack