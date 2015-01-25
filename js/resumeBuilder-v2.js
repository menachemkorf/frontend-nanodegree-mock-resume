var bio = {
    name : "Menachem Korf",
    role : "Web Developer",
    contacts : {
        mobile : "0468425770",
        email : "menachemkorf@gmail.com",
        github : "menachemkorf",
        twitter : "N/A",
        location: "Melbourne, Australia"
    },
    bioPic : "images/bio_photo.jpg",
    welcomeMessage : "I can do all your front-end web-development work",
    skills : ["Fast Lerner", "Excellent Grasp", "Works Well in a Team"],


    display : function () {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $('#header').prepend(formattedName + formattedRole);

        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        
        var formattedContact = formattedMobile + formattedEmail + formattedGithub + formattedLocation;
        $('#topContacts').append(formattedContact);
        $('#footerContacts').append(formattedContact);

        var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
        var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
        $('#header').append(formattedBioPic + formattedWelcomeMsg);

        if (bio.skills) {
            $('#header').append(HTMLskillsStart);

            for (skill in bio.skills) {
                var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
                $('#header').append(formattedSkills);
            }//end for
        }//end if
    }//end function
};

var education = {
    schools : [
        {
            name : "Chabad of Midtown Kollel",
            location : "New York",
            degree : "N/A",
            majors : ["Rabbinic Studies", "Chassidus"], 
            date : 2014,
            url : "http://www.chabadmidtown.com"
        },
        {
            name : "Crown Hieghts Kollel",
            location : "New York",
            degree : "N/A",
            majors : ["Rabbinic Studies"], 
            date : 2012,
            url : "N/A"
        }
    ],
    onlineCourses : [
        {
            title : "build-a-simple-php-application",
            school : "Treehouse",
            date : 2014,
            URL : "http://teamtreehouse.com/library/build-a-simple-php-application"
        },
        {
            title : "",
            school : "Udacity",
            date : 2015,
            URL : "https://www.udacity.com/course/nd001"
        },
        {
            title : "JavaScript",
            school : "Udacity",
            dates : 2015,
            URL : "https://www.udacity.com/course/nd001"
        }
    ],
    display : function () {
        //TODO
    }
};

var work = {
    jobs :
    [
        {
            employer : "Yeshiva College",
            title : "Mashgiach",
            location : "Melbourne, Australia",
            dates : "2015",
            description : "Sometimes i copy paste something in a haml ruby file, i indent it at 2 spaces, but when i push it up to github, the indentation is all wrong and not only the part I've copy pasted. In my editor looks good."           
        },
        {
            employer : "Chabad of Midtown",
            title : "Researcher",
            location : "New York, USA",
            dates : "2012 - 2014",
            description : "Sometimes i copy paste something in a haml ruby file, i indent it at 2 spaces, but when i push it up to github, the indentation is all wrong and not only the part I've copy pasted. In my editor looks good."
        },
        {
            employer : "Mesivta Menachem",
            title : "Teacher",
            location : "Staten Island, NY, USA",
            dates : "2008 - 2009",
            description : "Sometimes i copy paste something in a haml ruby file, i indent it at 2 spaces, but when i push it up to github, the indentation is all wrong and not only the part I've copy pasted. In my editor looks good."
        }
    ],
    display : function () {
        //TODO
    }
};

var projects = {
    project : [
        {
            title : "shirts4mike",
            dates : "2014",
            description : "ecommerce website",
            images : "www"
        },
        {
            title : "blog",
            dates : "2014",
            description : "wordpress",
            images : "http"
        }

    ],
    display : function () {
        //TODO
    }
};

bio.display();
