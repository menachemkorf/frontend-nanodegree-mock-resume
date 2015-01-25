//objects with data
var bio = {
    "name" : "Menachem Korf",
    "role" : "Web Developer",
    "contact" : {
        "phone" : "0468425770",
        "email" : "menachemkorf@gmail.com",
        "github" : "menachemkorf"
    },
    "bioPic" : "images/bio_photo.jpg",
    "welcomeMessage" : "I'm a passionate Web Developer speciolized in JavaScript",
    "skills" : ["Fast Lerner", "Excelent Grasp", "Computer Head"]
};
var work = {
    "jobs" :
    [
        {
            "title" : "Kashrus",
            "position" : "Mashgiach",
            "employer" : "Yeshiva College",
            "location" : "Melbourne, Australia",
            "dates" : "2015",
            "description" : "Sometimes i copy paste something in a haml ruby file, i indent it at 2 spaces, but when i push it up to github, the indentation is all wrong and not only the part I've copy pasted. In my editor looks good."
        },
        {
            "title" : "Kollel",
            "position" : "Researcher",
            "employer" : "Chabad of Midtown",
            "location" : "New York, USA",
            "dates" : "2012 - 2014",
            "description" : "Sometimes i copy paste something in a haml ruby file, i indent it at 2 spaces, but when i push it up to github, the indentation is all wrong and not only the part I've copy pasted. In my editor looks good."
        },
        {
            "title" : "Teaching",
            "position" : "Teacher",
            "employer" : "Mesivta Menachem",
            "location" : "Staten Island, NY, USA",
            "dates" : "2009",
            "description" : "Sometimes i copy paste something in a haml ruby file, i indent it at 2 spaces, but when i push it up to github, the indentation is all wrong and not only the part I've copy pasted. In my editor looks good."
        }
    ]
};
var education = {
    "schools" : [
        {
            "name" : "Chabad of Midtown Kollel",
            "subjects" : ["Rabbinic Studies", "Chassidus"], 
            "dates" : "2012 - 2014",
            "location" : "New York"
        },
        {
            "name" : "Crown Hieghts Kollel",
            "subjects" : ["Rabbinic Studies"], 
            "dates" : "2011 - 2012",
            "location" : "New York"
        }
    ],
    "online" : [
        {
            "name" : "Treehouse",
            "subjects" : ["PHP", "JQuery"], 
            "dates" : "2014",
            "URL" : "http://teamtreehouse.com/library/build-a-simple-php-application"
        },
        {
            "name" : "Udacity",
            "subjects" : ["HTML", "CSS", "Bootstrap"], 
            "dates" : "2015",
            "URL" : "https://www.udacity.com/course/nd001"
        },
        {
            "name" : "Udacity",
            "subjects" : ["JavaScript"], 
            "dates" : "2015",
            "URL" : "https://www.udacity.com/course/nd001"
        }
    ]
};


//formatting and rendering header with bio data
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedName + formattedRole);

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
    $("#header").append(formattedSkills);
}

//formatting and rendering jobs
function displayWork() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedWorkDates);
        $(".work-entry:last").append(formattedWorkDescription);
    }
}

displayWork();


/*
//internationalize name to uppercase with buttun
function inName(name) {
    var fullName = name.split(" ");
    var firstName = fullName[0];
    var lastName = fullName[1];
    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    lastName = lastName.toUpperCase();
    return firstName + " " + lastName;
}
$("#main").append(internationalizeButton);
*/

/*
$(document).click(function(loc) {  
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
});
*/

$("#mapDiv").append(googleMap);

initializeMap();
