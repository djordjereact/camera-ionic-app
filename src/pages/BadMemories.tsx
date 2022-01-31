import React, {useContext} from 'react';
import {
    IonButton,
    IonButtons, IonCol,
    IonContent, IonFab, IonFabButton,
    IonHeader,
    IonIcon,
    IonPage, IonRow,
    IonTitle,
    IonToolbar,
    isPlatform
} from "@ionic/react";
import {add} from "ionicons/icons";
import MemoriesContext from "../data/memories-context";
import MemoriesList from "../components/MemoriesList";

const BadMemories: React.FC = () => {
    const memoriesCtx = useContext(MemoriesContext);

    const badMemories = memoriesCtx.memories.filter(memory => memory.type === 'bad');
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
                {badMemories.length === 0 &&
                <IonRow>
                    <IonCol className="ion-text-center">
                        <h2>No bad memories found.</h2>
                    </IonCol>
                </IonRow>
                }
                <MemoriesList items={badMemories} />
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
