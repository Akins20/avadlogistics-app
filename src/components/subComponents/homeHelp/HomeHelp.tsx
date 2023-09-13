import { IonHeader, IonToolbar, IonTitle, IonIcon, IonRow, IonCol, IonRouterLink } from "@ionic/react";
import { arrowUndo, car } from "ionicons/icons";
import HomeHelpInfo from "./HomeHelpInfo";
import './homeHelp.css'

interface ContainerProps {
    name: string;
}

const HomeHelp: React.FC<ContainerProps> = () => {
    return (

        <div className="quoteStyle">
            <IonHeader>
                <IonToolbar className='bg-white'>
                    <IonRow>
                        <IonCol>
                            <IonRouterLink href="/">
                                <IonIcon className="quoteIcon" icon={arrowUndo}></IonIcon>
                            </IonRouterLink>
                            <IonTitle className='text-center'>Help</IonTitle>
                        </IonCol>
                    </IonRow>
                </IonToolbar>
            </IonHeader>
           <HomeHelpInfo name="homeHelpInfo"/>
        </div>
    )
}

export default HomeHelp