const expsDir = 'content/experiences/';
const projsDir = 'content/projects/';
const experienceCount = 4;
const experiencesWithImg = [true, true, true, true];
const projectCount = 4;
const projectsWithImg = [true, true, true, true];
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

$(document).ready(function() {
    $("#aboutMe-para").load("content/about.html");

    loadExperiences();
    loadProjcects();

    document.getElementById('return-to-top-btn').style.visibility="hidden";
});

function copyEmail(){
    $("#emailBtn").addClass("copied");
    $("#emailBtn").html('Copied!');
    copyContactInfo("email");
    setTimeout(() => { 
        $("#emailBtn").removeClass("copied");
        $("#emailBtn").html('Email');
    }, 1500);
}

function copyPhone(){
    $("#phoneBtn").addClass("copied");
    $("#phoneBtn").html('Copied!');
    copyContactInfo("phone");
    setTimeout(() => { 
        $("#phoneBtn").removeClass("copied");
        $("#phoneBtn").html('Phone');
    }, 1500);
    
}

function copyContactInfo(type){
    if(type == "email"){
        document.getElementById("contactinfo").value = "chuck.j.rakaczky@gmail.com";
    }else if(type == "phone"){
        document.getElementById("contactinfo").value = "412-398-9273";
    }
    
    var copyText = document.getElementById("contactinfo");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    document.execCommand("copy");

    document.getElementById("contactinfo").value = "";
}

function showEmail(){
    window.prompt("Copy to clipboard: Ctrl+C, Enter", "chuck.j.rakaczky@gmail.com");
}

function showCell(){
    window.prompt("Cell Phone Number", "412-398-9273");
}

function loadProjcects(){
    for (i = 1; i <= projectCount; i++){
        loadProject(`project${i}`, i);
    }
}

function loadExperiences(){

    for (i = 1; i <= experienceCount; i++){
        loadExperience(`experience${i}`, i);
    }
}

function loadExperience(expFolderName, num){
    var expFolderPath = `${expsDir}${expFolderName}`;

    //create experience item
    $("#experience-list").append(`<div class="experience-item" id="exp${num}"></div>`);

    //create experience item title container
    $(`#exp${num}`).append(`<div class="experience-title-container" id="experience-title-container-${num}"></div>`);

    //create experience item title 
    $(`#experience-title-container-${num}`).append(`<div class="experience-title" id="experience-title-${num}"></div>`);

    //load experience item title (load)
    $(`#experience-title-${num}`).load(`${expFolderPath}/title`);

    if(experiencesWithImg[num-1]){
        // See if the img exists
        //create experience image container
        $(`#experience-title-container-${num}`).append(`<div class="experience-image-conatiner" id="experience-image-conatiner-${num}"></div>`);
        //create expreience image (load)
        $(`#experience-image-conatiner-${num}`).append(`<img src="${expFolderPath}/image.png">`);
    }

    //create experience date container
    $(`#exp${num}`).append(`<div class="experience-date-container" id="experience-date-container-${num}"></div>`);

    //create experience date
    $(`#experience-date-container-${num}`).append(`<div class="experience-date" id="experience-date-${num}"></div>`);

    //create experience date (laod)
    $(`#experience-date-${num}`).load(`${expFolderPath}/date`);

    //create experience descrtiption 
    $(`#exp${num}`).append(`<div class="experience-descrip" id="experience-descrip-${num}"></div>`);

    //create experience descrtipion (load)
    $(`#experience-descrip-${num}`).load(`${expFolderPath}/description`);

}

function loadProject(projFolderName, num){
    var projFolderPath = `${projsDir}${projFolderName}`;

    //create project item
    $("#project-list").append(`<div class="project-item" id="proj${num}"></div>`);

    //create project item title container
    $(`#proj${num}`).append(`<div class="project-title-container" id="project-title-container-${num}"></div>`);

    //create project item title 
    $(`#project-title-container-${num}`).append(`<div class="project-title" id="project-title-${num}"></div>`);

    //load project item title (load)
    $(`#project-title-${num}`).load(`${projFolderPath}/title`);

    if(projectsWithImg[num-1]){
        // See if the img exists
        //create project image container
        $(`#project-title-container-${num}`).append(`<div class="project-image-conatiner" id="project-image-conatiner-${num}"></div>`);
        //create project image (load)
        $(`#project-image-conatiner-${num}`).append(`<img src="${projFolderPath}/image.png">`);
    }

    //create project date container
    $(`#proj${num}`).append(`<div class="project-date-container" id="project-date-container-${num}"></div>`);

    //create project date
    $(`#project-date-container-${num}`).append(`<div class="project-date" id="project-date-${num}"></div>`);

    //create project date (laod)
    $(`#project-date-${num}`).load(`${projFolderPath}/date`);

    //create project descrtiption 
    $(`#proj${num}`).append(`<div class="project-descrip" id="project-descrip-${num}"></div>`);

    //create project descrtipion (load)
    $(`#project-descrip-${num}`).load(`${projFolderPath}/description`);

}


window.onscroll = function()
{
    var distFromTop = document.documentElement.scrollTop || document.body.scrollTop;
    

    if(distFromTop >= 100)
    {
        document.getElementById('return-to-top-btn').style.visibility="visible";
    }else
    {
        document.getElementById('return-to-top-btn').style.visibility="hidden";
    }

    var darkHalf = document.getElementById("main2");
    
    if(distFromTop >= (darkHalf.offsetTop - darkHalf.offsetHeight + vh/2)){
        $("html").addClass("dark");
    }else{
        $("html").removeClass("dark");
    }
};