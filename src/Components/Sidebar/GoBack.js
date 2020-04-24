import React from 'react'

function GoBack (props) {
    return(
        <button className="backBtn" onClick={() => props.onGoBack()}>Go Back</button>
    )
}

export default GoBack