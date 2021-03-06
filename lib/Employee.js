class Employee{
    constructor({name,id,email}){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return "Employee"
    }
    generateGenericCard(key,value,icon){
        return (
                    
        `<div class="card">
            <header>
                <h4 class="name">${this.getName()}</h4>                
                <h4 class="role"><img src="./icons/${icon}">${this.getRole()}</h4>
            </header>
            <section class="details">
                <div class="id">ID: ${this.getId()}</div>
                <div class="email">Email: <a href="mailto: ${this.getEmail()}">${this.getEmail()}</a></div>
                <div class="special">${key}: ${value}</div>
            </section>
        </div>
        `)
    }
}

module.exports = Employee;