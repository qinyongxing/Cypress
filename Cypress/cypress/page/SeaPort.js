/// <reference types="cypress" />
import CommonPage from "./CommonPage";
/**海港页面类*/
export default class SeaportPage extends CommonPage {
    constructor() {
        super()
        this.PortInputFrame = 'input[type="text"]'
        this.PortsearchButton = 'button>span:contains("查询")';
        this.PortaddButton = '新增';
        this.PortEditButton = '编辑';
        this.PoretDelButton = '删除'
        this.fixbutton = '确定';
        this.PortAddPopup = 'div[aria-label="添加基础港口"]';
        this.PortaddinputFrame = '.el-input__inner';
        this.Port = 'IND2S';
        this.PortaddInputPortSearchButton = '.el-button.el-button--primary.el-button--mini:eq(0)';
        this.url = 'http://new.cargoware.com/#/Information/SeaPort';
        this.DisplayArea = '.ag-root.ag-font-style.ag-layout-normal';
        this.CheckBox = '.ag-icon.ag-icon-checkbox-unchecked';
    }
    /**判断当前页面是否为打开的页面*/
    isPortPage() {///由于和其他页面都有这个断言可以共同继承同一个类
        //     cy.clearCookie('Authorization')
        //     cy.setCookie('Authorization', 'R6mRlkXN1YuPQmYzFy8nvw')
        //     cy.visit(this.url)
        //     cy.url().should('eq', this.url)
    }
    /**获取海港面操(增删改查)的父元素*/
    get OP() {
        return cy.get('div.triggers')
    }
    /**获取海港的输入框*/
    get Port_input_frame() {
        return this.OP.find(this.PortInputFrame).type('SH')
    }
    /**获取查询按钮*/
    get Port_search_Button() {
        return this.OP.find(this.PortsearchButton)
    }
    /**获取海港的新增按钮*/
    set Port_add_button(PortaddButton) {
        this.PortaddButton = PortaddButton
    }
    get Port_add_button() {
        return this.OP.contains(this.PortaddButton)
    }
    /**获取海港的删除编辑按钮*/
    get Port_edit_button() {
        return this.OP.contains(this.PortEditButton)
    }
    /**获取海港的删除删除按钮*/
    get Port_del_button() {
        return this.OP.contains(this.PoretDelButton)
    }
    /**获取点击新增后的弹窗*/
    Port_add_popup() {
        return cy.get(this.PortAddPopup)
    }
    /**获取海港新增弹窗的输入框*/
    get Portadd_input_Frame() {
        return cy.get(this.PortaddinputFrame)
    }
    /**获取海港新增页面的查询按钮*/
    get Port_add_input_port_search_button() {
        return cy.get(this.PortaddInputPortSearchButton)
    }
    /**拦截查询请求*/
    get LJ() {
        return cy.intercept(/http:\/\/new\.cargoware\.com\/api\/mdm\-service\/seaPort\/portList(\?total=.*)|(\/template\?.*)/)
    }
    /**获取新增之后查询出数据的显示区域*/
    get Display_Area() {
        return cy.get(this.DisplayArea)
    }
    /** 获取新增之后查询出数据的显示行前面的勾选框*/
    get Check_box() {
        return cy.get(this.CheckBox)
    }
    /**获取海港新增查询页面的确定按钮*/
    get fix_button() {
        return cy.contains(this.fixbutton)
    }
}