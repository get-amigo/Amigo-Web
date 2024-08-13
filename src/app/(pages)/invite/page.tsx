"use client";
import React, { useEffect, useState } from "react";
import jwt from "jsonwebtoken";

function extractGroupIdFromUrl(): string | null {
  const url = window.location.href;
  const urlParams = new URLSearchParams(url.split("?")[1]);
  const groupId = urlParams.get("groupId");
  return groupId;
}

function openStore() {
  const userAgent = navigator.userAgent;
  if (/iPod|iPhone|iPad|Mac OS/.test(userAgent)) {
    window.location.href = "https://apps.apple.com/in/app/amigo/id6483936159";
  } else if (/Android|Windows/.test(userAgent)) {
    window.location.href =
      "https://play.google.com/store/apps/details?id=app.amigo.app&hl=en_IN";
  }
}

function extractRedirectPath(): string {
  const groupId = window.location.hash.substring(2); // Removes #/
  return groupId;
}

function joinGroup() {
  const deepLink = `amigo://${extractRedirectPath()}`;
  window.location.replace(deepLink);
}

const GroupData = () => {
  const [groupName, setGroupName] = useState<string | null>("...");
  const [groupMemeberCount, setGroupMemeberCount] = useState<number | null>();

  useEffect(() => {
    const groupId = extractGroupIdFromUrl();
    if (groupId) {
      const data = jwt.decode(groupId);
      if (data && typeof data === "object") {
        setGroupName(data.name as string);
        setGroupMemeberCount(data.memberCount as number);
      }
    }
  }, []);

  const icons = [];

  if (groupMemeberCount) {
    for (let i = 0; i < groupMemeberCount && i < 3; i++) {
      icons.push(<UserIcon key={i} />);
    }
  }

  return (
    <div className="justify-center items-center flex flex-col mt-16">
      <div className="w-32 h-32 rounded-full overflow-hidden border-4 flex bg-[#8740FD]">
        <img src="/images/image 519.png" className="w-16 m-auto" />
      </div>
      <div className="font-semibold text-xl mt-3">{groupName}</div>
      <div className="font-light text-xl">Amigo group invite</div>
      <div className="flex flex-row mt-4 ml-4 min-h-9">
        {/* user */}
        {icons}

        {/*extra count */}
        {groupMemeberCount && groupMemeberCount > 3 && (
          <div className="w-9 h-9 rounded-full overflow-hidden border-2 -ml-4 bg-white flex">
            <span className="text-[#8740FD] font-medium text-sm m-auto">
              +{groupMemeberCount - 3}
            </span>
          </div>
        )}

        {groupMemeberCount ? (
          <div className="font-light text-sm ml-3 mt-auto">
            {groupMemeberCount} members
          </div>
        ) : (
          <div className="font-semibold text-xl -ml-4 mt-auto">...</div>
        )}
      </div>
    </div>
  );
};

const UserIcon = () => {
  return (
    <div className="w-9 h-9 rounded-full overflow-hidden border-2 -ml-4 flex bg-[#8740FD]">
      <img src="/images/user.png" className="w-6 m-auto " />
    </div>
  );
};

const InvitePage = () => {
  useEffect(() => {
    joinGroup();
    const timer = setTimeout(() => {
      openStore();
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#0F0E14] h-screen text-white">
      {/* header */}
      <div className="justify-center items-center flex flex-row">
        <div className="mt-16 flex flex-row">
          <img src="/images/logo.png" className="w-11" />
          <div className="font-semibold text-xl my-auto ml-2">Amigo</div>
        </div>
      </div>

      {/* group information */}
      <GroupData />

      {/* join button */}
      <div className="flex flex-row justify-center mt-10">
        <div
          className="px-5 py-3 bg-[#8740FD] text-xl font-medium rounded-3xl hover:cursor-pointer select-none"
          onClick={joinGroup}
        >
          Join Group
        </div>
      </div>

      {/* footer buttons */}
      <footer className="flex flex-col items-center mt-16">
        <div className="text-xl font-light">Don’t have Amigo yet?</div>
        <div
          className="flex flex-row mt-6 hover:cursor-pointer"
          onClick={openStore}
        >
          <div className="text-xl font-medium text-[#8740FD] select-none">
            Download
          </div>
          <img src="/images/download.png" className="w-5 h-5 m-auto ml-3" />
        </div>
      </footer>
    </div>
  );
};

export default InvitePage;
