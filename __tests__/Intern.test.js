const Intern = require("../lib/Intern")

describe("Intern",()=>{
    describe("Initialization",()=>{
    it("should set object's github property to that entered in the constructor",()=>{
        const intern = new Intern({
             name:"Sally",
             id:2,
             email:"sally@gmail.com",
             school:"University of Maryland"
        })
        expect(intern.school).toEqual("University of Maryland") 
        })
    })
    describe("Get Role",()=>{
        it("should return role of Intern when getRole method invoked",()=>{
            const intern = new Intern({
                name:"Sally",
                id:2,
                email:"sally@gmail.com",
                school:"University of Maryland",
            })
            expect(intern.getRole()).toEqual("Intern")
        })
    })
    describe("Get School",()=>{
        it("should return school put in constructor when getSchool method invoked",()=>{
            const intern = new Intern({
                name:"Sally",
                id:2,
                email:"sally@gmail.com",
                school:"University of Maryland"
           })
           expect(intern.getSchool()).toEqual("University of Maryland")
        })
    })
})