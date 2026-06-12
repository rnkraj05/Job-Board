// =============================
// CareerConnect Job Board
// =============================

// Navbar Shadow Effect

window.addEventListener("scroll", () => {

const header = document.querySelector("header");

if(window.scrollY > 50){

header.style.boxShadow =
"0 5px 20px rgba(0,0,0,0.15)";

}else{

header.style.boxShadow =
"0 2px 10px rgba(0,0,0,0.08)";

}

});


// =======================
// Search Function
// =======================

function searchJobs(){

const searchInput =
document.querySelector(".search-box input");

const value =
searchInput.value.trim();

if(value !== ""){

window.location.href =
`jobs.html?search=${encodeURIComponent(value)}`;

}
else{

window.location.href =
"jobs.html";

}

}


// Enter Key Search

const searchInput =
document.querySelector(".search-box input");

if(searchInput){

searchInput.addEventListener("keypress", function(e){

if(e.key === "Enter"){

searchBtn.click();

}

});

}


// Scroll Reveal Animation

const revealElements =
document.querySelectorAll(
".job-card, .feature-card, .company-grid div, .stat-card"
);

const observer =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.2
});

revealElements.forEach(el=>{

observer.observe(el);

});


// Job Card Hover Soundless Effect

const cards =
document.querySelectorAll(
".job-card, .feature-card"
);

cards.forEach(card=>{

card.addEventListener("mouseenter", ()=>{

card.style.transform =
"translateY(-10px)";

});

card.addEventListener("mouseleave", ()=>{

card.style.transform =
"translateY(0px)";

});

});


// Welcome Message

window.addEventListener("load", ()=>{

console.log(
"CareerConnect Job Board Loaded Successfully"
);

});

// Application Form

const applicationForm =
document.getElementById("applicationForm");

if(applicationForm){

applicationForm.addEventListener("submit",(e)=>{

e.preventDefault();

alert(
"Application Submitted Successfully!"
);

applicationForm.reset();

});

}

// Employer Job Post Form

const jobPostForm =
document.getElementById("jobPostForm");

if(jobPostForm){

jobPostForm.addEventListener("submit",(e)=>{

e.preventDefault();

alert(
"Job Posted Successfully!"
);

jobPostForm.reset();

});

}

const loginBtn =
document.querySelector(".login-btn");

if(loginBtn){

loginBtn.addEventListener("click",(e)=>{

e.preventDefault();

alert(
"Login System will be available in future updates."
);

});

}
