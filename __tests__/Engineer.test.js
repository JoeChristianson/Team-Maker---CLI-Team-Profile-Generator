const Engineer = require("../lib/Engineer")
const {format} = require("prettier")

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
    describe("Generate Card",()=>{
        it("should generate correct html",()=>{
            const employee = new Engineer({name:"Jane",email:"jane@jane.com",id:1,github:"jane.github.com"});
            expect(format(employee.generateCard(),{parser:"html"})).toEqual(
            format(`<div class="card">
                <header>
                    <h4 class="name">Jane</h4>            
                    <h4 class="role"><img src="./icons/glasses.png">Engineer</h4>
                </header>
                <section class="details">
                    <div class="id">ID: 1</div>
                    <div class="email">Email: <a href="mailto: jane@jane.com">jane@jane.com</a></div>
                    <div class="special">Github: <a href="jane.github.com">GitHub</a></div>
                </section>
            </div>
            `,{parser:"html"})                
            )
        })
    })
})