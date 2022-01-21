import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../Screens/Splash/Splash';
import Login from '../Screens/Auth/Login';
import RecoveryPhase from '../Screens/RecoveryPhase/RecoveryPhase';
import Send from '../Screens/Wallet/Send';
import Notification from '../Screens/Notification/Notification';
import BackupWallet from '../Screens/Wallet/BackupWallet';
import Account from '../Screens/Auth/Account';
import ForgotPin from '../Screens/Wallet/ForgotPin';
import BottomTab from './BottomTab';
import Setting from '../Screens/Setting/Setting';
import TopTabs from '../components/TopTabs';
import Buy from '../Screens/Buy';
import Deposit from '../Screens/Wallet/Deposit';
import Receive from '../Screens/Wallet/Receive';
import Fingerprint from '../Screens/FingerPrint/Fingerprint';
import Register from '../Screens/Auth/Register';
import TransactionHistory from '../Screens/TransactionHistory/TransactionHistory';
import Sell from '../Screens/Sell';
import ForgotPassword from '../Screens/Auth/ForgotPassword';
import Withdraw from '../Screens/Withdraw/Withdraw';
import CreateNewPassword from '../Screens/Auth/CreateNewPassword';
import Success from '../Screens/Auth/Success';
import BankingDetails from '../Screens/BankingDetails/BankingDetails';
import Confirmation from '../Screens/Confirmation/Confirmation';
import ExchangeSuccess from '../Screens/Confirmation/ExchangeSuccess';
import Welcome from '../Screens/WelcomeScreens/Welcome';
import VerifyPhone from '../Screens/WelcomeScreens/VerifyPhone';
import ProofAddress from '../Screens/WelcomeScreens/ProofAddress';
import UploadID from '../Screens/WelcomeScreens/UploadID';
import UploadVideo from '../Screens/WelcomeScreens/UploadVideo';
import Swap from '../Screens/Swap';
import Tabs from '../Screens/Tabs';
import Profile from '../Screens/Profile/Profile';
import Exchange from '../Screens/Exchange/Exchange';
import CoinsDeposit from '../Screens/CoinsDeposit';
import MobileMoneyWithdraw from '../Screens/Withdraw/MobileMoneyWithdraw';
import DepositScreen from '../Screens/Withdraw/DepositScreen';
import Amount from '../Screens/Withdraw/Amount';
import BuySell from '../Screens/BuySell';
import BankWithdraw from '../Screens/Withdraw/BankWithdraw';
import Portfolio from '../Screens/Portfolio/Portfolio';
import Balance from '../Screens/Portfolio/Balance';
import Invest from '../Screens/Portfolio/Invest';
import Contact from '../Screens/Withdraw/Contact';

const Stack = createNativeStackNavigator();
function MainStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Invest">
        <Stack.Screen
          name="TransactionHistory"
          component={TransactionHistory}
        />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Invest" component={Invest} />
        <Stack.Screen name="BankWithdraw" component={BankWithdraw} />
        <Stack.Screen name="BuySell" component={BuySell} />
        <Stack.Screen name="Amount" component={Amount} />
        <Stack.Screen name="DepositScreen" component={DepositScreen} />
        <Stack.Screen name="MobileMoneyWithdraw" component={MobileMoneyWithdraw} />
        <Stack.Screen name="CoinsDeposit" component={CoinsDeposit} />
        <Stack.Screen name="Exchange" component={Exchange} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="UploadVideo" component={UploadVideo} />
        <Stack.Screen name="UploadID" component={UploadID} />
        <Stack.Screen name="ProofAddress" component={ProofAddress} />
        <Stack.Screen name="VerifyPhone" component={VerifyPhone} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="ExchangeSuccess" component={ExchangeSuccess} />
        <Stack.Screen name="Confirmation" component={Confirmation} />
        <Stack.Screen name="BankingDetails" component={BankingDetails} />
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen name="Send" component={Send} />
        <Stack.Screen name="Swap" component={Swap} />

        <Stack.Screen name="Sell" component={Sell} />
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="Receive" component={Receive} />
        <Stack.Screen name="TopTabs" component={TopTabs} />
        <Stack.Screen name="Setting" component={Setting} />

        <Stack.Screen name="Buy" component={Buy} />

        <Stack.Screen name="Fingerprint" component={Fingerprint} />
        <Stack.Screen name="Deposit" component={Deposit} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Balance" component={Balance} />
        <Stack.Screen name="Portfolio" component={Portfolio} />
        <Stack.Screen name="ForgotPin" component={ForgotPin} />
        <Stack.Screen name="BackupWallet" component={BackupWallet} />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Withdraw" component={Withdraw} />
        <Stack.Screen name="CreateNewPassword" component={CreateNewPassword} />
        <Stack.Screen name="Success" component={Success} />

        <Stack.Screen name="RecoveryPhase" component={RecoveryPhase} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Account" component={Account} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStack;
