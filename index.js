const timeUpdate = () => {
  const now = new Date();
  const utcTime = now.toUTCString();
  document.getElementById("utc_time").textContent = `Current Time:${utcTime}`;
};

window.onload = timeUpdate;
