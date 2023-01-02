import React from 'react'

const Tag = ({value}: {value: string}) => {
    return <div className="tag">
        {value.toUpperCase()}
    </div>
};

export default Tag;
