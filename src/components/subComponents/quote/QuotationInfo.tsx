import { IonHeader, IonToolbar, IonRow, IonCol, IonRouterLink, IonIcon, IonTitle, IonCard, IonCardTitle, IonText } from "@ionic/react";
import { arrowUndo, car } from "ionicons/icons";

interface ContainerProps {
    name: string;
}

const QuotationInfo: React.FC<ContainerProps> = () => {
    return (

        <div className="quoteStyle">
            <IonCard className="quotationCard">
                <IonCardTitle className="text-center quotationInfo-title text-dark">Shipment Info</IonCardTitle>
                <IonText className="quotationInfo-text">Origin:</IonText><br />
                <IonText className="quotationInfo-text">Destination:</IonText><br />
                <IonText className="quotationInfo-text">Weight (KG):</IonText>
                <IonCardTitle className="text-center quotationInfo-title text-dark">Additional Fees</IonCardTitle>
                <IonText className="quotationInfo-text">Pick Up Fee:</IonText><br />
                <IonText className="quotationInfo-text">Delivery Fee:</IonText><br />
                <IonText className="quotationInfo-text">Conceirge Services:</IonText>
            </IonCard>
        </div>
    )
}

export default QuotationInfo