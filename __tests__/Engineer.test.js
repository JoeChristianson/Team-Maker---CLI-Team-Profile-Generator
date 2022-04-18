const Engineer = require("../lib/Engineer")

describe("Engineer",()=>{
    describe("Initialization",()=>{
    it("should set object's github property to that entered in the constructor",()=>{
        const engineer = new Engineer({
             name:"Sally",
             id:2,
             email:"sally@gmail.com",
             github:"sally.github.com"
        })
        expect(engineer.github).toEqual("sally.github.com") 
        })
    })
    describe("Get Role",()=>{
        it("should return role of Engineer when getRole method invoked",()=>{
            const engineer = new Engineer({
                name:"Sally",
                id:2,
                email:"sally@gmail.com",
                github:"sally.github.com"
            })
            expect(engineer.getRole()).toEqual("Engineer")
        })
    })
    describe("Get Github",()=>{
        it("should return github url put in constructor when getGithub method invoked",()=>{
            const engineer = new Engineer({
                name:"Sally",
                id:2,
                email:"sally@gmail.com",
                github:"sally.github.com"
           })
           expect(engineer.getGithub()).toEqual("sally.github.com")
        })
    })
})