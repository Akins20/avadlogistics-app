import { IonCardSubtitle, IonCol, IonHeader, IonIcon, IonRouterLink, IonRow, IonTab, IonText, IonTitle, IonToast, IonToolbar } from "@ionic/react";
import './pickup.css'


interface ContainerProps {
    name: string;
}

const DownloadReceipt: React.FC<ContainerProps> = () => {
    return (
        <div className="downldRcptBody">
            <div>
                <IonToolbar className='text-center'>
                    <IonTitle className='downldRcptHeader'>AVAD <br /> LOGISTICS</IonTitle>
                    <IonText className='downldRcptSubHeader'>Transaction Successful</IonText>
                </IonToolbar>


                <IonText className='downldRcptIntro'>Hello, you have completed your transaction. You'll find the details of your order below.</IonText>
                <IonToolbar className='downldRcptDetails'>
                    <IonRow>
                        <IonCol>
                            <IonText className='downldRcpttab1'>Date:</IonText>
                            <IonText className='downldRcpttab21' >28TH July, 2023</IonText>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonText className='downldRcpttab1'>Time:</IonText>
                            <IonText className='downldRcpttab22'>15:55PM</IonText>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonText className='downldRcpttab1'>Tracking ID:</IonText>
                            <IonText className='downldRcpttab23'>AVD-TRACK-2023-7-27-14-56</IonText>
                        </IonCol>
                    </IonRow>
                </IonToolbar>
            </div>
            <IonRouterLink href="yourquotation">
                <button type="button" className="downldRcptButton">Download Receipt</button>
            </IonRouterLink>
            <IonText className="downldRcptthanks">Thank you for trusting AVAD Logistics, where we move your world, one package at a time</IonText>
            <div className="text-right">
                <IonRouterLink href="/home" className="downldRcptReturnBtn">Back to <b>Main Menu</b></IonRouterLink>
            </div>
        </div>
    );
}

export default DownloadReceipt