import { IonHeader, IonToolbar, IonTitle, IonIcon, IonRow, IonCol, IonRouterLink } from "@ionic/react";
import { arrowUndo, car } from "ionicons/icons";
import PickupLocationBody from "./pickupLocationBody";
import QuotationInfo from "../quote/QuotationInfo";



interface ContainerProps {
    name: string;
}

const YourQuotation: React.FC<ContainerProps> = () => {
    return (

        <div className="quoteStyle">
            <IonHeader>
                <IonToolbar className='bg-white'>
                    <IonRow>
                        <IonCol>
                            <IonRouterLink href="pickupconfirm">
                                <IonIcon className="quoteIcon" icon={arrowUndo}></IonIcon>
                            </IonRouterLink>
                            <IonTitle className='text-center'>Your Quotation</IonTitle>
                        </IonCol>
                    </IonRow>
                </IonToolbar>
            </IonHeader>
            <QuotationInfo name="quotationinfo" />
            <IonRouterLink href="/downloadreceipt">
            <button type="button" className="shipButton">Download Quote</button>
        </IonRouterLink>
            
        </div>
    )
}

export default YourQuotation