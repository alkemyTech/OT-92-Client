import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ActivitiesDetail from './Components/Activities/Detail/ActivitiesDetail';
import ActivitiesForm from './Components/Activities/ActivitiesForm';
import CategoriesForm from './Components/Categories/CategoriesForm';
import HomeForm from './Components/Home/HomeForm';
import LoginForm from './Components/Auth/LoginForm';
import MembersCreateEdit from './Components/Members/MembersCreateEdit';
import MembersForm from './Components/Members/MembersForm';
import NewsDetail from './Components/News/Detail/Index';
import NewsDisplay from './Components/News/NewsDisplay';
import NewsForm from './Components/News/NewsForm';
import Organization from './Components/Organization/Organization';
import ProjectsForm from './Components/Projects/ProjectsForm';
import SchoolCampaign from './Campaigns/School/SchoolCampaign';
import ScreenDashboard from './Components/Backoffice/ScreenDashboard';
import SlidesForm from './Components/Slides/SlidesForm';
import TestimonialForm from './Components/Testimonials/TestimonialsForm';
import ToysCampaign from './Campaigns/Toys/ToysCampaign';
import UpdateDataForm from './Components/Organization/UdpateDataForm';
import UserForm from './Components/Users/UsersForm';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={} />
          <Route path="/activities/:id" component={ActivitiesDetail} />
          <Route path="/backoffice/create-slide" component={SlidesForm} />
          <Route path="/backoffice/home" component={HomeForm} />
          <Route path="/backoffice/members/edit/:id" component={MembersCreateEdit} />
          <Route path="/backoffice/members/edit" component={MembersCreateEdit} />
          <Route path="/backoffice/news/:id" component={NewsForm} />
          <Route path="/backoffice/news/" component={NewsForm} />
          <Route path="/backoffice/organization" component={Organization} />
          <Route path="/backoffice/organization/edit" component={UpdateDataForm} />
          <Route path="/create-activity" component={ActivitiesForm} />
          <Route path="/create-category" component={CategoriesForm} />
          <Route path="/create-member" component={MembersForm} />
          <Route path="/create-news" component={NewsForm} />
          <Route path="/backoffice" component={ScreenDashboard} />
          <Route path="/backoffice/create-slide" component={SlidesForm} />
          <Route path="/create-project" component={ProjectsForm} />
          <Route path="/create-testimonials" component={TestimonialForm} />
          <Route path="/create-user" component={UserForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/news" component={NewsDisplay}/>
          <Route path="/novedades/:id" component={NewsDetail} />
          <Route path="/school-campaign" component={SchoolCampaign} />
          <Route path="/toys-campaign" component={ToysCampaign} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
