import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Assets
// ...nothing yet...

// Components
// ...nothing yet...

// Scenes
import SignIn from './scenes/SignIn/SignIn.js';
import AuthVerify from './scenes/SignIn/AuthVerify.js';
import Loading from './scenes/SignIn/Loading.js';
import Announcement from './scenes/Announcement/index.js';

import Home from './scenes/Home/Home.js';
import Home_Approved_Arthur from './scenes/Home/Home_Approved_Arthur.js';

import ReferralProfile from './scenes/ReferralDetail/ReferralProfile.js';

import Referral_Approved_Profile from './scenes/ReferralDetail/Approved/Referral_Approved_Profile.js';
import Referral_Approved_Review from './scenes/ReferralDetail/Approved/Referral_Approved_Review.js';
import Referral_Approved_Arthur_Profile from './scenes/ReferralDetail/Approved/Referral_Approved_Arthur_Profile.js';
import Referral_Approved_Arthur_Review from './scenes/ReferralDetail/Approved/Referral_Approved_Arthur_Review.js';
import Referral_NeedsReview_Profile from './scenes/ReferralDetail/NeedsReview/Referral_NeedsReview_Profile.js';
import Referral_NeedsReview_Review from './scenes/ReferralDetail/NeedsReview/Referral_NeedsReview_Review.js';
import Referral_Barebones_NeedsReview_Profile from './scenes/ReferralDetail/Barebones/Referral_NoName_NeedsReview_Profile.js';
import Referral_Barebones_NeedsReview_Review from './scenes/ReferralDetail/Barebones/Referral_NoName_NeedsReview_Review.js';
import Referral_Dead_Profile from './scenes/ReferralDetail/Dead/Referral_Dead_Profile.js';
import Referral_Dead_Review from './scenes/ReferralDetail/Dead/Referral_Dead_Review.js';
import Modal_Release_Referral from './scenes/ReferralDetail/_ModalReleaseReferral/index.js';

import AccountProfile from './scenes/Account/Profile';
import AccountSettings from './scenes/Account/Settings.js';

import Support from './scenes/Support/Support.js';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/signin" component={SignIn}/>
          <Route path="/signin-verify" component={AuthVerify}/>
          <Route path="/loading" component={Loading}/>

          <Route path="/announcement" component={Announcement}/>

          <Route exact path="/" component={Home}/>
          <Route exact path="/home-approved-arthur" component={Home_Approved_Arthur}/>

          <Route path="/referral/:id" component={ReferralProfile}/>

          <Route path="/support" component={Support}/>

          <Route path="/referral-approved-profile" component={Referral_Approved_Profile}/>
          <Route path="/referral-approved-review" component={Referral_Approved_Review}/>
          <Route path="/referral-approved-arthur-profile" component={Referral_Approved_Arthur_Profile}/>
          <Route path="/referral-approved-arthur-review" component={Referral_Approved_Arthur_Review}/>

          <Route path="/referral-needsReview-profile" component={Referral_NeedsReview_Profile}/>
          <Route path="/referral-needsReview-review" component={Referral_NeedsReview_Review}/>
          <Route path="/referral-barebones-needsReview-profile" component={Referral_Barebones_NeedsReview_Profile}/>
          <Route path="/referral-barebones-needsReview-review" component={Referral_Barebones_NeedsReview_Review}/>
          <Route path="/referral-dead-profile" component={Referral_Dead_Profile}/>
          <Route path="/referral-dead-review" component={Referral_Dead_Review}/>
          <Route path="/modal-release-referral" component={Modal_Release_Referral}/>

          <Route path="/account/profile" component={AccountProfile}/>
          <Route path="/account/settings" component={AccountSettings}/>

        </div>
      </Router>
    );
  }
}

export default App;
