import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Register from './components/auth/Register';
import EmailVerify from './components/auth/EmailVerify';
import Dashborad from './components/dashboard/Dashborad';
import Login from './components/auth/Login';
import AdminLogin from './components/auth/AdminLogin';
import ArticalDetails from './components/home/ArticalDetails';
import HomeArtical from './components/home/HomeArtical';
import CategoryArtical from './components/home/CategoryArtical';
import TagArtical from './components/home/TagArtical';
import DashboradArticle from './components/dashboard/DashboradArticle';
import DashboradIndex from './components/dashboard/DashboradIndex';
import ArticleEdit from './components/dashboard/ArticleEdit';
import AllCategory from './components/dashboard/AllCategory';
import AddCategory from './components/dashboard/AddCategory';
import AllTag from './components/dashboard/AllTag';
import AddTag from './components/dashboard/AddTag';
import AllSubAdmin from './components/dashboard/AllSubAdmin';
import AllUser from './components/dashboard/AllUser';
import SubadminProfile from './components/dashboard/SubadminProfile';
import DashComments from './components/dashboard/DashComments';
import ArticleAdd from './components/dashboard/ArticleAdd';
import ProtectRoute from './components/auth/ProtectRoute';
import { useDispatch } from 'react-redux';
import { get_all_category } from './store/Reducers/categoryReducer';
import { get_tag } from './store/Reducers/tagReducer';


const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const obj = {
      parPage: '',
      page: '',
      searchValue: ''
    };

    dispatch(get_all_category(obj));
    dispatch(get_tag(obj));
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path='/admin/login' element={<AdminLogin />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />

        <Route path='/' element={<Home />} >
          <Route path='artical/:currentPage?' element={<HomeArtical />} />
          <Route path='artical/details/:slug' element={<ArticalDetails />} />
          <Route path='artical/category/:categorySlug/:currentPage?' element={<CategoryArtical />} />
          <Route path='artical/tag/:tagSlug/:currentPage?' element={<TagArtical />} />
          <Route path='artical/search/:searchValue' element={<HomeArtical />} />
        </Route>

        <Route path='/register/email-verify' element={<EmailVerify />} />

        <Route path='/dashboard' element={<ProtectRoute />} >
          <Route path='' element={<Dashborad />} >
            <Route path='' element={<DashboradIndex />} />
            <Route path='all-article/:currentPage?' element={<DashboradArticle />} />
            <Route path='article-add' element={<ArticleAdd />} />
            <Route path='article/edit/:articleSlug' element={<ArticleAdd />} />
            <Route path='all-category/:currentPage?' element={<AllCategory />} />
            <Route path='add-category' element={<AddCategory />} />
            <Route path='category/edit/:cateSlug' element={<AddCategory />} />

            <Route path='all-tag/:currentPage?' element={<AllTag />} />
            <Route path='add-tag' element={<AddTag />} />
            <Route path='tag/edit/:tagSlug' element={<AddTag />} />

            <Route path='all-sub-admin/:currentPage?' element={<AllSubAdmin />} />
            <Route path='all-user/:currentPage?' element={<AllUser />} />

            <Route path='sub-admin-profile/:adminId' element={<SubadminProfile />} />

            <Route path='comments/:currentPage?' element={<DashComments />} />

          </Route>
        </Route>

      </Routes>
    </>

  )
}

export default App;