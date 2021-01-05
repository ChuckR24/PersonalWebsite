const expsDir = 'content/experiences/';
const projsDir = 'content/projects/';
const displayReturnToTopDistance = 100;
const experienceCount = 4;
const experiencesWithImg = [true, true, true, true];
const projectCount = 4;
const projectsWithImg = [true, true, true, true];
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

$(document).ready(function() {
    //load about section content
    $("#aboutMe-para").load("content/about.html");

    loadExperiences();
    loadProjcects();

    //hide the return to top button
    document.getElementById('return-to-top-btn').style.visibility="hidden";

});

//copy copy email address to user's clipboard
function copyEmail(){
    //change style of button
    $("#emailBtn").addClass("copied");

    //change text of button
    $("#emailBtn").html('Copied!');

    copyContactInfo("email");

    //let the "copied" message stay briefly then revert to unclicked styling
    setTimeout(() => { 
        $("#emailBtn").removeClass("copied");
        $("#emailBtn").html('Email');
    }, 1500);
}

//copy copy phone number to user's clipboard
function copyPhone(){
    //change style of button
    $("#phoneBtn").addClass("copied");

    //change text of button
    $("#phoneBtn").html('Copied!');

    copyContactInfo("phone");

    //let the "copied" message stay briefly then revert to unclicked styling
    setTimeout(() => { 
        $("#phoneBtn").removeClass("copied");
        $("#phoneBtn").html('Phone');
    }, 1500);
}

//copy either email or phone number to clipboard
function copyContactInfo(type){

    //make a var for the element we're going to copy from
    var copyText = document.getElementById("contactinfo");

    //enter either email address or phone number as the element's value
    if(type == "email"){
        document.getElementById("contactinfo").value = "chuck.j.rakaczky@gmail.com";
    }else if(type == "phone"){
        document.getElementById("contactinfo").value = "412-398-9273";
    }
    
    //Select the element's text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // for mobile devices
  
    //copy the selected text
    document.execCommand("copy");

    //clear element's value
    document.getElementById("contactinfo").value = "";
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

    // See if the experience has an image associated with it
    if(experiencesWithImg[num-1]){
        
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

    // See if the project has an image associated with it
    if(projectsWithImg[num-1]){
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
    
    if(distFromTop >= displayReturnToTopDistance)
    {
        //we're not near the top of the page, show the button
        document.getElementById('return-to-top-btn').style.visibility="visible";
    }else
    {
        //we're back at the top of the page, hide the button
        document.getElementById('return-to-top-btn').style.visibility="hidden";
    }

    //element that marks where the dark half of the website starts
    var darkHalf = document.getElementById("main2");
    
    if(distFromTop >= (darkHalf.offsetTop - (vh/2))){
        //we've scrolled into the dark half of the site
        $("html").addClass("dark");
    }else{
        //we're still in the light half
        $("html").removeClass("dark");
    }
};