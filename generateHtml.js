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
    <!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" 
integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
    <script src="https://use.fontawesome.com/041ef3023d.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap" rel="stylesheet">
    <link rel= "stylesheet" href= "styles.css">

</head>
<body>
<nav class="navbar">
    <div class="navbar-header">
        <span class="navbar-brand mb-0 h1">My Team</span>
    </div>
</nav>`;

// generateHTML()

function createManager(data) {
  return `  <main class="container">
  <div class="row">
     <div class="card-col" style="width: 18rem">
     <div class="card-body card-header">
         <h5 class ="card-title">${data.name}</h5>
         <h5 class ="card-title"><i class="fa-solid fa-mug"></i></h5>
         <h6 class ="card-subtitle mb-2 text-muted">${data.getRole()}</h6>        
     </div>
     <ul class= "list-group list-group-flush">
         <li class="list-group-item">Employee ID: ${data.id}></li>
         <li class="list-group-item">Email:
         <a href=mailto:${data.email}></a>
         </li><br>
         <li class="list-group-item">
         Office: ${data.officeNum}</li>
     </ul>
  </div>`;
}

function createEngineer(data) {
  return `
  <div class="card-col" style="width: 18rem">
  <div class="card-body card-header">
      <h5 class ="card-title">${data.name}</h5>
      <h5 class ="card-title"><i class="fa-solid fa-glasses"></i></h5>
      <h6 class ="card-subtitle mb-2 text-muted">${data.getRole()}</h6>        
  </div>
  <ul class= "list-group list-group-flush">
      <li class="list-group-item">Employee ID:${data.id} </li>
      <li class="list-group-item">Email: <a href=mailto:${data.email}></a></li>
      <li class="list-group-item">Github: <a href ='https://www.github.com/${data.gitHub}'>/li>
  </ul>
</div>
  `};

function createIntern(data) {
  return ` 
  <div class="card-col" style="width: 18rem">
  <div class="card-body card-header">
      <h5 class ="card-title">${data.name}</h5>
      <h5 class ="card-title"><i class="fa-solid fa-graduation-cap"></i></h5>
      <h6 class ="card-subtitle mb-2 text-muted">${data.getRole()}</h6>        
  </div>
  <ul class= "list-group list-group-flush">
      <li class="list-group-item">Employee ID:${data.id}</li>
      <li class="list-group-item">School Email: <a href=mailto:${data.email} ></a></li>
      <li class="list-group-item">School: ${data.school} </li>
  </ul>
</div>
`;
}

const footer = `
</div>
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
