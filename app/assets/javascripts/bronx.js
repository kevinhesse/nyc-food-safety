
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

    axios.get('https://data.cityofnewyork.us/resource/9w7m-hzhe.json')
        .then((response) => {

            let data = response.data
            let allData = []

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
               let fullAddress =  street.innerHTML = "Address: " + resturant.street + " " + resturant.boro + " " + resturant.zipcode 
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

                // console.log (fullAddress)
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
                
            }else if (data[x].critical_flag != "Critical" || "NotCritical" ){
                otherCount += 1
            }
            
        }
        console.log(criticalCount)
        console.log(notCriticalCount)
        console.log(otherCount)
    }
        console.log(criticalCounter())


    })
    
})