import { IonCard, IonCardSubtitle, IonCardTitle, IonCol, IonRouterLink, IonRow, IonText } from "@ionic/react";
import "./history.css"

interface ContainerProps {
    name: string;
}
const HistoryBody: React.FC<ContainerProps> = () => {
    return (
        <div className="history-body">
            <IonCard className="history-card">
                <IonCardSubtitle className="text-dark history-card-text-3">Recent Shipping</IonCardSubtitle>
                <IonCard className="history-card-main">
                    <IonRow>
                        <IonCol>
                            <IonCardTitle className="text-light">AVD7446AYM</IonCardTitle>
                            <IonCardSubtitle className="history-card-text-2">Seoul, South Korea</IonCardSubtitle>
                        </IonCol>
                        <IonCol>
                            <IonCardSubtitle className="text-right">31st May, 2023</IonCardSubtitle>
                            <IonCardSubtitle className="text-right history-card-text-1">Lagos, Nigeria</IonCardSubtitle>
                        </IonCol>
                    </IonRow>
                </IonCard>
                <IonCard className="history-card-duplicate">
                    <IonRow>
                        <IonCol>
                            <IonCardTitle className="text-light">AVD1401AYH</IonCardTitle>
                            <IonCardSubtitle className="history-card-text-2">Johannesburg, South Africa</IonCardSubtitle>
                        </IonCol>
                        <IonCol>
                            <IonCardSubtitle className="text-right">16th April, 2023</IonCardSubtitle>
                            <IonCardSubtitle className="text-right history-card-text-1">Lagos, Nigeria</IonCardSubtitle>
                        </IonCol>
                    </IonRow>
                </IonCard>
                <IonCard className="history-card-duplicate-1">
                    <IonRow>
                        <IonCol>
                            <IonCardTitle className="text-light">AVD2003HMN</IonCardTitle>
                            <IonCardSubtitle className="history-card-text-2">Nairobi, Kenya</IonCardSubtitle>
                        </IonCol>
                        <IonCol>
                            <IonCardSubtitle className="text-right">20th Feb, 2023</IonCardSubtitle>
                            <IonCardSubtitle className="text-right history-card-text-1">Lagos, Nigeria</IonCardSubtitle>
                        </IonCol>
                    </IonRow>
                </IonCard>
                <IonCard className="history-card-final">
                    <IonRow>
                        <IonCol>
                            <IonCardTitle className="text-light">AVD0673OKM</IonCardTitle>
                            <IonCardSubtitle className="history-card-text-2">Singapore, Malaysia</IonCardSubtitle>
                        </IonCol>
                        <IonCol>
                            <IonCardSubtitle className="text-right">10th Jan, 2023</IonCardSubtitle>
                            <IonCardSubtitle className="text-right history-card-text-1">Lagos, Nigeria</IonCardSubtitle>
                        </IonCol>
                    </IonRow>
                </IonCard>
                <IonRouterLink href="" className="text-center">See all</IonRouterLink>
            </IonCard>
        </div>
    )
}

export default HistoryBody