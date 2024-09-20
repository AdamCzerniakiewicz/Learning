import React from 'react';

const CourseInfo = ({id, onClickHandler, title}) => {
    
    const handlerOnClick = () => onClickHandler({
        id,
        type: 'REMOVE'
    })

    return ( 
        <div>
            <p>{title}</p>
            <button onClick={handlerOnClick}>Usuń kurs</button>
        </div>
     );
}
 
export default CourseInfo;