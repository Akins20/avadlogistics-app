
import { IonApp, IonIcon, IonLabel, IonTab, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import './ship.css';
import { TabContent, TabPane, Tabs } from 'react-bootstrap';
import { useState } from 'react';
import { home, cartSharp } from 'ionicons/icons';
import CurrentShipping from './CurrentShipping';

interface ContainerProps {
    name: string;
}

const HistoryHeader: React.FC<ContainerProps> = () => {
    const [key, setKey] = useState("orders")
    return (

        // <Tabs id='fill-tab-example' activeKey={key} onSelect={(k) => setKey(k)} fill>
        //     <TabContent eventKey="orders" title='Orders Tab'>
        //         <p>Hello World!</p>
        //     </TabContent>
        //     <TabContent eventKey="transactions" title='Transactions Tab'>
        //         <p>Hi there!</p>
        //     </TabContent>
        // </Tabs>
        // <IonApp>
        //     <IonTabs>
        //         <IonTabBar slot='top'>
        //             <IonTabButton tab="home" href="/home">
        //                 <IonIcon aria-hidden="true" icon={home} />
        //                 <IonLabel>Home</IonLabel>
        //             </IonTabButton>
        //             <IonTabButton tab="ship" href="/ship">
        //                 <IonIcon aria-hidden="true" icon={cartSharp} />
        //                 <IonLabel>Ship</IonLabel>
        //             </IonTabButton>
        //         </IonTabBar>
        //     </IonTabs>
        // </IonApp>
        <div className=''>
            
        </div>

    );
};

export default HistoryHeader;
