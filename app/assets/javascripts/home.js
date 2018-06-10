// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/

document.addEventListener('DOMContentLoaded', domContentLoadedEvent => {

    // im not sure i need below
    // class ResturantStats {
    //     constructor () {
    //         this.all = []
    //     }
    //     // push things here in the future
    // }

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
    // let resturantStats = new RestutantStats (MAYBE NOT NEEDED)

    axios.get('https://data.cityofnewyork.us/resource/9w7m-hzhe.json')
        .then((response) => {

            let data = response.data
            let allData = []

            // let ul = document.createElement("ul")
            // let name = document.createElement("li")
            // let boro = document.createElement("li")
            // let critical = document.createElement("li")
            // let score = document.createElement("li")
            // let street = document.createElement("li")
            // let violation = document.createElement("li")
            // let zipcode = document.createElement("li")

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
                name.innerHTML = "Name: " + resturant.name
                street.innerHTML = "Address: " + resturant.street + " " + resturant.boro + " " + resturant.zipcode 
                critical.innerHTML = "Critical: " + resturant.critical
                score.innerHTML = "Score: " + resturant.score
                violation.innerHTML = "Violation: " + resturant.violation
                grade.innerHTML = "grade: " + resturant.grade
                // zipcode.innerHTML = "Zipcode: " + resturant.zipcode

                ul.appendChild(grade)
                ul.appendChild(name)
                ul.appendChild(street)
                ul.appendChild(critical)
                ul.appendChild(score)
                ul.appendChild(violation)
            
                body.appendChild(ul)

                if (data[x].zipcode == "11375") { 
                    console.log (data[x])
                }

                //   if (data[x].dba == "STARBUCKS") {
                //     // console.log(data[x].dba)
                //   }else{
                //     // console.log("not starbucks")
                //   }

                //   console.log(name)
                //   console.log(boro)
                //   console.log(score)
                //   console.log(street)

                // console.log(resturant)

            }
        })

})