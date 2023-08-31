import { IonCardTitle, IonCard, IonIcon, IonRouterLink, IonText, IonRow, IonCol } from '@ionic/react';
import { arrowUndo } from 'ionicons/icons';
import './ship.css';

interface ContainerProps {
    name: string;
}

const ShipHeader: React.FC<ContainerProps> = () => {
    return (

        <div className='container'>

            <IonCard className='shipheader'>
                <IonRow>
                    <IonCol>
                        <IonRouterLink href='/home'>
                            <IonIcon icon={arrowUndo}>.</IonIcon>
                        </IonRouterLink><br />
                        <IonCardTitle>Hello Oseka</IonCardTitle><br />
                        <IonText className='shipheadertext'>KIndly select the most suitable vehicle to pick up your item(s).</IonText>
                    </IonCol>
                </IonRow>
            </IonCard>
        </div>
    );
};

export default ShipHeader;
