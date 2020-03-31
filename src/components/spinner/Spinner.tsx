import React from 'react';

type Props = {
    className?: string,
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'info',
    size?: number,
    style?: object
}

const Spinner = ({className, color, size, style}: Props) => {
    const defaultSize  = `${size || 2}rem`;
    return (
        <div
            className={`spinner-border ${className} text-${color || 'primary'}`}
            style={{width: defaultSize, height: defaultSize, ...style}}
            role="status">
            <span className="sr-only">Loading...</span>
        </div>);
};

Spinner.displayName = 'Spinner';

export default Spinner;
