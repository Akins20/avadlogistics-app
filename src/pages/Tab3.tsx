import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/SignIn';
import './Tab3.css';
import TermsConditions from '../components/TermsConditions';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Terms & Conditions</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Terms & Conditions</IonTitle>
          </IonToolbar>
        </IonHeader>
        <TermsConditions name="Terms & Conditions" />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
