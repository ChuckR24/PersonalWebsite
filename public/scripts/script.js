const expsDir = 'content/experiences/';
const projsDir = 'content/projects/';
const experienceCount = 4;
const experiencesWithImg = [true, true, true, false];

$(document).ready(function() {
    $("#aboutMe-para").load("content/about.html");
    loadExperiences();
    loadProjcects();
});

function showEmail(){
    window.prompt("Copy to clipboard: Ctrl+C, Enter", "chuck.j.rakaczky@gmail.com");
}

function showCell(){
    window.prompt("Cell Phone Number", "412-398-9273");
}

function loadProjcects(){
    //TODO
}

function loadExperiences(){

    for (i = 1; i <= experienceCount; i++){
        loadExperience(`experience${i}`, i);
    }
}

function loadExperience(expFolderName, num){
    var expFolderPath = `content/experiences/${expFolderName}`;

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
};