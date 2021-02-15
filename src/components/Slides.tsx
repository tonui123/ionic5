import React from 'react';
import { IonSlides, IonSlide, IonContent, IonImg } from '@ionic/react';
import { slides } from '../data'

const slideOpts = {
    initialSlide: 1,
    speed: 400
};

export const Slides: React.FC = () => (
    <IonContent>
        <IonSlides pager={true} options={slideOpts}>
            {slides.map((images, i) => (
                <IonSlide>
                    <IonImg src={images.src} />
                    <h1>{images.text}</h1>
                </IonSlide>
            ))}
        </IonSlides>
    </IonContent>
);
