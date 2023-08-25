import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab3.css';
import TermsConditions from '../components/TermsConditions';
import HomeHeader from '../components/HomeHeader';
import CurrentShipping from '../components/CurrentShipping';
import QuickLinks from '../components/HomeQuickLinks';
import Wallet from '../components/Wallet';

const HomeTab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent fullscreen>
        <HomeHeader name="Home" /><br/>
        <Wallet/>
        <CurrentShipping name='Shipping Info'/>
        <QuickLinks name='Quick Links'/>
      </IonContent>
    </IonPage>
  );
};

export default HomeTab;
