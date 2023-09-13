import { IonHeader, IonToolbar, IonTitle, IonIcon, IonRow, IonCol, IonRouterLink } from "@ionic/react";
import { arrowUndo, car } from "ionicons/icons";
import FrequentQuestionsInfo from "./FrequntQuestionsInfo";


interface ContainerProps {
    name: string;
}

const FrequentlyAskedQuestions: React.FC<ContainerProps> = () => {
    return (

        <div className="quoteStyle">
            <IonHeader>
                <IonToolbar className='bg-white'>
                    <IonRow>
                        <IonCol>
                            <IonRouterLink href="/">
                                <IonIcon className="quoteIcon" icon={arrowUndo}></IonIcon>
                            </IonRouterLink>
                            <IonTitle className='text-center'>Frequently Asked Questions</IonTitle>
                        </IonCol>
                    </IonRow>
                </IonToolbar>
            </IonHeader>
            <FrequentQuestionsInfo name="qustions"/>
        </div>
    )
}

export default FrequentlyAskedQuestions