import React from 'react';
import { AppStoreLink } from "../appstore-link";
import { PlayStoreLink } from "../playstore-link";

const Download = () => (
  <div className="pt-20 pb-10" style={{ background: "linear-gradient(212.43deg, #0F0E14 1.62%, #0F0E14 34.14%, #272239 65.56%, #563888 97.64%)" }}>
    <div>
      <h1 className="text-lg leading-8 text-zinc-200 text-center pb-7">
        Ready to simplify group expenses? <br />
        Download now and get started!
      </h1>

      <div className="flex justify-center gap-4 mt-4 lg:flex-1 items-left">
        <AppStoreLink link="https://apps.apple.com/in/app/amigo/id6483936159" />
        <PlayStoreLink link="https://play.google.com/store/apps/details?id=app.amigo.app&hl=en-US" />
      </div>
    </div>
  </div>
);

export default Download;