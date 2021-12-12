const educationpoint = "http://localhost:3000";
const education = "education";

async function displayEducation() {
    const promise = await fetch(`${educationpoint}/${education}`); 
    const edudata = await promise.json();
    const eduEle = document.querySelector(".m-education");
    // const eduTemplate = `<h2 class="text-uppercase text-danger">Education</h2>
    //             <hr>
    //              <ul class="list">
    //             <li class="list-item mb-4">${}</li>
    //             <li class="list-item mb-4">Management Information System Major (MIS)</li>
    //             <li class="list-item mb-4">GPA: Management Information System Major (MIS)</li>
    //           </ul>`;
    console.log(edudata)
}
displayEducation()