import React, { Component } from "react";
// import { Switch, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./App.css";
import Home from "./pages/homes/Home";
import AllCategories from "./pages/categories/AllCategories";
import AllLocations from "./pages/categories/AllLocations";
import TopPlaces from "./pages/categories/TopPlaces";
import ListingGrid from "./pages/listings/ListingGrid";
// import ListingList from "./pages/listings/ListingList";
import ListMapView from "./pages/listings/ListMapView";
import ListMapView2 from "./pages/listings/ListMapView2";
import ListLeftSidebar from "./pages/listings/ListLeftSidebar";
import ListRightSidebar from "./pages/listings/ListRightSidebar";
import ListingDetails from "./pages/listings/ListingDetails";
import MyProfile from "./pages/listings/MyProfile";
// import AddListing from "./pages/listings/AddListing";
import UserProfile from "./components/other/account/UserProfile";
import TopAuthors from "./pages/TopAuthors";
import Dashboard from "./pages/dashboard/Dashboard";
import Booking from "./pages/dashboard/Booking";
import BookingConfirmation from "./pages/dashboard/BookingConfirmation";
import Invoice from "./pages/dashboard/Invoice";
import PricingPlan from "./pages/PricingPlan"; 
import About from "./pages/About";
import PrivacyPolicy from "./pages/Privacy-policy";
import TermsConditions from "./pages/TermsConditions";
import Faq from "./pages/FAQ";
import Contact from "./pages/Contact";
import RecoverPassword from "./pages/RecoverPassword";
import BlogFullWidth from "./pages/blogs/BlogFullWidth";
import BlogGrid from "./pages/blogs/BlogGrid";
import BlogLeftSidebar from "./pages/blogs/BlogLeftSidebar";
import BlogRightSidebar from "./pages/blogs/BlogRightSidebar";
import BlogDetail from "./pages/blogs/BlogDetail";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Error from "./pages/Error";
import HowIrWorks from "./pages/blank/HowIrWorks";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Route>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/categories" component={AllCategories} />
            <Route path="/all-locations" component={AllLocations} />
            <Route path="/top-place" component={TopPlaces} />
            <Route path="/list" component={ListingGrid} />
            <Route path="/list-map-view" component={ListMapView} />
            <Route path="/list-map-view2" component={ListMapView2} />
            <Route path="/list-left-sidebar" component={ListLeftSidebar} />
            <Route path="/list-right-sidebar" component={ListRightSidebar} />
            <Route path="/profile" component={ListingDetails} />
            <Route path="/myprofile" component={MyProfile} />
            <Route path="/user-profile" component={UserProfile} />
            <Route path="/top-author" component={TopAuthors} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/booking" component={Booking} />
            <Route path="/booking-confirmation" component={BookingConfirmation} />
            <Route path="/invoice" component={Invoice} />
            <Route path="/pricing" component={PricingPlan} />
            <Route path="/about-us" component={About} />
            <Route path="/privacy-policy" component={PrivacyPolicy} />
            <Route path="/terms-conditions" component={TermsConditions} />
            <Route path="/faq" component={Faq} />
            <Route path="/contact" component={Contact} />
            <Route path="/recover" component={RecoverPassword} />
            <Route path="/blog-full-width" component={BlogFullWidth} />
            <Route path="/blog" component={BlogGrid} />
            <Route path="/blog-left-sidebar" component={BlogLeftSidebar} />
            <Route path="/blog-right-sidebar" component={BlogRightSidebar} />
            <Route path="/blog-single" component={BlogDetail} />
            <Route path="/login" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/how-it-works" component={HowIrWorks} />
            <Route component={Error} />
          </Switch>
        </Route>
      </div>
    );
  }
}

// about to : about-us
// all-categories to: categories
// listing-grid to : list
// contact to: contact-us
// blog-grid to: blog

export default App;
