import React from 'react';
import {
    IonBackButton,
    IonButton,
    IonButtons,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonIcon,
    IonInput,
    IonItem,
    IonLabel,
    IonPage,
    IonRow,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import {camera} from "ionicons/icons";
import './NewMemory.css';
import {Camera, CameraResultType, CameraSource} from '@capacitor/camera';

const NewMemory: React.FC = () => {

    const takePhotoHandler = async () => {
            const photo = await Camera.getPhoto({
            resultType: CameraResultType.Uri,
            source: CameraSource.Camera,
            quality: 80,
            width: 500
        });
            console.log(photo)
    };

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
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating">Memory Title</IonLabel>
                                <IonInput type="text"></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-text-center">
                        <IonCol>
                            <div className="image-preview">
                                <h3>No photo chosen</h3>
                            </div>
                            <IonButton fill="clear" onClick={takePhotoHandler}>
                                <IonIcon icon={camera} slot="start"/>
                                <IonLabel>Take Photo</IonLabel>
                            </IonButton>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-margin-top">
                        <IonCol className="ion-text-center">
                            <IonButton>Add Memory</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}

export default NewMemory;
