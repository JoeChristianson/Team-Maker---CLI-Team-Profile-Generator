const Employee = require("../lib/Employee");

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
    
})