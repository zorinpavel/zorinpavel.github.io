import React from 'react';
import { Header } from 'components/Header';
import { Banner } from 'components/Banner';
import { Offers } from 'components/Offers';
import { Footer } from 'components/Footer';


interface IProps {
}

export const Layout = (props: IProps) => {
    const {} = props;

    return (
        <div className="layout">
            <Header />
            <Banner />
            <Offers />

            <div className="bottom">
                <h3 className="bottom__title">Embark on a space journey</h3>

                <p className="bottom__content">
                    Travelling into space is one of the most exciting and unforgettable adventures that can change your
                    life forever.
                    And if you have ever dreamed of exploring stars, planets and galaxies, then our company is ready to
                    help you realize this dream.
                    We offer a unique experience that will allow you to go on a space journey and see all the secrets of
                    the universe.
                    We guarantee that every moment in space will be filled with incredible impressions, excitement and
                    new discoveries.
                    Our team of professionals takes care of your safety and comfort so that you can fully enjoy your
                    adventure in space.
                    We offer various options for space excursions.
                </p>

                <input type="checkbox" className="read-more-toggle" id="read-more-toggle" />
                <p className="hidden-text">
                    We offer a unique experience that will allow you to go on a space journey and see all the
                    secrets of
                    the universe.
                    We guarantee that every moment in space will be filled with incredible impressions, excitement
                    and
                    new discoveries.
                    Our team of professionals takes care of your safety and comfort so that you can fully enjoy your
                    adventure in space.
                    We offer various options for space excursions.
                </p>
                <label htmlFor="read-more-toggle" className="bottom__link">Read more</label>
            </div>

            <Footer />
        </div>
    );
};
