const Manager = require("../lib/Manager")
const {format} = require("prettier")

describe("Manager",()=>{
    describe("Initialization",()=>{
    it("should set object's office number property to that entered in the constructor",()=>{
        const manager = new Manager({
             name:"Sally",
             id:2,
             email:"sally@gmail.com",
             officeNumber:1
        })
        expect(manager.officeNumber).toEqual(1) 
    })
    })
    describe("Get Role",()=>{
        it("should return role of Manager when getRole method invoked",()=>{
            const manager = new Manager({
                name:"Sally",
                id:2,
                email:"sally@gmail.com",
                officeNumber:1
            })
            expect(manager.getRole()).toEqual("Manager")
        })
    })
    describe("Generate Card",()=>{
        it("should generate correct html",()=>{
            const employee = new Manager({name:"Jane",email:"jane@jane.com",id:1,officeNumber:1});
            expect(format(employee.generateCard(),{parser:"html"})).toEqual(
            format(`<div class="card">
                <header>
                    <h4 class="name">Jane</h4>            
                    <h4 class="role"><img src="./icons/coffee.png">Manager</h4>
                </header>
                <section class="details">
                    <div class="id">ID: 1</div>
                    <div class="email">Email: <a href="mailto: jane@jane.com">jane@jane.com</a></div>
                    <div class="special">Office Number: 1</div>
                </section>
            </div>
            `,{parser:"html"})                
            )
        })
    })
})