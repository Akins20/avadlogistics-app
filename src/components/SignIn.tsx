import { IonButton, IonCheckbox, IonInput, IonRouterLink, IonText } from '@ionic/react';
import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const SignIn: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>Sign in to continue shipping with us.</p>
      <form method='POST'>
        <IonInput type='email' placeholder='E-mail Address'></IonInput>
        <IonInput type='password' placeholder='Password'></IonInput>
        <IonRouterLink>Forgot Password?</IonRouterLink><br />
        <IonButton>Sign in</IonButton>
      </form><br />
      <p>Don't have an account? <IonRouterLink href='/tab2'>Sign up</IonRouterLink></p>
    </div>
  );
};

export default SignIn;
