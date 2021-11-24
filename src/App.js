import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import ActivitiesForm from "./Components/Activities/ActivitiesForm";
import CategoriesForm from "./Components/Categories/CategoriesForm";
import CategoriesListBackoffice from "./Components/Backoffice/CategoriesListBackoffice";
import NewsForm from "./Components/News/NewsForm";
import SlidesForm from "./Components/Slides/SlidesForm";
import TestimonialForm from "./Components/Testimonials/TestimonialsForm";
import UserForm from "./Components/Users/UsersForm";
import SchoolCampaign from "./Campaigns/School/SchoolCampaign";
import ToysCampaign from "./Campaigns/Toys/ToysCampaign";
import MembersForm from "./Components/Members/MembersForm";
import ProjectsForm from "./Components/Projects/ProjectsForm";
import ScreenDashboard from "./Components/Backoffice/ScreenDashboard";
import Content from "./Components/News/Detail/Content";
import Organization from "./Components/Organization/Organization";
import MembersCreateEdit from "./Components/Members/MembersCreateEdit";
import UpdateDataForm from "./Components/Organization/UdpateDataForm";
import ActivitiesDetail from "./Components/Activities/Detail/ActivitiesDetail";
import HomeForm from "./Components/Home/HomeForm";
import NewsDisplay from "./Components/News/NewsDisplay";
import LoginForm from "./Components/Auth/LoginForm";
import SlidesListBo from "./Components/Backoffice/Slides/SlidesListBO";
import ActivitesList from "./Components/Activities/ActivitesList";
import ActivitiesDisplay from "./Components/Activities/ActivitiesDisplay";
import Home from "./Components/Home/Home";
import Members from "./Components/Backoffice/Members/Members";
import CreateMember from "./Components/Backoffice/Members/CreateMember";
import EditMember from "./Components/Backoffice/Members/editMember/EditMember";
import About from "./Components/About";
import UsersListContainer from "./Components/Backoffice/Users/UsersListContainer";
import RegisterForm from "./Components/Auth/RegisterForm";
import Donations from "./Components/Donations/Donations.js";
import NewsListBackOffice from "./Components/Backoffice/NewsListBackOffice";
import Contact from "./Components/Contact";
import NotFound from "./Components/NotFound";

// import "./animatedRouter.css";
import { AnimatedSwitch } from "react-router-transition";
import { bounceTransition, mapStyles } from "./Assets/animatedRouter";

function App() {
  return (
    <>
      <BrowserRouter>
        <AnimatedSwitch
          atEnter={bounceTransition.atEnter}
          atLeave={bounceTransition.atLeave}
          atActive={bounceTransition.atActive}
          mapStyles={mapStyles}
          className="route-wrapper"
        >
          <Route path="/" exact component={Home} />

          <Route path="/activities" component={ActivitiesDisplay} />
          <Route path="/activities/:id" component={ActivitiesDetail} />
          <Route path="/backoffice" exact component={ScreenDashboard} />
          <Route
            exact
            path="/backoffice/activities"
            component={ActivitesList}
          />
          <Route path="/backoffice/organization" component={Organization} />
          <Route
            path="/backoffice/organization/edit"
            component={UpdateDataForm}
          />
          <Route path="/backoffice/home" component={HomeForm} />
          <Route path="/backoffice/slides" component={SlidesListBo} />
          <Route path="/backoffice/create-slide" component={SlidesForm} />

          <Route path="/backoffice/slides-form/:id" exact component={SlidesForm} />
          <Route path="/backoffice/slides-form/" exact component={SlidesForm} />
          <Route
            path="/backoffice/categories"
            component={CategoriesListBackoffice}
          />
          <Route exact path='/backoffice/members' component={Members} />
          <Route path='/backoffice/members/create' component={CreateMember} />
          <Route path='/backoffice/editmember/:id' component={EditMember} />
          <Route
            path="/backoffice/members/edit/:id"
            component={MembersCreateEdit}
          />
          <Route
            path="/backoffice/members/edit"
            component={MembersCreateEdit}
          />
          <Route path="/backoffice/news/:id" component={NewsForm} />
          <Route path="/backoffice/news/" component={NewsListBackOffice} />
          <Route path="/backoffice/organization" component={Organization} />
          <Route
            path="/backoffice/organization/edit"
            component={UpdateDataForm}
          />
          <Route path="/backoffice/users" component={UsersListContainer} />

          <Route path="/contacto" component={Contact} />

          <Route path="/create-activity" component={ActivitiesForm} />
          <Route path="/create-project" component={ProjectsForm} />

          <Route path="/create-category" component={CategoriesForm} />
          <Route path="/create-member" component={MembersForm} />
          <Route path="/create-news" component={NewsForm} />
          <Route path="/create-testimonials" component={TestimonialForm} />
          <Route path="/create-user" component={UserForm} />
          <Route path="/donaciones" component={Donations} />
          <Route path="/login" component={LoginForm} />
          <Route path="/news" component={NewsDisplay} />
          <Route path="/novedades/:id" exact component={Content} />
          <Route path="/nosotros" component={About} />
          <Route path="/register" component={RegisterForm} />

          <Route path="/school-campaign" component={SchoolCampaign} />
          <Route path="/toys-campaign" component={ToysCampaign} />
          <Route component={NotFound} />
        </AnimatedSwitch>
      </BrowserRouter>
    </>
  );
}

export default App;
