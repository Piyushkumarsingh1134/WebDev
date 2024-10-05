import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { jobAtom, messagingAtom, networkAtom, notificationAtom } from './atoms';

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const finalValue = networkNotificationCount > 100 ? "99+" : networkNotificationCount;
  const jobsAtomCount=useRecoilValue(jobAtom);
  const[MessagingAtomCount, setMessagingAtomCount]=useRecoilState(messagingAtom)
  return (
    <>
      <button>Home</button>
      <button>My Network ({finalValue})</button>
      <button>Job({jobsAtomCount})</button>
      <button>Messaging</button>
      <button>Notification</button>
      <button onClick={()=>{
        setMessagingAtomCount(MessagingAtomCount+1);
      }}> Me</button>
    </>
  );
}

export default App;


