import React from "react";

const Header = () => {
  return (
    <header>
      <nav>
        <center>
          <div class="top">
            <a href="/home" class="left">
              Github
            </a>
            <a href="/home" class="left">
              Docs
            </a>
            <a href="/home" class="main">
              <img
                src="https://dappswallet-connect.web.app/static/media/logo.dfa25e470b69d81428be54242b6c9bd1.svg"
                alt="logo"
              />
            </a>
            <a href="/home" class="left">
              Wallets
            </a>
            <a href="/home" class="left">
              Apps
            </a>
          </div>
        </center>
      </nav>
    </header>
  );
};

export default Header;
