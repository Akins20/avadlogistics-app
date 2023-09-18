import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {cartSharp, chatbox, home, settingsOutline, timeOutline} from 'ionicons/icons';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import HomeTab from './pages/HomeTab';
import ShipTab from './pages/ShipTab';
import HistoryTab from './pages/HistoryTab';
import SettingsTab from './pages/SettingsTab';
import SignInTab from './pages/SignInTab';
import GetQuote from './components/subComponents/quote/GetQuote';
import SupportTab from './pages/SupportTab';
import Quotation from './components/subComponents/quote/Quotation';
import FindLocation from './components/subComponents/location/FindLocation';
import Promotions from './components/subComponents/promotions/promotions';
import HomeHelp from './components/subComponents/homeHelp/HomeHelp';
import FrequentlyAskedQuestions from './components/subComponents/frequentQuestions/FrequentlyAskedQuestions';
import PickupLocation from './components/subComponents/shipSubs/pickupLocation';
import PickupConfirm from './components/subComponents/shipSubs/pickupConfirm';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/home">
            <HomeTab />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/ship">
            <ShipTab />
          </Route>
          <Route exact path="/history">
            <HistoryTab />
          </Route>
          <Route exact path="/settings">
            <SettingsTab />
          </Route>
          <Route exact path="/support">
            <SupportTab />
          </Route>
          <Route exact path="/signin">
            <SignInTab />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route path="/tab3">
            <Tab3 />
          </Route>
          <Route path="/getquote">
            <GetQuote name='quote' />
          </Route>
          <Route path="/quotation">
            <Quotation name='quotation' />
          </Route>
          <Route path="/findlocation">
            <FindLocation name='location' />
          </Route>
          <Route path="/promotions">
            <Promotions name='promotions' />
          </Route>
          <Route path="/homehelp">
            <HomeHelp name='homeHelp' />
          </Route>
          <Route path="/frequentQuestions">
            <FrequentlyAskedQuestions name='frequentQuestions' />
          </Route>
          <Route path="/pickuplocation">
            <PickupLocation name='pickuplocation' />
          </Route>
          <Route path="/pickupconfirm">
            <PickupConfirm name='pickupconfirm' />
          </Route>

        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon aria-hidden="true" icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="ship" href="/ship">
            <IonIcon aria-hidden="true" icon={cartSharp} />
            <IonLabel>Ship</IonLabel>
          </IonTabButton>
          <IonTabButton tab="history" href="/history">
            <IonIcon aria-hidden="true" icon={timeOutline} />
            <IonLabel>History</IonLabel>
          </IonTabButton>
          <IonTabButton tab="support" href="/support">
            <IonIcon aria-hidden="true" icon={chatbox} />
            <IonLabel>Support</IonLabel>
          </IonTabButton>
          <IonTabButton tab="settings" href="/settings">
            <IonIcon aria-hidden="true" icon={settingsOutline} />
            <IonLabel>Settings</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
