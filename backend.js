// Simulasi database user
const users = {
  "admin": { password: "admin123", role: "Super Admin" },
  "user": { password: "user123", role: "User" }
};

// Konten default (dapat diubah oleh Super Admin)
let homeContent = "  ";
let aboutContent = `
  <div>
    <h2>About Us</h2>
    <div class="profiles">
      <div class="profile">
        <img src="aldiotira.jpg" alt="Aldiotira Karisma" class="profile-img">
        <p><strong>Nama</strong>: Aldiotira Karisma</p>
        <p><strong>Email</strong>: aldiotirakarisma@gmail.com</p>
        <p><strong>Medsos</strong>: @aldiotirakarisma</p>
        <p><strong>Position</strong>: Anjay</p>
      </div>
      <div class="profile">
        <img src="khaira.jpg" alt="Khaira Najla" class="profile-img">
        <p><strong>Nama</strong>: Khaira Najla</p>
        <p><strong>Email</strong>: khairanajla@gmail.com</p>
        <p><strong>Medsos</strong>: @khaira_</p>
        <p><strong>Position</strong>: Anjay</p>
      </div>
      <div class="profile">
        <img src="shevira.jpg" alt="Shevira Feby Christavia" class="profile-img">
        <p><strong>Nama</strong>: Shevira Feby Christavia</p>
        <p><strong>Email</strong>: shevira.feby1@gmail.com</p>
        <p><strong>Medsos</strong>: @shevirafc</p>
        <p><strong>Position</strong>: Developer</p>
      </div>
    </div>
  </div>`;

// Fungsi login
function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const loginError = document.getElementById('loginError');

  if (users[username] && users[username].password === password) {
    sessionStorage.setItem('role', users[username].role);
    sessionStorage.setItem('username', username);
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
    showHome();
  } else {
    loginError.innerText = 'Invalid username or password';
  }
}

// Fungsi logout
function logout() {
  sessionStorage.clear();
  document.getElementById('dashboard').style.display = 'none';
  document.getElementById('loginPage').style.display = 'block';
}

// Tampilkan Home
function showHome() {
  const role = sessionStorage.getItem('role');
  const content = document.getElementById('content');

  if (role === "Super Admin") {
    content.innerHTML = `
      <h2>What Do You Think?</h2>
      <textarea id="homeEditor" rows="4" cols="50">${homeContent}</textarea><br>
      <button onclick="saveHome()">Save</button>`;
  } else {
    content.innerHTML = `<h2>Home</h2><p>${homeContent}</p>`;
  }
}

// Simpan Home (Super Admin)
function saveHome() {
  homeContent = document.getElementById('homeEditor').value;
  alert("Home content updated!");
}

// Tampilkan About
function showAbout() {
  const role = sessionStorage.getItem('role');
  const content = document.getElementById('content');

  if (role === "Super Admin") {
    content.innerHTML = `
      <h2>About Us?</h2>
      <textarea id="aboutEditor" rows="6" cols="50">${aboutContent}</textarea><br>
      <button onclick="saveAbout()">Save</button>`;
  } else {
    content.innerHTML = aboutContent;
  }
}

// Simpan About (Super Admin)
function saveAbout() {
  aboutContent = document.getElementById('aboutEditor').value;
  alert("About content updated!");
}

document.getElementById('loginBtn').addEventListener('click', login);