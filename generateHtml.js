// create a function to generate HTML
// function generateHTML(data){

const header = `
<!DOCTYPE html>
<html lang="en"> 
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" 
    integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap" rel="stylesheet">
    <link rel= "stylesheet" href= "styles.css">

</head>
<body>
    <main class="container-fluid">
    <div class = "row">
    <div class="team-area header col-12 jumbotron mb-3"></div> 
    <h1 class ="text-center">My Team</h1>
    </div>`;

// generateHTML()

function createManager(data) {
  return ` <div class= "container">
        <div class ="row"></div>
    <div class ="team-area col-12 d-flec justify-content-center"></div>
    <div class ="card employee-card">
        <div class= "card-header">
    <h2 class ="card-title">${data.name} </h2>
    <h4 class = "card-subtitle mb-2 text">${data.getRole()}</h4>
    </div>
    <div class= "card-body">
    <ul class= "list-group">
        <li class= "list-group-item">Employee ID: ${data.id}</li>
        <li class ="list-group-item">Email: <a href="mailto:${data.email}"><${data.email}></a></li>
        <li class= "list-group-item">Office: ${data.officeNum}</li>
    </ul>
    </div>`;
}

function createEngineer(data) {
  return `
    <div class ="card employee-card">
        <div class= "card-header">
    <h2 class ="card-title">${data.name}</h2>
    <h4 class = "card-subtitle mb-2 text">${data.getRole()}</h4>
    </div>
    <div class= "card-body">
    <ul class= "list-group">
        <li class= "list-group-item">Employee ID: ${data.id}</li>
        <li class ="list-group-item">Email: <a href ="mailto:${data.email}"><${data.email}</a></li>
        <li class= "list-group-item">Github:  <a href = "https://github.com/${data.gitHub}"></a><${data.gitHub}</li>
    </ul>
    </div>
  `};

function createIntern(data) {
  return ` 
    <div class ="card employee-card">
        <div class= "card-header">
    <h2 class ="card-title">${data.name}</h2>
    <h4 class = "card-subtitle mb-2 text">${data.getRole()}</h4>
    </div>
    <div class= "card-body">
    <ul class= "list-group">
        <li class= "list-group-item">Employee ID: ${data.id}</li>
        <li class ="list-group-item">Email: <a href= "mailto:${data.email}"></a><${data.email}</li>
        <li class= "list-group-item">school: ${data.school}</li>
    </ul>
    </div>
`;
}

const footer = `
</main> 
</body>
</html>`;

const generateHTML = (boss, tech, student) => {
  console.log(boss, tech, student);

  let finalHTML = header;

  boss.forEach((i) => {
    let bosscard = createManager(i);
    finalHTML += bosscard;
  });
  tech.forEach((i) => {
    let techcard = createEngineer(i);
    finalHTML += techcard;
  });
  student.forEach((i) => {
    let studentcard = createIntern(i);
    finalHTML += studentcard;
  });
  return finalHTML;
};

module.exports = generateHTML;
