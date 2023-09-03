import { IonRow, IonCol, IonInput, IonButton } from "@ionic/react"
import { ContainerProps } from "react-bootstrap"
import './home.css';


const Wallet: React.FC<ContainerProps> = () => {
    return (

        <div className=''>
            <div className='wallet'>
                <h5 className='header-left'>Fiat Balance</h5>
                <IonRow>
                    <IonCol>
                        <input className="wallet-input" readOnly placeholder="#5000"></input>
                    </IonCol>
                    <IonCol>
                        <IonButton className="wallet-button">Fund Wallet</IonButton>
                    </IonCol>
                </IonRow>
            </div>
        </div>
    )
}

export default Wallet