import React from 'react'
import Link from "./link/Link";
import Image from "./image/Image";
import Tick from "./tick/Tick";
import ReadMore from "./read-more/ReadMore";

type Props = {
    value: string
}

const Components: any = {
    link: (props: Props) => <Link {...props}  />,
    email: (props: Props) => <Link {...props} type={'email'}/>,
    phone: (props: Props) => <Link {...props} type={'phone'}/>,
    image: Image,
    tick: Tick,
    readMore: ReadMore
};

const DefaultComp = ({value}: Props) => (<div>{value}</div>);

export default (element: string) => {
    return Components[element] || DefaultComp;
}
