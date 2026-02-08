function login() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("User logged in");
      resolve({ id: 1 });
    }, 1000);
  });
}

function getProfile(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Profile loaded");
      resolve({ id: 10 });
    }, 1000);
  });
}

function getSettings(profileId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Settings loaded");
      resolve({ theme: "dark" });
    }, 1000);
  });
}

async function loadData() {
  let user = await login();
  let profile = await getProfile(user.id);
  let settings = await getSettings(profile.id);
  console.log(settings);
}

loadData();
