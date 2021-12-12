const educationpoint = "http://localhost:3000";
const education = "education";
const skill = "skill"
const activity = "activity";

let count = 0;

async function displayEducation() {
    count += 1;
    if (count > 1) {
        return;
    }

    // const promise = await fetch(`${educationpoint}/${education}`); 
    // const edudata = await promise.json();
    const edudata = await (await fetch(`${educationpoint}/${education}`)).json();
    const skillData = await (
      await fetch(`${educationpoint}/${skill}`)
    ).json();
    const activData = await (await fetch(`${educationpoint}/${activity}`)).json();
    const eduEle = document.querySelector(".m-education");
    const skillEle = document.querySelector(".m-skill");
    const activEle = document.querySelector(".m-activity");
    const eduTemplate = `<h2 class="text-uppercase text-danger">Education</h2>
                <hr>
                 <ul class="list">
                <li class="list-item mb-4">${edudata[0].university}</li>
                <li class="list-item mb-4">${edudata[0].major}</li>
                <li class="list-item mb-4">GPA: ${edudata[0].gpa}</li>
              </ul>`;
    const skillTemplate = `<h5 class="text-uppercase bg-white text-dark py-2 rounded-pill mb-4" >skills</h5>
              <ul class="list text-white-50 ml-5 py-2 text-left text-capitalize">
                <li class="list-item mb-4">${skillData[0].skill1}</li>
                <li class="list-item mb-4">${skillData[0].skill2}</li>
                <li class="list-item mb-4">${skillData[0].skill3}</li>
                <li class="list-item mb-4">${skillData[0].skill4}</li>
              </ul>`;
    eduEle.insertAdjacentHTML("afterbegin", eduTemplate)
    skillEle.innerHTML = skillTemplate;
    // console.log(skillData)
}
