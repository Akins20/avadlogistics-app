import { IonHeader, IonToolbar, IonTitle, IonIcon, IonRow, IonCol, IonRouterLink } from "@ionic/react";
import { arrowUndo, car } from "ionicons/icons";
import PickupLocationBody from "./pickupLocationBody";
import { Form } from "react-bootstrap";
import './pickup.css'



interface ContainerProps {
    name: string;
}

const PickupConfirm: React.FC<ContainerProps> = () => {
    return (

        <div className="quoteStyle">
            <IonHeader>
                <IonToolbar className='bg-white'>
                    <IonRow>
                        <IonCol>
                            <IonRouterLink href="/ship">
                                <IonIcon className="quoteIcon" icon={arrowUndo}></IonIcon>
                            </IonRouterLink>
                            <IonTitle className='text-center'></IonTitle>
                        </IonCol>
                    </IonRow>
                </IonToolbar>
            </IonHeader>
            <Form className="pickupForm">
                <label>Select date of pickup</label>
                <input type="date" name="dateOfPickup" className="confirmInput" id="dateOfPickup" /><br />
                <label>What item do you intend to transport?</label>
                <input type="text" name="transportItem" className="confirmInput" placeholder="Your response" id="transportItem" /><br></br>
                <label>How many items do you intend to transport?</label>
                <input type="number" name="transportItemNo" className="confirmInput" placeholder="Your response" id="transportItemNo" /><br></br>
                <p>Request <IonRouterLink href="/">Concierge Services</IonRouterLink></p>
                <input type="checkbox" className="confirmCheckbox" />
                <IonRouterLink href="">
                    <button type="button" className="confirmButton1">Pay Now</button>
                </IonRouterLink>
                <IonRouterLink href="">
                    <button type="button" className="confirmButton2">Pay at point of pickup</button>
                </IonRouterLink>

            </Form>
        </div>
    )
}

export default PickupConfirm