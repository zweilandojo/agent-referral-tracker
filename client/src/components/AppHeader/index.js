import React from 'react';
import { Link } from 'react-router-dom';

import logoBlueCircle from '../../assets/images/logo-ojo-bg-blue.png';

const AppHeader = () => (
  <header className="app-header flex content-start flex-wrap">
    <div className="w-1/3">
      {/* Nothing. Waiting for future menu. */}
    </div>
    <div className="w-1/3 text-center align-middle">
      <Link to="/" className="inline-block my-4">
        <img src={logoBlueCircle} className="w-8 h-8" alt="OJO Logo" />
      </Link>
    </div>
    <div className="w-1/3 text-right align-middle app-header-ctas">
      <Link className="block p-6" to="/support">
        Support
      </Link>
    </div>
  </header>
)

export default AppHeader;
