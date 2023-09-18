import { IonCardTitle, IonCard, IonIcon, IonRow, IonCol, IonText, IonCardSubtitle, IonRouterLink } from '@ionic/react';
import { arrowUndo, bicycle, bus, car } from 'ionicons/icons';
import './ship.css';


interface ContainerProps {
    name: string;
}

const ShipCards: React.FC<ContainerProps> = () => {
    return (

        <div className='container'>

            <IonRouterLink href='pickuplocation'>
                <IonCard className='shipcards'>
                    <div className='cardunit'>
                        <div className='iconcard'>
                            <IonIcon className='icon' icon={bicycle}></IonIcon>
                        </div>
                        <div className='cardcontent'>
                            <IonCardSubtitle class='subtitle'>Motor Bike</IonCardSubtitle>
                            <IonText class='shiptext'>Ideal for lightweight documents:<br/> 
                            property documents,<br/> 
                            international passport, e.t.c</IonText>
                        </div>
                    </div>
                </IonCard>
            </IonRouterLink>

            <IonRouterLink href='pickuplocation'>
                <IonCard className='shipcards1'>
                    <div className='cardunit'>
                        <div className='iconcard'>
                            <IonIcon className='icon' icon={car}></IonIcon>
                        </div>
                        <div className='cardcontent'>
                            <IonCardSubtitle class='subtitle'>Car</IonCardSubtitle>
                            <IonText class='shiptext'>For items that will fit in a car boot:<br/>
                            Bag of clothes, Microwave oven, e.t.c.</IonText>
                        </div>
                    </div>
                </IonCard>
            </IonRouterLink>

            <IonRouterLink href='pickuplocation'>
                <IonCard className='shipcards1'>
                    <div className='cardunit'>
                        <div className='iconcard'>
                            <IonIcon className='icon' icon={bus}></IonIcon>
                        </div>
                        <div className='cardcontent'>
                            <IonCardSubtitle class='subtitle'>Van</IonCardSubtitle>
                            <IonText class='shiptext'>Ideal for moving big and bulky items:<br/>
                            A refrigerator, a washing machine, e.t.c.</IonText>
                        </div>
                    </div>
                </IonCard>
            </IonRouterLink>

            <IonRouterLink href='pickuplocation'>
                <IonCard className='shipcards2'>
                    <div className='cardunit'>
                        <div className='iconcard'>
                            <IonIcon className='icon' icon={bus}></IonIcon>
                        </div>
                        <div className='cardcontent'>
                            <IonCardSubtitle class='subtitle'>Truck</IonCardSubtitle>
                            <IonText class='shiptext'>Perfect for moving large items:<br/>
                            Home or office furniture, <br/>
                            Company Equipments, e.t.c.</IonText>
                        </div>
                    </div>
                </IonCard>
            </IonRouterLink>

        </div>
    );
};

export default ShipCards;
