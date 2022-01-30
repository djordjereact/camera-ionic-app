import React from 'react';
import {IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonBackButton} from "@ionic/react";

const NewMemory: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/good-memories" />
                    </IonButtons>
                    <IonTitle>Add New Memory</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <h2>Add New Memory</h2>
            </IonContent>
        </IonPage>
    )
}

export default NewMemory;
