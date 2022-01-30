import React from 'react';
import {
    IonButton,
    IonButtons,
    IonContent, IonFab, IonFabButton,
    IonHeader,
    IonIcon,
    IonPage,
    IonTitle,
    IonToolbar,
    isPlatform
} from "@ionic/react";
import {add} from "ionicons/icons";

const GoodMemories: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    {isPlatform('ios') &&
                    <IonButtons slot="end">
                        <IonButton routerLink="/new-memory">
                            <IonIcon slot="icon-only" icon={add}/>
                        </IonButton>
                    </IonButtons>}
                    <IonTitle>Good Memories</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <h2>Good Memories</h2>
                {!isPlatform('ios') &&
                    <IonFab vertical="bottom" horizontal="end">
                        <IonFabButton routerLink="/new-memory">
                            <IonIcon icon={add}/>
                        </IonFabButton>
                    </IonFab>
                }
            </IonContent>
        </IonPage>
    )
}

export default GoodMemories;
