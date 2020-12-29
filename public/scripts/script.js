const expsDir = 'content/experiences/';
const projsDir = 'content/projects/';
const experienceCount = 1;
const experiencesWithImg = [false];

$(document).ready(function() {
    $("#aboutMe-para").load("content/about.html");
    loadExperiences();
    loadProjcects();
});

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

    // //create experience image container
    // $(`#experience-title-container-${num}`).append(`<div class="experience-image-conatiner" id="experience-image-conatiner-${num}"></div>`);
    // //create expreience image (load)
    // $(`#experience-image-conatiner-${num}`).append(`<img src="${expFolderPath}/image.png"></img>`);

    if(experiencesWithImg[num-1]){
        // See if the file exists
        //create experience image container
        $(`#experience-title-container-${num}`).append(`<div class="experience-image-conatiner" id="experience-image-conatiner-${num}"></div>`);
        //create expreience image (load)
        $(`#experience-image-conatiner-${num}`).append(`<img src="${expFolderPath}/image.png"></img>`);
    }

    //create experience descrtiption container
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