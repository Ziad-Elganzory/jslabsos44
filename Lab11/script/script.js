document.addEventListener("DOMContentLoaded", async () => {
    await fetchData();
  });
  
  async function fetchData() {
    try {
      var x = prompt("Enter ID");
      const userData = await makeHttpRequest(
        "GET",
        `https://dummyjson.com/users/${x}`
      );
      displayUserData(userData);
    } catch (error) {
      console.error("Error fetching user data:", error);
      document.getElementById("userData").innerHTML =
        "<p>Error fetching user data</p>";
    }
  }
  
  function makeHttpRequest(method, url) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
  
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            const userData = JSON.parse(xhr.responseText);
            resolve(userData);
          } else {
            reject(xhr.statusText);
          }
        }
      };
  
      xhr.open(method, url, true);
      xhr.send();
    });
  }
  
  function displayUserData(userData) {
    const userDataContainer = document.getElementById("userData");
    userDataContainer.innerHTML = `
                  <p>FullName : ${userData.firstName} ${userData.lastName}</p>
                  <p>Email: ${userData.email}</p>
                  <p>Address: ${userData.address.address}</p>
                  <p>City: ${userData.address.city}</p>
                  <img src="${userData.image}" alt="User Image" width="150">`;                  
  }
  