import React from 'react';

const Icon = (props) => {
    const { iconClass, iconActionHandler, id } = props;
    return (
        <div className="icon-container">
            <i className={iconClass} onClick={!iconActionHandler ? undefined : () => iconActionHandler(id)} />
        </div>
    );
}

export default Icon;
