import React from 'react';


interface IProps {
}

export const Offers = (props: IProps) => {
    const {} = props;

    return (
        <div className="offers">
            <h2 className="title">Offers</h2>

            <div className="offers__list">
                <div className="list__element list__element--span2">
                    <h3 className="element__title">Move the borders of reality!</h3>
                    <p className="element__content">Go on a space adventure - it's possible with us!</p>
                    <a href="#" role="button" className="outlined">Learn more</a>
                </div>
                <div className="list__element">
                    <h3 className="element__title">Move the borders of reality!</h3>
                    <p className="element__content">Go on a space adventure - it's possible with us!</p>
                    <a href="#" role="button" className="outlined">Learn more</a>
                </div>
                <div className="list__element">
                    <h3 className="element__title">Move the borders of reality!</h3>
                    <p className="element__content">Go on a space adventure - it's possible with us!</p>
                    <a href="#" role="button" className="outlined">Learn more</a>
                </div>
                <div className="list__element list__element--span2">
                    <h3 className="element__title">Move the borders of reality!</h3>
                    <p className="element__content">Go on a space adventure - it's possible with us!</p>
                    <a href="#" role="button" className="outlined">Learn more</a>
                </div>
            </div>
        </div>
    );
};
