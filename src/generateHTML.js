const generateHTML = (teamName,teammates)=>{
    let cards = "";
    console.log(teammates)
    teammates.forEach(teammate=>{
        cards+=teammate.generateCard();
    })
    return `
    <html>
    <head>
    <title>Team Page</title>
    <link rel="stylesheet" href="./assets/styles/reset.css">
    <link rel="stylesheet" href="./assets/styles/style.css">
    </head>
    <header>
    <h1>${teamName} Team</h1>
    </header>
    <main>
    ${cards}
    </main>
    </html>
    `
}

module.exports = generateHTML;