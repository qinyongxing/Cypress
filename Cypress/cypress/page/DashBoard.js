/// <reference types="cypress" />
import CommonPage from "./CommonPage";
/**登录类*/
export default class DashBoardPage extends CommonPage {
  constructor() {
    super();
    this.cookie = "dXrBVR8LJaBYTBaJJcEFog";
    this.url = "http://new.cargoware.com/#/dashboard";
  }
  isDashBoardPage() {}
}
