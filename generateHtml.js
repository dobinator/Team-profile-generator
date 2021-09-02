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
    <script src="https://kit.fontawesome.com/84186745d3.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <link rel= "stylesheet" href= "styles.css">
</head>
<body>
    
    <section class="section has-background-danger">
        <h1 class="title has-text-centered has-text-white is-size-2 ">My Team</h1>   
      </section>
`;

// generateHTML()

function createManager(data) {
  return `<section>
  <div class= "columns">
      <div  class="column">  
       <div class="card">
       <div class="card-content">
         <p class="card-title is-size-4 has-background-link has-text-centered has-text-white">${data.name}</p>
         <p class="name subtitle is-5 has-text-link has-text-centered"><i class="fas fa-mug-hot"></i></p>
         <p class="name subtitle is-5 has-background-link has-text-white has-text-centered">${data.getRole()}</p>
           <div class="content">
               <p class= "">Employee ID:${data.id}</p>
               <p class= "">Email:<a href="mailto:${data.email}">${data.email}</a></p>
               <p class= "">Office Num:${data.officeNum}</p>
               <br>
           </div>
       </div>    
</div>
</div>
  `;
}

function createEngineer(data) {
  return `

  <div class="column">  
  <div class="card">
  <div class="card-content">
    <p class="card-title is-size-4 has-background-link has-text-centered has-text-white">${data.name}</p>
    <p class="name subtitle is-5 has-text-link has-text-centered"><i class="fas fa-glasses"></i></p>
    <p class="name subtitle is-5 has-background-link has-text-white has-text-centered">${data.getRole()}</p>
      <div class="content">
          <p class= "">Employee ID: ${data.id}</p>
          <p class= "">Email: <a href="mailto:${data.email}">${data.email}</a></p>
          <p class= "">Github: <a href="https://www.github.com/${data.gitHub}">${data.gitHub}</a></p>
          <br>
      </div>
  </div>    
</div>
</div>
  `};

function createIntern(data) {
  return ` 
  <div  class="column">  
  <div class="card">
  <div class="card-content">
    <p class="card-title is-size-4 has-background-link has-text-centered has-text-white">${data.name}</p>
    <p class="name subtitle is-5 has-text-link has-text-centered"><i class="fas fa-graduation-cap"></i></i></p>
    <p class="name subtitle is-5 has-background-link has-text-white has-text-centered">${data.getRole()}</p>
          <div class="content">
              <p class= "">Employee ID: ${data.id}</p>
              <p class= "">Email: <a href="mailto:${data.email}">${data.email}</a></p>
              <p class= "">School:${data.school}</a></p>
              <br>
          </div>
      </div>    
  </div>
</div>
</div>
</div>
`;
}

const footer = `
</div>
</section> 
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
