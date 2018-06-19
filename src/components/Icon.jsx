import React from 'react';

const Icon = (props) => {
    const { iconClass, iconActionHandler, id } = props;
    return (
        <div className="icon-container">
            {id ?
                <i className={iconClass} onClick={!iconActionHandler ? undefined : () => iconActionHandler(id)} />
                :
                <i className={iconClass} onClick={!iconActionHandler ? undefined : iconActionHandler} />
            }
        </div>
    );
}

export default Icon;
