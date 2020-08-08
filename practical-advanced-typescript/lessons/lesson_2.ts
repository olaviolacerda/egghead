// Automatic type inference

interface Admin {
  id: string;
  role: string;
}

interface User {
  email: string;
}

function routeToAdminPage(role: string) { }
function routeToHomePage(email: string) { }


function redirect(usr: Admin | User) {
  if ("role" in usr) {
    routeToAdminPage(usr.role);
  } else {
    routeToHomePage(usr.email);
  }
}

