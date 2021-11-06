import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ActivitiesForm from "./Components/Activities/ActivitiesForm";
import CategoriesForm from "./Components/Categories/CategoriesForm";
import NewsForm from "./Components/News/NewsForm";
import SlidesForm from "./Components/Slides/SlidesForm";
import TestimonialForm from "./Components/Testimonials/TestimonialsForm";
import UserForm from "./Components/Users/UsersForm";
import SchoolCampaign from "./Campaigns/School/SchoolCampaign";
import ToysCampaign from "./Campaigns/Toys/ToysCampaign";
import MembersForm from "./Components/Members/MembersForm";
import ProjectsForm from "./Components/Projects/ProjectsForm";
import ScreenDashboard from "./Components/Backoffice/ScreenDashboard";
import NewsDetail from "./Components/News/Detail";
import Organization from "./Components/Organization/Organization";
import MembersCreateEdit from "./Components/Members/MembersCreateEdit";
import UpdateDataForm from "./Components/Organization/UdpateDataForm";
import ActivitiesDetail from "./Components/Activities/Detail/ActivitiesDetail";
import HomeForm from "./Components/Home/HomeForm";
import NewsDisplay from "./Components/News/NewsDisplay";
import LoginForm from "./Components/Auth/LoginForm";
import ActivitesList from "./Components/Activities/ActivitesList";


function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/"/>
          <Route path="/activities/:id" component={ActivitiesDetail} />
          <Route exact path="/backoffice" component={ScreenDashboard} />
          <Route exact path="/backoffice/create-slide" component={SlidesForm} />
          <Route exact path="/backoffice/activities" component={ActivitesList}/>
          <Route exact path="/backoffice/create-slide" component={SlidesForm} />
          <Route exact path="/backoffice/home" component={HomeForm} />
          <Route path="/backoffice/members/edit/:id" component={MembersCreateEdit} />
          <Route exact path="/backoffice/members/edit" component={MembersCreateEdit} />
          <Route path="/backoffice/news/:id" component={NewsForm} />
          <Route exact path="/backoffice/news/" component={NewsForm} />
          <Route exact path="/backoffice/organization" component={Organization} />
          <Route exact path="/backoffice/organization/edit" component={UpdateDataForm} />
          <Route exact path="/create-activity" component={ActivitiesForm} />
          <Route exact path="/create-category" component={CategoriesForm} />
          <Route exact path="/create-member" component={MembersForm} />
          <Route exact path="/create-news" component={NewsForm} />
          <Route exact path="/create-project" component={ProjectsForm} />
          <Route exact path="/create-testimonials" component={TestimonialForm} />
          <Route exact path="/create-user" component={UserForm} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/news" component={NewsDisplay} />
          <Route path="/novedades/:id" component={NewsDetail} />
          <Route exact path="/school-campaign" component={SchoolCampaign} />
          <Route exact path="/toys-campaign" component={ToysCampaign} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
