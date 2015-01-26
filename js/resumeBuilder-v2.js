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
    bioPic : "images/fry.jpg",
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
            majors : ["Advanced Rabbinic Studies", "Chassidus"],
            date : 2014,
            url : "http://www.chabadmidtown.com"
        },
        {
            name : "Crown Hieghts Kollel",
            location : "New York",
            degree : "N/A",
            majors : ["Advanced Rabbinic Studies"],
            date : 2012,
            url : "N/A"
        },
        {
            name : "Rabbinical Collage of America",
            location : "Morristown, New Jersey",
            degree : "Rabbinic Ordination",
            majors : ["Rabbinic Studies"],
            date : 2009,
            url : "http://www.rca.edu/"
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
            title : "HTML and CSS",
            school : "Udacity",
            date : 2015,
            URL : "https://www.udacity.com/course/nd001"
        },
        {
            title : "JavaScript",
            school : "Udacity",
            date : 2015,
            URL : "https://www.udacity.com/course/nd001"
        }
    ],
    display : function () {
        for (school in education.schools) {
            $('#education').append(HTMLschoolStart);

            var formattedName = HTMLschoolName.replace("%data%", this.schools[school].name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", this.schools[school].degree);
            var formattedDates = HTMLschoolDates.replace("%data%", this.schools[school].date);
            var formattedLocation = HTMLschoolLocation.replace("%data%", this.schools[school].location);
            var formattedMajor = HTMLschoolMajor.replace("%data%", this.schools[school].majors);

            var formattedSchoolData = formattedName + formattedDegree + formattedDates + formattedLocation + formattedMajor;
            $('.education-entry').last().append(formattedSchoolData);
        }

        $('#education').append(HTMLonlineClasses);
        for (course in education.onlineCourses) {
            $('#education').append(HTMLschoolStart);

            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", this.onlineCourses[course].title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", this.onlineCourses[course].school);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", this.onlineCourses[course].date);
            var formattedOnlineURL = HTMLonlineURL.replace("%data%", this.onlineCourses[course].URL);

            var formattedOnlineData = formattedOnlineTitle + formattedOnlineSchool + formattedOnlineDates + formattedOnlineURL;
            $('.education-entry').last().append(formattedOnlineData);
        }
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
            dates : "2009 - 2010",
            description : "Sometimes i copy paste something in a haml ruby file, i indent it at 2 spaces, but when i push it up to github, the indentation is all wrong and not only the part I've copy pasted. In my editor looks good."
        }
    ],
    display : function () {
        for (job in work.jobs) {
            $('#workExperience').append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

            var formattedData = formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription;
            $('.work-entry').last().append(formattedData);
        }
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
work.display();
education.display();