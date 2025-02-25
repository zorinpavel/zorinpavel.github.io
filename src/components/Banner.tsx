import React from 'react';


interface IProps {
}

export const Banner = (props: IProps) => {
    const {} = props;

    return (
        <div className="banner">
            <div className="banner__content">
                <h1>Discover the vast expanses of <span>space</span></h1>
                <div>Where the possibilities are <span>endless</span>!</div>
                <a role="button" href="#">Learn more</a>
            </div>
        </div>
    );
};
