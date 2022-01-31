import React from 'react';
import {
    IonApp,
    IonRouterOutlet,
    setupIonicReact,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel
} from '@ionic/react';
import { IonReactRouter } from "@ionic/react-router";
import {Redirect, Route} from "react-router";
import GoodMemories from "./pages/GoodMemories";
import BadMemories from "./pages/BadMemories";
import NewMemory from "./pages/NewMemory";
import {happy, sad} from "ionicons/icons";
import MemoriesContextProvider from "./data/MemoriesContextProvider";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/theme.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
        <IonTabs>
            <MemoriesContextProvider>
                <IonRouterOutlet>
                    <Route path="/good-memories">
                        <GoodMemories />
                    </Route>
                    <Route path="/bad-memories">
                        <BadMemories />
                    </Route>
                    <Route path="/new-memory">
                        <NewMemory />
                    </Route>
                    <Redirect to="/good-memories" />
                </IonRouterOutlet>
            </MemoriesContextProvider>
            <IonTabBar slot="bottom">
                <IonTabButton href="/good-memories" tab="good">
                    <IonIcon icon={happy} />
                    <IonLabel>Good Memories</IonLabel>
                </IonTabButton>
                <IonTabButton href="/bad-memories" tab="bad">
                    <IonIcon icon={sad} />
                     <IonLabel>Bad Memories</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
