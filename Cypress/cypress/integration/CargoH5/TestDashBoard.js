/// <reference types="cypress" />
import DashBoardPage from "../../page/DashBoard"
describe('首页测试', () => {
    it('打开首页',()=>{
        const DashBoardInatance =new DashBoardPage()
        // DashBoardInatance.isDashBoardPage()
        DashBoardInatance.IsTargetPage()
    })
})