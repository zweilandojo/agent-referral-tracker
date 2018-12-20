import React from 'react';
import { Link } from 'react-router-dom';

// Components
import AppHeader from '../../components/AppHeader/index.js';
import AgentHomeBanner from '../../components/AgentHomeBanner/index.js';
import Milestones from '../../components/Milestones/index.js';
// import ModalManager from '../../components/ModalManager/index.js'


// Assets
import iconPerson from '../../assets/images/icon-person.svg';
import iconCheckboxChecked from '../../assets/images/icon-checkmark-checked.svg';
import iconCheckboxgrey from '../../assets/images/icon-checkmark-checked-gray.svg';
import iconChevronRightgrey from '../../assets/images/icon-chevron-right-gray.svg';

class HomeNeedsReview extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="app">
        <AppHeader />
        <AgentHomeBanner firstName="Matt" temperature="74" />

        <main className="container mx-auto px-5 max-w-lg">
          <div className="referral-tracking mb-12">
            <header className="mb-4">
              <h3 className="mb-2 text-3xl w-1/2">
                Referrals
              </h3>
              <p className="text-grey-dark leading-loose text-sm">
                Review by Wed, Dec 27
              </p>
            </header>
            <div className="">
            {/* REFERRAL TRACKING LIST */}
            <div>
              <Link to="/referral-needsReview-review" className="py-6 border-b border-grey-light flex referral-list_needs-review">
                <div className="avatar avatar-m rounded-full flex items-center justify-center h-10 w-10 bg-red-light text-white">
                  <div className="avatar-initials">S</div>
                </div>
                <div className="flex-initial ml-4">
                  <span className="text-lg block mb-1">
                    Sofia Perez
                  </span>
                  <div>
                    <img src={iconCheckboxChecked} className="h-3 w-3 mr-px" alt="" />
                    <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                    <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                    <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                    <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                    <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                    <span className="ml-1 inline text-grey-dark text-xs">Connected</span>
                  </div>
                </div>
                <div className="flex-1 text-right">
                  <div>
                    <span className="text-red text-base mr-1">Review</span>
                  </div>
                </div>
              </Link>

              <Link to="/referral-barebones-needsReview-review" className="py-6 border-b border-grey-light flex referral-list_needs-review">
                <div className="avatar avatar-m rounded-full flex items-center justify-center h-10 w-10 bg-red-light text-white">
                  <img src={iconPerson} className="avatar-image" alt="avatar" />
                  <div className="avatar-initials"></div>
                </div>
                <div className="flex-initial ml-4">
                  <span className="text-lg block mb-1">
                    15125551234
                  </span>
                  <div>
                    <img src={iconCheckboxChecked} className="h-3 w-3 mr-px" alt="" />
                    <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                    <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                    <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                    <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                    <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                    <span className="ml-1 inline text-grey-dark text-xs">
                      Connected
                    </span>
                  </div>
                </div>
                <div className="flex-1 text-right">
                  <div>
                    <span className="text-red text-base mr-1">Review</span>
                  </div>
                </div>
              </Link>

              <Link to="/referral-dead-review" className="py-6 flex referral-list_dead">
                <div className="avatar avatar-m rounded-full flex items-center justify-center h-10 w-10 bg-grey-light text-white">
                  <img src={iconPerson} className="avatar-image" alt="avatar" />
                  <div className="avatar-initials"></div>
                </div>
                <div className="flex-initial ml-4">
                  <span className="text-lg block mb-1">
                    15128971234
                  </span>
                  <div>
                    <img src={iconCheckboxgrey} className="h-3 w-3 mr-px" alt="" />
                    <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                    <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                    <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                    <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                    <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                    <span className="ml-1 inline text-grey-dark text-xs">Dead</span>
                  </div>
                </div>
                <div className="flex-1 text-right">
                  <div>
                    <span className="text-red text-sm mr-1"></span>
                    <img src={iconChevronRightgrey} className="svg-grey" alt="" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
          </div>

          <Milestones talk="3" set="0" met="0" offer="0" accept="0" transact="0" />

          <footer className="mb-12 flex">
            <Link to="/support" className="w-full text-center mr-4 block py-6 px-4 rounded-full text-lg">
              Support
            </Link>{/*
            <Link to="/" className="w-1/2 md:w-1/2 text-center inline-block py-6 px-4 border border-grey-light rounded-full text-lg">
              Send Feedback
            </Link>*/}
          </footer>
        </main>

        {/* <ModalManager /> */}


      </div>
    )
  }
}
export default HomeNeedsReview;
