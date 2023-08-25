import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/SignIn';
import './Tab1.css';

const SignInTab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          {/* <IonTitle>AVAD Logistics</IonTitle> */}
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader>
          <IonToolbar>
            <IonTitle size="large">Sign in</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Sign in" />
      </IonContent>
    </IonPage>
  );
};

export default SignInTab;
