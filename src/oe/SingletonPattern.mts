/* eslint-disable */

/* INFO:
 * 1. Singleton
 * 2. Builder
 * 3. Factory
 * 4. Facade
 */

const json = {
  username: 'alexwoo',
  password: 'alexale9909',
};

/* EXPLANATION:
  This is a Singleton pattern class
  that have 'instance' property and 'getInstance()' method
  as its static properties

  Being Singleton, forces the user to have only one instance
  of particular class
*/
export default class AppConfiguration {
  private static instance: AppConfiguration;
  _username: string;
  _password: string;

  private constructor() {
    const { username, password } = json;
    this._username = username;
    this._password = password;
  }

  static getInstance(): AppConfiguration {
    return (this.instance ??= new AppConfiguration());
  }
}

const appConfig = AppConfiguration.getInstance;
