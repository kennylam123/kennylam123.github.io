const skills = [
 { name: "Python", level: 85 },
 { name: "JavaScript", level: 85 },
 { name: "Java", level: 85 },
 { name: "SQL", level: 85 },
 { name: "Python", level: 85 },
 { name: "Python", level: 85 },
 { name: "Python", level: 50 },


];

const container= document.getElementById("skills-container")
console.log(container);

skills.forEach((skill)=> {
    container.innerHTML += `
    <div class="skill">
      <p>${skill.name} <span>${skill.level}%</spawn></p>
      <div class="skill-bar">
        <div class="skill-fill" style="width: ${skill.level}%"></div>
      </div>
    </div>
    `;
});

const sections = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entires) =>{
    entires.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("visible");
        }
    });

});

sections.forEach((section)=> {
    observer.observe(section);
})

