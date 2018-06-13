
document.addEventListener('DOMContentLoaded', domContentLoadedEvent => {

    class Resturant {
        constructor(name, boro, critical, score, street, violation, zipcode,grade) {
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
    let divQueens = document.getElementById("flys")
    if (divQueens != null) {
    
    axios.get('https://data.cityofnewyork.us/resource/9w7m-hzhe.json')
    .then((response) => {
  
            let data = response.data
            let allData = []
  
  
            
  
            for (let x = 0; x < data.length; x++) {
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
                name.innerHTML = "<strong> <br>" + resturant.name + "</strong>"
                street.innerHTML = "<strong>" + resturant.street + " " + resturant.boro + " " + resturant.zipcode + "</strong> <br> <br>"
                critical.innerHTML = "Critical: " + resturant.critical
                score.innerHTML = "Score: " + resturant.score + "<br> <br>"
                violation.innerHTML = "Violation: " + resturant.violation + "<br> <br>"
                grade.innerHTML = "grade: " + "<strong>" + resturant.grade + "</strong>"
                // zipcode.innerHTML = "Zipcode: " + resturant.zipcode
                
  
                if (data[x].violation_code == "04N") { 
                
                ul.appendChild(name)
                ul.appendChild(street)
                ul.appendChild(grade)
                ul.appendChild(critical)
                ul.appendChild(score)
                ul.appendChild(violation)
            
                body.appendChild(divQueens)
                divQueens.appendChild(ul)
  
  
                
                }
  
            }
        })
        
    }
  
  
  
  
  
  })