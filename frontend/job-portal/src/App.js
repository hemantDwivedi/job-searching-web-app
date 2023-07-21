import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderComponent from './component/HeaderComponent';
import MainContentComponent from './component/MainContentComponent';
import JobsComponent from './component/JobsComponent';
import JoinCommuniteComponent from './component/JoinCommunityComponent'
import RegisterComponent from './component/RegisterComponent'
import LoginComponent from './component/LoginComponent'
import FooterComponent from './component/FooterComponent';

function App() {
  return (
    <div>
      <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route path='/' element={<MainContentComponent />} />
        <Route path='/home' element={<MainContentComponent />} />
        <Route path='/jobs' element={<JobsComponent />} />
        <Route path='/join-community' element={<JoinCommuniteComponent />} />
        <Route path='/register' element={<RegisterComponent />} />
        <Route path='/login' element={<LoginComponent />} />
      </Routes>
      <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
