
import ReactDOM from 'react-dom/client';
import SearchContact from './view/SearchContact/SearchContact';
import Home from './view/Home/Home';
import logo from './img/logo.png'
import tara from './img/tara.jpg'
import akash from './img/akash.jpg'
import harshali from './img/harshali.jpg'
import krishandas from './img/krishdas.jpg'
import Satish from './img/satish-bhai.jpg'
import sonu from './img/sonu-bhai.jpg'
import umesh from './img/umesh-bhai.jpg'
import rani from './img/rani.jpg'
import ratan from './img/ratan.jpg'
import harsh from './img/harsh.jpg'
import chacaha from './img/chacha.jpg'
import chandan from './img/chandan.jpg'
import chashni from './img/chashni.jpg'
import mausi from './img/ashamosi.jpg'
import mama from './img/mama.jpg'
import mummy from './img/mummy1.jpg'
import vaishu from './img/vaishu.jpg'
import KrishnaDas from './view/KrishnaDas/KrishnaDas';
import Igcp from './view/Igcp/Igcp';
import Chashni from './view/Chashni/Chashni';
import Harshali from './view/Harshali/Harshali';
import Rani from './view/Rani/Rani';
import Tara from './view/Tara/Tara';
import Vaishu from './view/Vaishu/Vaishu';
import Akash from './view/Akash/Akash';
import Mummy from './view/Mummy/Mummy';
import Ratan from './view/Ratan/Ratan';
import Chandan from './view/Chandan/Chandan';
import Umesh from './view/Umesh/Umesh';
import Sonu from './view/Sonu/Sonu';
import Mama from './view/Mama/Mama';
import Chacha from './view/Chacha/Chacha';
import Masi from './view/Masi/Masi';
import RaniBhabhi from './view/RaniBhabhi/RaniBhabhi';
import Krishna from './view/Krishna/Krishan';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    
   
    { 
      path: "/bar0",
      element:<KrishnaDas name={"☀☀ Krishna Das☀☀"} activity={"online"} dp={krishandas}/>,
    },
    {
      path: "/bar1",
      element:<Igcp name={"IGCP-1.0🎯🏆"} activity={"chadani harshali rani"} dp={logo}/>,
    },
    {
      path: "/bar2",
      element:<Chashni name={"Chashni"} activity={"last seen 12:03pm"} dp={chashni}/>,
    },
    {
      path: "/bar3",
      element:<Harshali name={"Harshali Kanoje"} activity={"last seen 12:03pm"} dp={harshali}/>,
    },
    {
      path: "/bar4",
      element:<Rani name={"Rani Anjole"} activity={"online"} dp={rani}/>,
    },
    {
      path: "/bar5",
      element:<Tara name={"Tara Sahu (You)"} activity={"online"} dp={tara}/>,
    },
    {
      path: "/bar6",
      element:<Vaishu name={"vaishu____🎉"} activity={"last seen yesterday"} dp={vaishu}/>,
    },
   
    {
      path: "/bar7",
      element:<Akash name={"Akash"} activity={"last seen today"} dp={akash}/>,
    },
    {
      path: "/bar8",
      element:<Mummy name={"Mymmy"} activity={"last seen 1:40pm"} dp={mummy}/>,
    },
    {
      path: "/bar9",
      element:<Ratan name={"Ratan"} activity={"online"} dp={ratan}/>,
    },
    {
      path: "/bar10",
      element:<Chandan name={"Chandan"} activity={"online"} dp={chandan}/>,
    },
    {
      path: "/bar11",
      element:<Umesh name={"Umesh bhai"} activity={"last seen 4:40pm"} dp={umesh}/>,
    },
    {
      path: "/bar12",
      element:<Sonu name={"Sonu bhai"} activity={"last seen yesterday"} dp={sonu}/>,
    },
    {
      path: "/bar13",
      element:<Mama name={"Mama"} activity={"last seen 12:40pm"} dp={mama}/>,
    },
    {
      path: "/bar14",
      element:<Chacha name={"Chacha"} activity={"online"} dp={chacaha}/>,
    },
    {
      path: "/bar15",
      element:<Masi name={"Asha masi"} activity={"online"} dp={mausi}/>,
    },
    {
      path: "/bar16",
      element:<RaniBhabhi name={"Rani Bhabhi"} activity={"last seen 1:40pm"} dp={Satish}/>,
    },
    {
      path: "/bar17",
      element:<Krishna name={"krisshu"} activity={"online"} dp={harsh}/>,
    },
    
  ]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
        <RouterProvider router={router}  />
   </>
);