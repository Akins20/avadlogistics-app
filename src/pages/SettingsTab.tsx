import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import SettingsCard from '../components/SettingsCard';

const SettingsTab: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar className='bg-white'>
                    <IonTitle className='text-center'>Settings</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar className='bg-white'>
                        <IonTitle size="large">Settings</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <SettingsCard name='Settings' />
            </IonContent>
        </IonPage>
    );
};

export default SettingsTab;
