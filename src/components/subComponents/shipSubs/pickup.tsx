import { IonCard, IonIcon, IonRouterLink } from "@ionic/react";
import { Form, FormLabel } from "react-bootstrap";
import './pickup.css'
import { location } from "ionicons/icons";
import Location from "../../../assets/Map.png"



interface ContainerProps {
    name: string;
}

const Pickup: React.FC<ContainerProps> = () => {
    return (
        <div className="">
            <IonCard className="pickupCard">
                <Form>
                    <FormLabel className="shipLabel">Pickup Address</FormLabel><br />
                    <input type="text" name="pickupAddress" placeholder="Enter pickup address" id="pickupAddress" />
                    <IonIcon className="shipIcon1" icon={location} /><br />

                    <FormLabel className="shipLabel">Delivery Address</FormLabel><br />
                    <input type="text" name="deliveryAddress" placeholder="Enter Drop-off address" id="deliveryAddress" />
                    <IonIcon className="shipIcon2" icon={location} />
                </Form>
            </IonCard>
            <img src={Location} className="shipImage" alt="" />
            <IonRouterLink href="pickupconfirm">
                <button type="button" className="shipButton">Proceed</button>
            </IonRouterLink>
        </div>
    )
}

export default Pickup