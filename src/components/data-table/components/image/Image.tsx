import React from 'react';

type Props = {
    value: string,
}

const Image = ({ value }: Props) => {
    return (
        <img src={value} alt="thumbnail" className="rounded img-thumbnail" />
    );
};

Image.displayName = 'Image';

export default Image;
