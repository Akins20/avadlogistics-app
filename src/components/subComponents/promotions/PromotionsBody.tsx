import { IonCard, IonCardContent, IonIcon, IonText } from "@ionic/react";
import { wallet, walletOutline } from "ionicons/icons";

interface ContainerProps {
    name: string;
}

const PromotionsBody: React.FC<ContainerProps> = () => {
    return (

        <div className="promotionStyle">
            <IonCard className="promoCard">
                <IonCardContent>
                    <IonIcon className="promoCardIcon" icon={walletOutline}></IonIcon>
                    <IonText className="promoText">Promo Code</IonText>
                </IonCardContent>
            </IonCard>
            <div className="promoBody">
                <IonIcon className="promoBodyIcon" icon={wallet}></IonIcon>
                <IonText className="promoBodyText">Your Promotions will appear here.</IonText>
            </div>
        </div>
    )
}

export default PromotionsBody