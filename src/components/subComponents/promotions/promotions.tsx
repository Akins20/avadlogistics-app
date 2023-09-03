import { IonHeader, IonToolbar, IonRow, IonCol, IonRouterLink, IonIcon, IonTitle } from "@ionic/react";
import { arrowUndo } from "ionicons/icons";
import PromotionsBody from "./PromotionsBody";
import "./promotions.css"

interface ContainerProps {
    name: string;
}

const Promotions: React.FC<ContainerProps> = () => {
    return (

        <div className="promotionStyle">
            <IonHeader>
                <IonToolbar className='bg-white'>
                    <IonRow>
                        <IonCol>
                            <IonRouterLink href="/home">
                                <IonIcon className="promoIcon" icon={arrowUndo}></IonIcon>
                            </IonRouterLink>
                            <IonTitle className='text-center'>Promotions</IonTitle>
                        </IonCol>
                    </IonRow>
                </IonToolbar>
            </IonHeader>
            <PromotionsBody name="promotionsbody"/>
        </div>
    )
}

export default Promotions