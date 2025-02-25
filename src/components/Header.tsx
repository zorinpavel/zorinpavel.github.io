import React from 'react';
import { Menu } from 'components/Menu';


interface IProps {
}

export const Header = (props: IProps) => {
    const {} = props;

    return (
        <header>
            <img src="/img/logo.svg" className="logo" alt="logo" />

            <Menu />
        </header>
    );
};
