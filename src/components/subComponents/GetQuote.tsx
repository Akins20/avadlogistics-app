import { IonHeader, IonToolbar, IonTitle, IonIcon } from "@ionic/react";
import { car } from "ionicons/icons";

interface ContainerProps {
    name: string;
}

const GetQuote: React.FC<ContainerProps> = () => {
    return (

        <div>
            <IonHeader>
                <IonToolbar className='bg-white'>
                    <IonIcon icon={car}></IonIcon>
                    <IonTitle className='text-center'>Get Quote</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonTitle>Hello World!</IonTitle>
        </div>
    )
}

export default GetQuote