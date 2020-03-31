import React, {useState} from 'react';

type Props = {
    value: string,
    length?: number
}

const ReadMore = ({value, length}: Props) => {
    const [isFull, toggle] = useState(false);
    const defaultLength = length || 50;
    const valueLength = value.length;

    if (defaultLength > valueLength) {
        return (<div>{value}</div>)
    }

    return (
        <div>
            {isFull ? value : value.slice(0, defaultLength)}

            <div className='text-right'>
                <a onClick={() => toggle(!isFull)} className='btn btn-link'>
                    {isFull ? 'See less' : 'See more'}
                </a>
            </div>
        </div>
    );
};

ReadMore.displayName = 'ReadMore';

export default ReadMore;
