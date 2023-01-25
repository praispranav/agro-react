import React from "react";

export const OnlineOfflineStatus = ({ status }) => {
  if (status)
    return (
      <div className="text-success d-flex align-items-center">
        <div className="w-20-h-20 bg-success rounded-circle"></div>
        <p className="m-0 p-0 ms-2">{" Online"}</p>
      </div>
    );
  else
    return (
      <div className="text-danger d-flex align-items-center">
        <div className="w-20-h-20 bg-danger rounded-circle"></div>
        <p className="m-0 p-0 ms-2">{" Offline"}</p>
      </div>
    );
};

export default OnlineOfflineStatus