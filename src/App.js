import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './components/homepage';
import SideButtons from './components/sideButtons/sideButtons';
import CommHistory from './components/commHistory/commHistory';
import NotablePeople from './components/notablePeople/notablePeople';
import MyNavbar from './components/navbar';
import Footer from "./components/footer";
import ContactUs from './components/contactUs/contact';
import CommLinks from './components/commLinks/commLinks';
import Photos from './components/gallery/photos/Photos.js';
import EventsPage from './components/events/events';
import Volunteer from './components/volunteer/volunteer';
import Careers from './components/careers/careers'
import Facility from './components/facility/facility';
import Donations from './components/donations/donations';
import Governace from './components/governace/governace';
import Kids from './components/kids/kids';
import Presentations from './components/presentations/presentations';
import Programming from './components/programming/programming';
import Rentals from './components/rentals/rentals';
import Videos from './components/videos/videos';
import Brochures from './components/brochures/brochures';
import Culture from './components/brochures/subpages/culture';
import Dailylife from './components/brochures/subpages/dailylife';
import Education from './components/brochures/subpages/education';
import Museum from './components/brochures/subpages/museum';
import Sackville from './components/brochures/subpages/sackville';
import Figures from './components/brochures/subpages/figures'
import Kitchens from './components/brochures/subpages/kitchens'
import Attractions from './components/brochures/subpages/attractions'
import Trades from './components/brochures/subpages/trades'
import Geneology from './components/geneology/geneology';
import Artifacts from './components/artifacts/artifacts';

function App() {
  return (
    <div className="App">
      <div id="grid">
      <BrowserRouter>
        <div id="header">
        <MyNavbar />
        </div>
        <div id="content">
        <SideButtons/>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
          <Route path="/links" element={<CommLinks />}></Route>
          <Route path="/history" element={<CommHistory />}></Route>
          <Route path="/artifacts" element={<Artifacts />}></Route>
          <Route path='/notablepeople' element={<NotablePeople />}></Route>
          <Route path="/geneology" element={<Geneology/>}></Route>
          <Route path='/photo' element={<Photos />}></Route>
          <Route path='/events' element={<EventsPage />}></Route>
          <Route path='/careers' element={<Careers />}></Route>
          <Route path='/volunteer' element={<Volunteer />}></Route>
          <Route path='/donations' element={<Donations />}></Route>
          <Route path='/facility' element={<Facility />}></Route>
          <Route path='/governance' element={<Governace />}></Route>
          <Route path='/kids' element={<Kids />}></Route>
          <Route path='/presentations' element={<Presentations />}></Route>
          <Route path='/programming' element={<Programming />}></Route>
          <Route path='/rentals' element={<Rentals />}></Route>
          <Route path='/videos' element={<Videos />}></Route>
          <Route path='/brochures' element={<Brochures />}/>
          <Route path='/culture' element={<Culture />}/>
          <Route path='/daily-life' element={<Dailylife />}/>
          <Route path='/education' element={<Education />}/>
          <Route path='/museum-and-surrounding-area' element={<Museum />}/>
          <Route path='/historic-sackville-and-beaverbank' element={<Sackville />}/>
          <Route path='/historical-figures' element={<Figures />}/>
          <Route path='/kitchens' element={<Kitchens />}/>
          <Route path='/sackville-attractions' element={<Attractions />}/>
          <Route path='/transportation-and-trades' element={<Trades />}/>
        </Routes>
        </div>
        <div id="footer">
        <Footer />
        </div>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;