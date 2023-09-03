import { IonHeader, IonToolbar, IonRow, IonCol, IonRouterLink, IonIcon, IonTitle } from "@ionic/react";
import { arrowUndo } from "ionicons/icons";
import FindLocationDropUp from "./FindLocationDropUp";
import "./location.css"

interface ContainerProps {
    name: string;
}

const FindLocation: React.FC<ContainerProps> = () => {
    return (

        <div className="locationStyle">
            <IonHeader>
                <IonToolbar className='bg-white'>
                    <IonRow>
                        <IonCol>
                            <IonRouterLink href="/home">
                                <IonIcon className="locationIcon" icon={arrowUndo}></IonIcon>
                            </IonRouterLink>
                            <IonTitle className='text-center'>Find Location</IonTitle>
                        </IonCol>
                    </IonRow>
                </IonToolbar>
            </IonHeader>
            <FindLocationDropUp name="locationdropup"/>
        </div>
    )
}

export default FindLocation