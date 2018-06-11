
document.addEventListener('DOMContentLoaded', domContentLoadedEvent => {

  
  class Resturant {
    constructor(name, boro, critical, score, street, violation, zipcode, grade) {
      this.name = name
      this.boro = boro
      this.critical = critical
      this.score = score
      this.street = street
      this.violation = violation
      this.zipcode = zipcode
      this.grade = grade
    }
  }

  let ul = document.createElement("ul")

  axios.get('https://data.cityofnewyork.us/resource/9w7m-hzhe.json')
    .then((response) => {

      let data = response.data
      let allData = []
      gradeCounter();

      let body = document.querySelector("body")
      let ul = document.createElement("ul")
      let name = document.createElement("li")
      let boro = document.createElement("li")
      let critical = document.createElement("li")
      let score = document.createElement("li")
      let street = document.createElement("li")
      let violation = document.createElement("li")
      let zipcode = document.createElement("li")
      let grade = document.createElement("li")

      for (let x = 0; x < data.length; x++) {

        let resturant = new Resturant(
          data[x].dba,
          data[x].boro,
          data[x].critical_flag,
          data[x].score,
          data[x].street,
          data[x].violation_description,
          data[x].zipcode,
          data[x].grade
        )

        // ul.innerHTML = 
        name.innerHTML = "Name: " + resturant.name
        let fullAddress = street.innerHTML = "Address: " + resturant.street + " " + resturant.boro + " " + resturant.zipcode
        critical.innerHTML = "Critical: " + resturant.critical
        score.innerHTML = "Score: " + resturant.score
        violation.innerHTML = "Violation: " + resturant.violation
        grade.innerHTML = "grade: " + resturant.grade
        // zipcode.innerHTML = "Zipcode: " + resturant.zipcode


        if (data[x].boro == "BRONX") {

          ul.appendChild(grade)
          ul.appendChild(name)
          ul.appendChild(street)
          ul.appendChild(critical)
          ul.appendChild(score)
          ul.appendChild(violation)

          body.appendChild(ul)

        }


      }




      function criticalCounter() {

        let notCriticalCount = 0;
        let criticalCount = 0;
        let otherCount = 0;

        for (let x = 0; x < data.length; x++) {

          if (data[x].critical_flag == "Not Critical") {
            notCriticalCount += 1;


          } else if (data[x].critical_flag == "Critical") {
            criticalCount += 1;

          } else {
            otherCount += 1
          }

        }
        console.log(criticalCount)
        console.log(notCriticalCount)
        console.log(otherCount)
      }
      console.log(criticalCounter())


      function gradeCounter() {

        let gradeA = 0;
        let gradeB = 0;
        let gradeC = 0;
        let noCurrentGrade = 0;

      let body = document.querySelector("body")
      let ul = document.createElement("ul")
      let a = document.createElement("li")
      let b = document.createElement("li")
      let c = document.createElement("li")
      let na = document.createElement("li")

      for (let x = 0; x < data.length; x++) {

        if (data[x].grade == "A") {
          gradeA += 1;
        } else if (data[x].grade == "B") {
          gradeB += 1;
        } else if (data[x].grade == "C") {
          gradeC += 1;
        } else {
          noCurrentGrade += 1
        }

        a.innerHTML = "Total restaurants to get an A: " + gradeA 
        b.innerHTML = "Total restaurants to get a B: " + gradeB 
        c.innerHTML = "Total restaurants to get a C: " + gradeC 
        na.innerHTML = "Total restaurants to get an N/A: " + noCurrentGrade

        body.appendChild(ul)
        ul.appendChild(a)
        ul.appendChild(b)
        ul.appendChild(c)
        ul.appendChild(na)
      }

      console.log(gradeA);
      console.log(gradeB);
      console.log(gradeC);
      console.log(noCurrentGrade);
      }

      console.log(gradeCounter())

      // calculates what restaurant got the worst score, this means the highest 
      function highestScore() {
        let highestScoreByName = ""; 
        let currentHighestScore = 0;
      
      for (let x = 0; x < data.length; x++) {
        
        if (data[x].score > currentHighestScore) {
          currentHighestScore = data[x].score
          console.log(data[x].dba)
        }
        
      }
      // console.log(currentHighestScore)
    }
    
    console.log(highestScore())
    
    // finds restaurants with perfect inspection results

    function perfectScore() {
      let perfectScoreName = "";
      let perfectScore = 0;
      let 
      
      for (let x = 0; x < data.length; x++) {
        if (data[x].score < 0 && data[x].score == "A") {
        perfectScoreName = data[x].dba; 
        perfectScore = data[x].score;
        } 
      }

      console.log(perfectScoreName);
      console.log(perfectScore);
      
    }
    perfectScore();



  

    
})