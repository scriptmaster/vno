import { Component, ComponentContainer, Vue } from "../dts/factory.d.ts";
export default class Storage {
  private _root: Component;
  private _vue: Vue.State;
  public size: number;
  public app: ComponentContainer;

  constructor() {
    this.app = <ComponentContainer> {};
    this._root = <Component> {};
    this._vue = <Vue.State> {};
    this.size = 0;
  }

  public cache(label: string, component: Component): Component {
    this.app[label] = component;
    this.size += 1;
    return component;
  }

  public get(label: string): Component | undefined {
    return this.app[label];
  }

  get root() {
    return this._root;
  }

  set root(component: Component) {
    this._root = component;
  }

  get vue() {
    return this._vue;
  }

  set vue(vue: Vue.State) {
    this._vue = vue;
  }
}
