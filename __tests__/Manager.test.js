const Manager = require("../lib/Manager")

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
})