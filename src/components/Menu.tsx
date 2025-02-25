import React, { useState, useRef } from 'react';
import classNames from 'classnames';
import { useOnClickOutside } from 'hooks/clickOutside';


interface IProps {
}

export const Menu = (props: IProps) => {
    const {} = props;
    const ref = useRef<HTMLDivElement>(null);

    const [expanded, setExpanded] = useState<boolean>(false);

    useOnClickOutside(ref, () => setExpanded(false));


    return (
        <>
            <img src="/img/burger.svg" onClick={() => setExpanded(prev => !prev)} className="burger" alt="burger" />

            <div className={classNames('menu', expanded && 'expanded')} ref={ref}>
                <img src="/img/close.svg" onClick={() => setExpanded(false)} className="close" alt="close" />
                <a href="#">Home</a>
                <a href="#">Products</a>
                <a href="#"><img src="/img/cart.svg" alt="cart" /></a>
            </div>
        </>
    );
};
