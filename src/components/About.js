import React from "react";

function About(props) {
    const imageProvided = props.image
    return (
        <aside>
            { imageProvided ? 
            <img src={ props.image } alt="blog logo"></img> : <img src="https://via.placeholder.com/215" alt="blog logo"></img> }
            <p>{ props.about }</p>
        </aside>
    )
}

export default About