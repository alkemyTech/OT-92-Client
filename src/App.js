import React, { Suspense, lazy }  from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import './Components/LazyLoadImages/LazyLoad.css';
const ActivitiesForm = lazy (() => import("./Components/Activities/ActivitiesForm"));
const CategoriesForm = lazy (() => import("./Components/Categories/CategoriesForm")) ;
const CategoriesListBackoffice = lazy (() => import('./Components/Backoffice/CategoriesListBackoffice')) ;
const NewsForm = lazy (() => import("./Components/News/NewsForm")) ;
const SlidesForm = lazy (() => import("./Components/Slides/SlidesForm")) ;
const TestimonialForm = lazy (() => import("./Components/Testimonials/TestimonialsForm")) ;
const UserForm = lazy (() => import("./Components/Users/UsersForm")) ;
const SchoolCampaign = lazy (() => import("./Campaigns/School/SchoolCampaign")) ;
const ToysCampaign = lazy (() => import("./Campaigns/Toys/ToysCampaign")) ;
const MembersForm = lazy (() => import("./Components/Members/MembersForm")) ;
const ProjectsForm = lazy (() => import("./Components/Projects/ProjectsForm")) ;
const ScreenDashboard = lazy (() => import("./Components/Backoffice/ScreenDashboard")) ;
const NewsDetail = lazy (() => import("./Components/News/Detail")) ;
const Organization = lazy (() => import("./Components/Organization/Organization")) ;
const MembersCreateEdit = lazy (() => import("./Components/Members/MembersCreateEdit")) ;
const UpdateDataForm = lazy (() => import("./Components/Organization/UdpateDataForm")) ;
const ActivitiesDetail = lazy (() => import("./Components/Activities/Detail/ActivitiesDetail")) ;
const HomeForm = lazy (() => import("./Components/Home/HomeForm")) ;
const NewsDisplay = lazy (() => import("./Components/News/NewsDisplay")) ;
const LoginForm = lazy (() => import("./Components/Auth/LoginForm")) ;
const SlidesListBo = lazy (() => import("./Components/Backoffice/Slides/SlidesListBO")); 
const ActivitesList = lazy (() => import("./Components/Activities/ActivitesList")) ;
const ActivitiesDisplay = lazy (() => import("./Components/Activities/ActivitiesDisplay")) ;
const Home = lazy (() => import("./Components/Home/Home")) ;
const MembersList = lazy (() => import('./Components/About/MembersList')) ;
const Members = lazy (() => import('./Components/Backoffice/Members/Members')) ;
const CreateMember = lazy (() => import('./Components/Backoffice/Members/CreateMember')) ;
const EditMember = lazy (() => import('./Components/Backoffice/Members/editMember/EditMember')) ;
const About = lazy (() => import('./Components/About'));
const UsersListContainer = lazy (() => import("./Components/Backoffice/Users/UsersListContainer")) ;
const Donations = lazy (() => import('./Components/Donations/Donations.js')) ;
const NewsListBackOffice = lazy (() => import('./Components/Backoffice/NewsListBackOffice')) ;

function App() {
  return (
    <>
      <BrowserRouter>
      <Suspense fallback={<div class="lds-dual-ring w-100 d-flex justify-content-center mt-5"></div>}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/activities/:id" component={ActivitiesDetail} />
          <Route exact path="/backoffice"  component={ScreenDashboard} />
          <Route exact path="/backoffice/activities" component={ActivitesList}/>
          <Route path="/backoffice/organization" component={Organization} />
          <Route path="/backoffice/organization/edit" component={UpdateDataForm} />
          <Route path="/backoffice/home" component={HomeForm} />
          <Route path="/backoffice/slides" component={SlidesListBo} />
          <Route path="/backoffice/create-slide" component={SlidesForm} />
          <Route
            path='/backoffice/categories'
            component={CategoriesListBackoffice}
          />
          <Route exact path='/backoffice/members' component={Members}/>
          <Route exact path='/backoffice/memberslist' component={MembersList}/>
          <Route path='/backoffice/members/create' component={CreateMember} />
         <Route path='/backoffice/editmember/:id' component={EditMember} />
          <Route
            path='/backoffice/members/edit/:id'
            component={MembersCreateEdit}
          />
          <Route
            path='/backoffice/members/edit'
            component={MembersCreateEdit}
          />
          <Route path='/backoffice/news/:id' component={NewsForm} />
          <Route path='/backoffice/news/' component={NewsListBackOffice} />
          <Route path='/backoffice/organization' component={Organization} />
          <Route
            path='/backoffice/organization/edit'
            component={UpdateDataForm}
          />
          <Route path='/backoffice/users' component={UsersListContainer} />
          <Route path="/create-activity" component={ActivitiesForm} />
          <Route path="/create-project" component={ProjectsForm} />
          <Route path='/create-category' component={CategoriesForm} />
          <Route path='/create-member' component={MembersForm} />
          <Route path='/create-news' component={NewsForm} />
          <Route path='/create-testimonials' component={TestimonialForm} />
          <Route path='/create-user' component={UserForm} />
          <Route path="/donaciones" component={Donations} />
          <Route path="/login" component={LoginForm} />
          <Route path="/news" component={NewsDisplay} />
          <Route path="/novedades/:id" component={NewsDetail} />
          <Route path="/nosotros" component={About} />
          <Route path="/school-campaign" component={SchoolCampaign} />
          <Route path="/toys-campaign" component={ToysCampaign} />
          <Route path="/activities" component={ActivitiesDisplay} />
        </Switch>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
