import { IonButton, IonCardTitle, IonCard, IonCardHeader, IonCardSubtitle, IonCheckbox, IonContent, IonHeader, IonIcon, IonInput, IonRouterLink, IonText, IonRow, IonCol } from '@ionic/react';
import './home.css';
import { notifications, notificationsCircle, notificationsOutline } from 'ionicons/icons';

interface ContainerProps {
    name: string;
}

const HomeHeader: React.FC<ContainerProps> = () => {
    return (

        <div className=''>

            <IonCard className='homeheader'>
                <IonRow>
                    <IonCol>
                        <IonCardTitle>Welcome Back,</IonCardTitle>
                        <IonCardTitle>Oseka</IonCardTitle>
                    </IonCol>
                    <IonCol className='headericon'>
                        <IonIcon aria-hidden="true" icon={notificationsOutline}></IonIcon>

                    </IonCol>
                </IonRow>
                <div className='header-search'>
                    <IonInput type='search' className='header-input' placeholder='Enter tracking ID'></IonInput>
                    <IonButton className='header-search-button'>Search</IonButton>
                </div>
            </IonCard>
        </div>
    );
};

export default HomeHeader;
