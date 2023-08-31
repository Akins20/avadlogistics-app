import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import SupportBody from '../components/SupportBody';


const SupportTab: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar className='bg-white'>
                    <IonTitle className='text-center'>Support</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar className='bg-white'>
                        <IonTitle size="large">Support</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <SupportBody name='supportbody' />
            </IonContent>
        </IonPage>
    );
};

export default SupportTab;
