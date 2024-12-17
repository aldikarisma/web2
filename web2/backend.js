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
      <style>
          div {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        }
        div img {
          width: 400px;
          height: 300px;
          border: 2px solid #ff3d0036
          border-radius: 13px;
          box-shadow: 4px 7px 7px 0px #00000042;
          cursor: pointer;
          margin: 10px;
          transition: 400ms;
        }
        div img:hover {
          filter: grayscale(1);
          transform: scale(1.30);
        }
        </style>
        <div class="profile">
        <img src="aldiotira.jpg" alt="Aldiotira Karisma" class="profile-img">
        <p><strong>Nama</strong>: Aldiotira Karisma</p>
        <p><strong>Email</strong>: aldiotirakarisma@gmail.com</p>
        <p><strong>Medsos</strong>: @aldiotirakarisma</p>
        <p><strong>Position</strong>: Ketua</p>
      </div>
      <div class="profile">
        <img src="khaira.jpg" alt="Khaira Najla" class="profile-img">
        <p><strong>Nama</strong>: Khaira Najla</p>
        <p><strong>Email</strong>: khairanajla@gmail.com</p>
        <p><strong>Medsos</strong>: @khaira_</p>
        <p><strong>Position</strong>: Anggota</p>
      </div>
      <div class="profile">
        <img src="shevira.jpg" alt="Shevira Feby Christavia" class="profile-img">
        <p><strong>Nama</strong>: Shevira Feby Christavia</p>
        <p><strong>Email</strong>: shevira.feby1@gmail.com</p>
        <p><strong>Medsos</strong>: @shevirafc</p>
        <p><strong>Position</strong>: Anggota</p>
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

function showAbout() {
  const content = document.getElementById('content');
  content.innerHTML = `
    <h2>About Us</h2>
    <div class="profiles">
      <div class="profile">
        <img src="aldiotira.jpg" alt="Aldiotira Karisma">
        <p><strong>Nama</strong>: Aldiotira Karisma</p>
        <p><strong>Email</strong>: <a href="mailto:aldikarismaaa@gmail.com">aldikarismaaa@gmail.com</a></p>
        <p><strong>Medsos</strong>: <a href="https://instagram.com/aldikarismaaa" target="_blank">@aldikarismaaa</a></p>
        <p><strong>Position</strong>: Ketua</p>
      </div>
      <div class="profile">
        <img src="khaira.jpg" alt="Khaira Najla">
        <p><strong>Nama</strong>: Khaira Najla</p>
        <p><strong>Email</strong>: <a href="mailto:khairanajla@gmail.com">khaira.najla@gmail.com</a></p>
        <p><strong>Medsos</strong>: <a href="https://instagram.com/khaira_njl" target="_blank">@khaira_njl</a></p>
        <p><strong>Position</strong>: Anggota</p>
      </div>
      <div class="profile">
        <img src="shevira.jpg" alt="Shevira Feby Christavia">
        <p><strong>Nama</strong>: Shevira Feby Christavia</p>
        <p><strong>Email</strong>: <a href="mailto:shevira.feby1@gmail.com">shevira.feby1@gmail.com</a></p>
        <p><strong>Medsos</strong>: <a href="https://instagram.com/shevirafc" target="_blank">@shevirafc</a></p>
        <p><strong>Position</strong>: Anggota</p>
      </div>
    </div>
  `;
}

setTimeout(() => {
  logoutPage.classList.remove('show');
  logoutPage.style.display = 'none';
  loginPage.style.display = 'flex';
  loginPage.style.opacity = '1';
}, 3000); // Menyembunyikan setelah 3 detik
