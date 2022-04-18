const Intern = require("../lib/Intern")
const {format} = require("prettier")

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
    describe("Generate Card",()=>{
        it("should generate correct html",()=>{
            const employee = new Intern({name:"Jane",email:"jane@jane.com",id:1,school:"University of Maryland"});
            expect(format(employee.generateCard(),{parser:"html"})).toEqual(
            format(`<div class="card">
                <header>
                    <h4 class="name">Jane</h4>            
                    <h4 class="role"><img src="./icons/graduate.png">Intern</h4>
                </header>
                <section class="details">
                    <div class="id">ID: 1</div>
                    <div class="email">Email: <a href="mailto: jane@jane.com">jane@jane.com</a></div>
                    <div class="special">School: University of Maryland</div>
                </section>
            </div>
            `,{parser:"html"})                
            )
        })
    })
})