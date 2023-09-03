import { IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCol, IonIcon, IonRow, IonText } from "@ionic/react";
import FindLocation from "./FindLocation";
import { arrowForward, arrowRedo, call, phonePortrait } from "ionicons/icons";
import "./location.css"
import { useState } from "react";

interface ContainerProps {
    name: string;
}

const FindLocationDropUp: React.FC<ContainerProps> = () => {

    const [location, setLocation] = useState("");
    
    return (
        <IonCard id="locate" className="locationCard">
            <IonCardTitle><IonCard className="cardLine">.</IonCard></IonCardTitle>
            <IonCardContent>
                <IonRow class="locationCard-row">
                    <IonCol className="locationCard-text">
                        <IonText>1234 Ahmadu Bello Way, Kaduna North, Kaduna, 800001</IonText>
                        <IonCardSubtitle>Opens Monday 9AM</IonCardSubtitle>
                    </IonCol>
                    <IonCol>
                        <IonIcon className="locationCard-icon1" icon={call}></IonIcon>
                        <IonIcon className="locationCard-icon2" icon={arrowRedo}></IonIcon>
                    </IonCol>
                </IonRow>
                <IonRow class="locationCard-row">
                    <IonCol className="locationCard-text">
                        <IonText>1234 Ahmadu Bello Way, Kaduna North, Kaduna, 800001</IonText>
                        <IonCardSubtitle>Opens Monday 9AM</IonCardSubtitle>
                    </IonCol>
                    <IonCol>
                        <IonIcon className="locationCard-icon1" icon={call}></IonIcon>
                        <IonIcon className="locationCard-icon2" icon={arrowRedo}></IonIcon>
                    </IonCol>
                </IonRow>
                <IonRow class="locationCard-row">
                    <IonCol className="locationCard-text">
                        <IonText>1234 Ahmadu Bello Way, Kaduna North, Kaduna, 800001</IonText>
                        <IonCardSubtitle>Opens Monday 9AM</IonCardSubtitle>
                    </IonCol>
                    <IonCol>
                        <IonIcon className="locationCard-icon1" icon={call}></IonIcon>
                        <IonIcon className="locationCard-icon2" icon={arrowRedo}></IonIcon>
                    </IonCol>
                </IonRow>
                <IonRow class="locationCard-row">
                    <IonCol className="locationCard-text">
                        <IonText>1234 Ahmadu Bello Way, Kaduna North, Kaduna, 800001</IonText>
                        <IonCardSubtitle>Opens Monday 9AM</IonCardSubtitle>
                    </IonCol>
                    <IonCol>
                        <IonIcon className="locationCard-icon1" icon={call}></IonIcon>
                        <IonIcon className="locationCard-icon2" icon={arrowRedo}></IonIcon>
                    </IonCol>
                </IonRow>
                <IonRow class="locationCard-row">
                    <IonCol className="locationCard-text">
                        <IonText>1234 Ahmadu Bello Way, Kaduna North, Kaduna, 800001</IonText>
                        <IonCardSubtitle>Opens Monday 9AM</IonCardSubtitle>
                    </IonCol>
                    <IonCol>
                        <IonIcon className="locationCard-icon1" icon={call}></IonIcon>
                        <IonIcon className="locationCard-icon2" icon={arrowRedo}></IonIcon>
                    </IonCol>
                </IonRow>
                <IonRow class="locationCard-row">
                    <IonCol className="locationCard-text">
                        <IonText>1234 Ahmadu Bello Way, Kaduna North, Kaduna, 800001</IonText>
                        <IonCardSubtitle>Opens Monday 9AM</IonCardSubtitle>
                    </IonCol>
                    <IonCol>
                        <IonIcon className="locationCard-icon1" icon={call}></IonIcon>
                        <IonIcon className="locationCard-icon2" icon={arrowRedo}></IonIcon>
                    </IonCol>
                </IonRow>
                <IonRow class="locationCard-row">
                    <IonCol className="locationCard-text">
                        <IonText>1234 Ahmadu Bello Way, Kaduna North, Kaduna, 800001</IonText>
                        <IonCardSubtitle>Opens Monday 9AM</IonCardSubtitle>
                    </IonCol>
                    <IonCol>
                        <IonIcon className="locationCard-icon1" icon={call}></IonIcon>
                        <IonIcon className="locationCard-icon2" icon={arrowRedo}></IonIcon>
                    </IonCol>
                </IonRow>
                <IonRow class="locationCard-row">
                    <IonCol className="locationCard-text">
                        <IonText>1234 Ahmadu Bello Way, Kaduna North, Kaduna, 800001</IonText>
                        <IonCardSubtitle>Opens Monday 9AM</IonCardSubtitle>
                    </IonCol>
                    <IonCol>
                        <IonIcon className="locationCard-icon1" icon={call}></IonIcon>
                        <IonIcon className="locationCard-icon2" icon={arrowRedo}></IonIcon>
                    </IonCol>
                </IonRow>
                <IonRow class="locationCard-row">
                    <IonCol className="locationCard-text">
                        <IonText>1234 Ahmadu Bello Way, Kaduna North, Kaduna, 800001</IonText>
                        <IonCardSubtitle>Opens Monday 9AM</IonCardSubtitle>
                    </IonCol>
                    <IonCol>
                        <IonIcon className="locationCard-icon1" icon={call}></IonIcon>
                        <IonIcon className="locationCard-icon2" icon={arrowRedo}></IonIcon>
                    </IonCol>
                </IonRow>
            </IonCardContent>
        </IonCard>
    )
}

export default FindLocationDropUp
