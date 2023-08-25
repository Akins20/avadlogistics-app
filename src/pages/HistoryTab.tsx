import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import HistoryHeader from '../components/HistoryHeader';
import CurrentShipping from '../components/CurrentShipping';
import HistoryBody from '../components/HistoryBody';

const HistoryTab: React.FC = () => {
  return (
    <IonPage>
     <IonHeader>
        <IonToolbar className='bg-white'>
          <IonTitle className='text-center'>History</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar className='bg-white'>
            <IonTitle size="large">History</IonTitle>
          </IonToolbar>
        </IonHeader>
        <HistoryHeader name='History' />
        <CurrentShipping name='Shipping' />
        <HistoryBody name='Body' />
      </IonContent>
    </IonPage>
  );
};

export default HistoryTab;
