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

const BadMemories: React.FC = () => {
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
                    <IonTitle>Bad Memories</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <h2>Bad Memories</h2>
                {!isPlatform('ios') &&
                <IonFab vertical="bottom" horizontal="end"  slot="fixed">
                    <IonFabButton routerLink="/new-memory">
                        <IonIcon icon={add}/>
                    </IonFabButton>
                </IonFab>
                }
            </IonContent>
        </IonPage>
    )
}

export default BadMemories;
