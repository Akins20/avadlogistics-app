import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab3.css';
import ShipHeader from '../components/ShipHeader';
import ShipCards from '../components/ShipCards';

const ShipTab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Ship</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ShipHeader name='Ship'/>
        <ShipCards name='ShipCards'/>
      </IonContent>
    </IonPage>
  );
};

export default ShipTab;
