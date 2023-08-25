import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCheckbox, IonCol, IonContent, IonHeader, IonIcon, IonImg, IonInput, IonRouterLink, IonRow, IonText } from '@ionic/react';
import './home.css';

interface ContainerProps {
    name: string;
}

const CurrentShipping: React.FC<ContainerProps> = () => {
    return (

        <div className=''>
            <IonCard className='homeshipping'>
                <IonRow className='homeshipping-card'>
                    <IonCol>
                        <IonCardTitle className='text-dark'>Current Shipping</IonCardTitle>
                        <IonCardTitle className='text-dark'>ID: AVD3733TOS</IonCardTitle>
                    </IonCol>
                    <IonCol>
                        <IonRouterLink href='' className='header-right'>See More</IonRouterLink>
                    </IonCol>
                </IonRow>
                <IonImg className='shipping-image-center' src='src/assets/shipping.png'></IonImg>
                <IonRow>
                    <IonCol>
                        <IonCardContent>
                            <IonCardSubtitle>25th Jun, 2023</IonCardSubtitle>
                            <IonText>Frankfurt, Germany</IonText>
                        </IonCardContent>
                    </IonCol>
                    <IonCol>
                        <IonCardContent>
                            <IonCardSubtitle>Estimated: 29th July, 2023</IonCardSubtitle>
                            <IonText>Lagos, Nigeria</IonText>
                        </IonCardContent>
                    </IonCol>
                </IonRow>


            </IonCard>
        </div>
    );
};

export default CurrentShipping;
