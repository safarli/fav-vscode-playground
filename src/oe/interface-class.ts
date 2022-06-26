interface IApp {
  name: string;
  type: string;
}

export class App {
  name: string;
  type: string;

  constructor(name: string, type: string) {
    this.name = name;
    this.type = type;
  }
}

export class Developer {
  static develop(app: { name: string; type: string }) {
    return { name: app.name, type: app.type };
  }
  static develop2(app: App) {
    return { name: app.name, type: app.type };
  }
  static develop3(app: IApp) {
    return { name: app.name, type: app.type };
  }
}
