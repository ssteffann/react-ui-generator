import React from 'react';

type Props = {
    value: string,
    type?: 'email' | 'phone'
}

const Link = ({ value, type}: Props) => {
    let link = value;

    if (type === 'email') {
        link = `mailto:${value}`;
    } else if (type === 'phone') {
        link = `tel:${value}`;
    }

    return (
        <a href={link} target='_blank' rel="noopener noreferrer">
            {value}
        </a>
    );
};

Link.displayName = 'Link';

export default Link;
