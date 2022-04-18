const Employee = require("../lib/Employee");
const {format} = require("prettier")

describe("Employee",()=>{
    describe("Initialization",()=>{
        it("should create an Employee Object with name,id and email as properties equal to constructor input",()=>{
            const employee = new Employee({name:"Jane",email:"jane@jane.com",id:1});
            expect(employee.name).toEqual("Jane");
            expect(employee.email).toEqual("jane@jane.com");
            expect(employee.id).toEqual(1)
        })
    })
    describe("Get Name",()=>{
        it("should return employees name",()=>{
            const employee = new Employee({name:"Jane",email:"jane@jane.com",id:1});
            expect(employee.getName()).toEqual("Jane")
        })
    })
    describe("Get ID",()=>{
        it("should return employees name",()=>{
            const employee = new Employee({name:"Jane",email:"jane@jane.com",id:1});
            expect(employee.getId()).toEqual(1)
        })
    })
    describe("Get Email",()=>{
        it("should return employees name",()=>{
            const employee = new Employee({name:"Jane",email:"jane@jane.com",id:1});
            expect(employee.getEmail()).toEqual("jane@jane.com")
        })
    })
    describe("Get Role",()=>{
        it("should return employees name",()=>{
            const employee = new Employee({name:"Jane",email:"jane@jane.com",id:1});
            expect(employee.getRole()).toEqual("Employee")
        })
    })
    describe("Generate Card",()=>{
        it("should generate correct html",()=>{
            const employee = new Employee({name:"Jane",email:"jane@jane.com",id:1});
            expect(format(employee.generateGenericCard("github","jane.github.com","glasses.png"),{parser:"html"})).toEqual(
            format(`<div class="card">
                <header>
                    <h4 class="name">Jane</h4>            
                    <h4 class="role"><img src="./icons/glasses.png">Employee</h4>
                </header>
                <section class="details">
                    <div class="id">ID: 1</div>
                    <div class="email">Email: <a href="mailto: jane@jane.com">jane@jane.com</a></div>
                    <div class="special">github: jane.github.com</div>
                </section>
            </div>
            `,{parser:"html"})                
            )
        })
    })
    
})