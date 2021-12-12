const educationpoint = "http://localhost:3000";
const education = "education";
const skill="skill"

async function displayEducation() {
    // const promise = await fetch(`${educationpoint}/${education}`); 
    // const edudata = await promise.json();
    const edudata = await (await fetch(`${educationpoint}/${education}`)).json();
    const eduEle = document.querySelector(".m-education");
    const eduTemplate = `<h2 class="text-uppercase text-danger">Education</h2>
                <hr>
                 <ul class="list">
                <li class="list-item mb-4">${edudata[0].university}</li>
                <li class="list-item mb-4">${edudata[0].major}</li>
                <li class="list-item mb-4">GPA: ${edudata[0].gpa}</li>
              </ul>`;
    eduEle.insertAdjacentHTML("afterbegin", eduTemplate)

    
}
displayEducation();