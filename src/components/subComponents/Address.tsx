import { IonButton, IonCard, IonCardContent, IonCardSubtitle, IonCheckbox, IonIcon, IonInput, IonLabel, IonRouterLink, IonText } from "@ionic/react";
import { location, locationOutline } from "ionicons/icons";
import { Form, FormLabel } from "react-bootstrap";
import "./quote/quote.css"

interface ContainerProps {
    name: string;
}

const Address: React.FC<ContainerProps> = () => {
    return (
        <div>
            <IonCard className="bg-white">
                <IonCardContent className="quoteCard">
                    <Form>
                        <IonLabel>Pick Up Address</IonLabel>
                        <IonInput type="text" className="quoteInput" name="pickUpAddress" placeholder="Enter Pick Up Address">
                            <IonIcon className="quoteInputIcon" icon={locationOutline}></IonIcon>
                        </IonInput>
                        <IonLabel>Delivery Address</IonLabel>
                        <IonInput type="text" className="quoteInput" name="deliveryAddress" placeholder="Enter Delivery Address">
                            <IonIcon className="quoteInputIcon" icon={locationOutline}></IonIcon>
                        </IonInput>
                        <IonLabel>Weight (KG)</IonLabel>
                        <IonInput type="number" className="quoteInput" name="weight" placeholder="0"></IonInput>
                    </Form>
                </IonCardContent>
            </IonCard>
            <IonText className="text-dark quoteText">Would you like
                <IonRouterLink href="/">
                    conceirge services ?
                </IonRouterLink>
            </IonText>
            <IonCheckbox></IonCheckbox>
            <div className="text-center quoteButton">
                <IonButton className="button" href="quotation">Proceed</IonButton>
            </div>
        </div>
    )
}
export default Address