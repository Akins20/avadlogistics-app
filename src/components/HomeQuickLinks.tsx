import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCheckbox, IonCol, IonContent, IonHeader, IonIcon, IonInput, IonRouterLink, IonRow, IonText } from '@ionic/react';
import './home.css';
import { document, fileTray, help, helpCircle, helpCircleOutline, location, logoStackoverflow, person, personRemove, qrCodeOutline } from 'ionicons/icons';

interface ContainerProps {
    name: string;
}

const QuickLinks: React.FC<ContainerProps> = () => {
    return (

        <div className='container quick-links'>
            <div>
                <h3 className='header-left'>Quick Links</h3>
            </div>

            <div className='quick-links-card'>
                <IonRow>
                    <IonCol>
                        <IonRouterLink href='getquote'>
                            <IonCard className='body-white quick-links-hover'>
                                <IonCardTitle>
                                    <span className='text-dark'>
                                        <IonIcon className='quick-links-icon' icon={fileTray}></IonIcon>
                                        <h4 className='quick-links-text'>Get Quote</h4>
                                    </span>
                                </IonCardTitle>
                                <IonCardContent>
                                    <p>Compare prices across weights and Locations</p>
                                </IonCardContent>
                            </IonCard>
                        </IonRouterLink>
                    </IonCol>
                    <IonCol>
                        <IonRouterLink href='findlocation'>
                            <IonCard className='body-white quick-links-hover'>
                                <IonCardTitle>
                                    <span className='text-dark'>
                                        <IonIcon className='quick-links-icon' icon={location}></IonIcon>
                                        <h4 className='quick-links-text'>Find Location</h4>
                                    </span>
                                </IonCardTitle>
                                <IonCardContent>
                                    <p>Find nearby drop-off points and pick-up locations.</p>
                                </IonCardContent>
                            </IonCard>
                        </IonRouterLink>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonRouterLink href='promotions'>
                            <IonCard className='body-white quick-links-hover'>
                                <IonCardTitle>
                                    <span className='text-dark'>
                                        <IonIcon className='quick-links-icon' icon={person}></IonIcon>
                                        <h4 className='quick-links-text'>Promotions</h4>
                                    </span>
                                </IonCardTitle>
                                <IonCardContent>
                                    <p>Discover new promotions and Discounts.</p>
                                </IonCardContent>
                            </IonCard>
                        </IonRouterLink>
                    </IonCol>
                    <IonCol>
                        <IonRouterLink href=''>
                            <IonCard className='body-white quick-links-hover'>
                                <IonCardTitle>
                                    <span className='text-dark'>
                                        <IonIcon className='quick-links-icon' icon={qrCodeOutline}></IonIcon>
                                        <h4 className='quick-links-text'>Feedback</h4>
                                    </span>
                                </IonCardTitle>
                                <IonCardContent>
                                    <p>Kindly leave a review about us or our services.</p>
                                </IonCardContent>
                            </IonCard>
                        </IonRouterLink>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonRouterLink href=''>
                            <IonCard className='body-white quick-links-hover'>
                                <IonCardTitle>
                                    <span className='text-dark'>
                                        <IonIcon className='quick-links-icon' icon={helpCircleOutline}></IonIcon>
                                        <h4 className='quick-links-text'>Help</h4>
                                    </span>
                                </IonCardTitle>
                                <IonCardContent>
                                    <p>Have access to our help center with articles, FAQS and lots more.</p>
                                </IonCardContent>
                            </IonCard>
                        </IonRouterLink>
                    </IonCol>
                    <IonCol>
                        
                    </IonCol>
                </IonRow>
            </div>

        </div>
    );
};

export default QuickLinks;
