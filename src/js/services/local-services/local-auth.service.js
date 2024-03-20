export class LocalAuthService {
  //     static logout(){
  //         browserUserService.deleteUser();
  //     }
  // }

  static async login(data) {
    try {
      const result = await fetch("src/js/data/local-data-sources/users.json");

      const users = await result.json();
      console.log(users);
    } catch (e) {}
  }
}
