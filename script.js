const button = document.getElementById("loadUsersBtn");
const userList = document.getElementById("userList");

button.addEventListener("click", getUsers);

async function getUsers() {
  userList.textContent = "Loading users...";

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    if (!response.ok) {
      throw new Error("Failed to retrieve users");
    }

    const users = await response.json();
    console.log(users);

    userList.innerHTML = "";

    users.forEach(function (user) {
      const card = document.createElement("div");
      card.className = "user-card";

      const name = document.createElement("p");
      name.textContent = user.name;

      const email = document.createElement("p");
      email.textContent = user.email;

      const city = document.createElement("p");
      city.textContent = user.address.city;

      card.append(name, email, city);
      userList.appendChild(card);
    });
  } catch (error) {
    userList.textContent = "Error: " + error.message;
  }
}