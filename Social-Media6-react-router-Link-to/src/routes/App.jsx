import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideBar from '../components/SideBar';
import CreatePost from '../components/CreatePost';
import PostList from '../components/PostList';
import { useState } from 'react';
import PostListProvider from '../store/post-store';
import { Outlet } from 'react-router-dom';
function App() {

  const [selectTab,setSelectTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="app_container">
        <SideBar selectTab={selectTab} setSelectTab={setSelectTab}></SideBar>
        <div className='header_footer'>
          <Header></Header>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  )
}

export default App
