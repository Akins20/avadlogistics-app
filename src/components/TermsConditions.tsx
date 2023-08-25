import { IonButton, IonCheckbox, IonInput, IonRouterLink, IonText } from '@ionic/react';
import './ExploreContainer.css';

interface ContainerProps {
    name: string;
}

const TermsConditions: React.FC<ContainerProps> = () => {
    return (

        <div className='container'>
           <IonText>
            1. AVAD is a logistics app that connects users with third-party logistics providers. By using AVAD, you agree to these terms and conditions.<br/>
            2. AVAD is not responsible for the actions or omissions of third-party logistics providers. Users are responsible for verifying that logistics providers are appropriately licensed and insured.<br/>
            3. Users must provide accurate and complete information when using AVAD. This includes information about the pickup and delivery locations, the type of goods being transported, and any special requirements or instructions.<br/>
            4. Users must comply with all applicable laws and regulations when using AVAD. This includes laws related to the transportation of hazardous materials, customs regulations, and export controls.<br/>
            5. AVAD reserves the right to refuse service to any user for any reason. This includes users who violate these terms and conditions or who engage in fraudulent or illegal activities.<br/>
            6. Users are responsible for paying all fees associated with using AVAD. This includes fees charged by third-party logistics providers as well as any fees charged by AVAD.<br/>
            7. AVAD may collect and use user data for the purpose of providing and improving the app. This includes data related to user location, transaction history, and other information collected through the app.<br/>
            8. Users may opt out of receiving marketing communications from AVAD at any time.<br/>
            9. AVAD may modify these terms and conditions at any time. Users will be notified of any changes to these terms and conditions through the app.<br/>
            10. These terms and conditions are governed by the laws of the jurisdiction in which AVAD is located. Any disputes arising from these terms and conditions will be resolved through binding arbitration in accordance with the rules of the relevant arbitration association.
            </IonText>
        </div>
    );
};

export default TermsConditions;
