import { IonButton, IonCheckbox, IonInput, IonRouterLink, IonText } from '@ionic/react';
import './ExploreContainer.css';

interface ContainerProps {
    name: string;
}

const SignUp: React.FC<ContainerProps> = () => {
    return (

        <div className='container'>
            <IonText>Sign Up</IonText>
            <p>Create a new account to start shipping.</p>
            <form method='POST'>
                <IonInput type='text' placeholder='Full name'></IonInput>
                <IonInput type='email' placeholder='E-mail Address'></IonInput>
                <IonInput type='password' placeholder='Password'></IonInput>
                <IonInput type='password' placeholder='Confirm Password'></IonInput>
                <IonCheckbox ></IonCheckbox>
                <IonText> By Clicking register, you accept the <IonRouterLink href='/tab3'>Terms and Conditions</IonRouterLink> of AVAD LLC.</IonText><br />
                <IonButton href='/home'>Register</IonButton>
            </form><br />
            <IonText>Already have an account? <IonRouterLink href='/tab1'>Sign in</IonRouterLink>.</IonText>
        </div>
    );
};

export default SignUp;
