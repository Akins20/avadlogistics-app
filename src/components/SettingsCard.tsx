import { IonCard, IonCardSubtitle, IonIcon, IonRouterLink } from "@ionic/react";
import { cash, glasses, helpCircle, hourglass, language, notifications, person, scale, shield } from "ionicons/icons";
import "./settings.css"

interface ContainerProps {
    name: string;
}
const SettingsCard: React.FC<ContainerProps> = () => {
    return (
        <div className="settings-body">
            <IonCard className="settings-card bg-white">
                <IonRouterLink href="">
                    <IonCardSubtitle class="settings-card-text">
                        <span>Account Settings</span>
                        <span><IonIcon icon={person}></IonIcon></span>
                    </IonCardSubtitle>
                </IonRouterLink>
            </IonCard>
            <IonCard className="settings-card bg-white">
                <IonRouterLink href="">
                    <IonCardSubtitle class="settings-card-text">
                        <span>Notificatoin Preference</span>
                        <span><IonIcon icon={notifications}></IonIcon></span>
                    </IonCardSubtitle>
                </IonRouterLink>
            </IonCard>
            <IonCard className="settings-card bg-white">
                <IonRouterLink href="">
                    <IonCardSubtitle class="settings-card-text">
                        <span>Payment Methods</span>
                        <span><IonIcon icon={cash}></IonIcon></span>
                    </IonCardSubtitle>
                </IonRouterLink>
            </IonCard>
            <IonCard className="settings-card bg-white">
                <IonRouterLink href="">
                    <IonCardSubtitle class="settings-card-text">
                        <span>Privacy and Security Settings</span>
                        <span><IonIcon icon={shield}></IonIcon></span>
                    </IonCardSubtitle>
                </IonRouterLink>
            </IonCard>
            <IonCard className="settings-card bg-white">
                <IonRouterLink href="">
                    <IonCardSubtitle class="settings-card-text">
                        <span>Language and Region</span>
                        <span><IonIcon icon={language}></IonIcon></span>
                    </IonCardSubtitle>
                </IonRouterLink>
            </IonCard>
            <IonCard className="settings-card bg-white">
                <IonRouterLink href="">
                    <IonCardSubtitle class="settings-card-text">
                        <span>Theme and Appearances</span>
                        <span><IonIcon icon={hourglass}></IonIcon></span>
                    </IonCardSubtitle>
                </IonRouterLink>
            </IonCard>
            <IonCard className="settings-card bg-white">
                <IonRouterLink href="">
                    <IonCardSubtitle class="settings-card-text">
                        <span>Help</span>
                        <span><IonIcon icon={helpCircle}></IonIcon></span>
                    </IonCardSubtitle>
                </IonRouterLink>
            </IonCard>
            <IonCard className="settings-card bg-white">
                <IonRouterLink href="">
                    <IonCardSubtitle class="settings-card-text">
                        <span>Legal</span>
                        <span><IonIcon icon={scale}></IonIcon></span>
                    </IonCardSubtitle>
                </IonRouterLink>
            </IonCard>
            <div className="text-center">
                <IonRouterLink href="/signin" className="text-danger">Sign Out</IonRouterLink>
            </div>
        </div>

    )
}

export default SettingsCard
