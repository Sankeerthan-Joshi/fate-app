import React from 'react';

function Action(props) {
    return (
        <div>
            <button
                onClick={props.handleAction}
                disabled={!props.hasOptions} className="action">What should you do?</button>
        </div>
    );
}

export default Action;