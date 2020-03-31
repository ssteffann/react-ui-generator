import React from 'react';

type Props = {
    value: boolean,
}

const Tick = ({ value }: Props) => {
    return (
        <div>
            {value
                ? <i className='fa fa-2x fa-check-circle text-success'/>
                : <i className='fa fa-2x fa-minus-circle text-secondary'/>
            }
        </div>
    );
};

Tick.displayName = 'Tick';

export default Tick;
