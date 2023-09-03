import { arrowUndo, car } from "ionicons/icons";
import Address from "../Address";
import { IonHeader, IonToolbar, IonRow, IonCol, IonRouterLink, IonIcon, IonTitle } from "@ionic/react";
import QuotationInfo from "./QuotationInfo";

interface ContainerProps {
    name: string;
}

const Quotation: React.FC<ContainerProps> = () => {
    return (

        <div className="quoteStyle">
            <IonHeader>
                <IonToolbar className='bg-white'>
                    <IonRow>
                        <IonCol>
                            <IonRouterLink href="getquote">
                                <IonIcon className="quoteIcon" icon={arrowUndo}></IonIcon>
                            </IonRouterLink>
                            <IonTitle className='text-center'>Your Quotation</IonTitle>
                        </IonCol>
                    </IonRow>
                </IonToolbar>
            </IonHeader>
            <QuotationInfo name="quotationinfo"/>
        </div>
    )
}

export default Quotation