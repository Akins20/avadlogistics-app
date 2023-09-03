import { IonHeader, IonToolbar, IonTitle, IonIcon, IonRow, IonCol, IonRouterLink } from "@ionic/react";
import { arrowUndo, car } from "ionicons/icons";
import Address from "../Address";

interface ContainerProps {
    name: string;
}

const GetQuote: React.FC<ContainerProps> = () => {
    return (

        <div className="quoteStyle">
            <IonHeader>
                <IonToolbar className='bg-white'>
                    <IonRow>
                        <IonCol>
                            <IonRouterLink href="/">
                                <IonIcon className="quoteIcon" icon={arrowUndo}></IonIcon>
                            </IonRouterLink>
                            <IonTitle className='text-center'>Get Quote</IonTitle>
                        </IonCol>
                    </IonRow>
                </IonToolbar>
            </IonHeader>
            <Address name="address" />
        </div>
    )
}

export default GetQuote