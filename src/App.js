import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ActivitiesForm from "./Components/Activities/ActivitiesForm";
import CategoriesForm from "./Components/Categories/CategoriesForm";
import LoginForm from "./Components/Auth/LoginForm";
import MembersForm from "./Components/Members/MembersForm";
import NewsForm from "./Components/News/NewsForm";
import SchoolCampaign from "./Campaigns/School/SchoolCampaign";
import SlidesForm from "./Components/Slides/SlidesForm";
import ProjectsForm from "./Components/Projects/ProjectsForm";
import TestimonialForm from "./Components/Testimonials/TestimonialsForm";
import ToysCampaign from "./Campaigns/Toys/ToysCampaign";
import UserForm from "./Components/Users/UsersForm";


function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={} />
          <Route path="/activities/:id" />
          <Route path="/backoffice/create-slide" component={SlidesForm} />
          <Route path="/backoffice/home"/>
          <Route path="/backoffice/members/edit/:id"/>
          <Route path="/backoffice/members/edit" />
          <Route path="/backoffice/news/:id" component={NewsForm} />
          <Route path="/backoffice/news/" component={NewsForm} />
          <Route path="/backoffice/organization" />
          <Route path="/backoffice/organization/edit"/>
          <Route path="/create-activity" component={ActivitiesForm} />
          <Route path="/create-category" component={CategoriesForm} />
          <Route path="/create-member" component={MembersForm} />
          <Route path="/create-news" component={NewsForm} />
          <Route path="/backoffice" />
          <Route path="/backoffice/create-slide" component={SlidesForm} />
          <Route path="/create-project" component={ProjectsForm} />
          <Route path="/create-testimonials" component={TestimonialForm} />
          <Route path="/create-user" component={UserForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/news" />
          <Route path="/novedades/:id" />
          <Route path="/school-campaign" component={SchoolCampaign} />
          <Route path="/toys-campaign" component={ToysCampaign} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;