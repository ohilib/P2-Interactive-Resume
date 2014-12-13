var bio = {
	"name" : "Philip Pang",
	"age" : "25",
	"role" : "Web Developer",
	"contacts" : {
		"email" : "ohilib@gmail.com",
		"mobile" : "60167710195",
		"github" : "ohilib",
		"blog" : "philippang.com",
		"twitter" : "@ohilib",
		"location" : "Penang"
	},
	"skills" : ["Mentoring", "HTML & CSS", "JavaScript", "GitHub"],
	"welcomeMessage" : "Welcome to my Interactive Resume!",
	"bioPic": "images/fry.jpg"
};

var education = {
	"schools": [
	{
		"name": "Inti College Penang",
		"location": "Penang, Malaysia",
		"degree": "Degree",
		"major" : "Finance",
		"dates": "2012"
		}
],
	"onlineClasses": [
	{
		"title": "JavaScript Crash Course",
		"schoolName": "Udacity",
		"dates": "2014",
		"url": "http://www.udacity.com/course/ud804"
	},
	{
		"title": "Intro to HTML & CSS",
		"schoolName": "Udacity",
		"dates": "2014",
		"url": "https://www.udacity.com/course/ud304"
	}
]
};

var work = {
	"jobs": [
	{
		"employer": "Million Software",
		"title": "Sales Executive",
		"dates": "July 2014 - Future",
		"location" : "Penang, Malaysia",
		"description": "Million Accounting Software for GST Implementation in Malaysia"
	},
	{
		"employer": "Pen Marine Sdn Bhd",
		"title": "Sales Executive",
		"dates": "November 2012 - November 2013",
		"location" : "Johor Bahru, Malaysia",
		"description":"Boat Charters and services"
	} 
]
};

var projects = {
	"projects": [
	{
		"title": "Radarpark.com",
		"dates": "2010",
		"description": "Web portal for creative designs and consumer goods",
		"images": [
			"images/home.jpg", 
			"images/care.jpg"]
	}
]
};

// Display Name

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

// Display Contact

var formattedHTMLMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedHTMLEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedHTMLTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedHTMLGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedHTMLBlog = HTMLblog.replace("%data%", bio.contacts.blog);
var formattedHTMLLocation = HTMLlocation.replace("%data%", bio.contacts.location);

var cont = formattedHTMLMobile + formattedHTMLEmail + formattedHTMLTwitter + formattedHTMLGithub + formattedHTMLBlog + formattedHTMLLocation;
$(cont).appendTo("#topContacts, #footerContacts");

// Display image & welcome message

var formattedHTMLbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedHTMLWelcomeMsg =  HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#header").append(formattedHTMLbioPic);
$("#header").append(formattedHTMLWelcomeMsg);

// Display skills

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
};

// Display education

education.display = function() {
  for (schools in education.schools) {
    $("#education").append(HTMLschoolStart);
  
    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[schools].name);

    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[schools].degree);
    $(".education-entry:last").append(formattedSchoolName +formattedSchoolDegree);

    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[schools].dates);
    $(".education-entry:last").append(formattedSchoolDates);

    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[schools].location);
    $(".education-entry:last").append(formattedSchoolLocation);

    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[schools].major);
    $(".education-entry:last").append(formattedSchoolMajor);
  }

  for (var classes in education.onlineClasses) {
    $("#education").append(HTMLschoolStart);              
    $(".education-entry:last").append(HTMLonlineClasses); 

    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses[classes].title);

    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineClasses[classes].schoolName);
    $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);

    var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineClasses[classes].dates);
   	$(".education-entry:last").append(formattedOnlineDates);

    var formatOnlineURL = HTMLonlineURL.replace("%data%", education.onlineClasses[classes].url);
    $(".education-entry:last").append(formatOnlineURL);
  }
}

education.display();

// Display work

function displayWork() {
for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
var formattedEmployerTitle = formattedEmployer + formattedTitle;

$(".work-entry:last").append(formattedEmployerTitle);

var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
$(".work-entry:last").append(formattedDates);
$(".work-entry:last").append(formattedLocation);

var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
$(".work-entry:last").append(formattedDescription);
	}
}

displayWork();

// Display projects

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for(image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedImage);
			}
		}
	}
};

projects.display();

// Display mouse clicks 

$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

// Display internationalize

$('#main').append(internationalizeButton);

var inName = function() {
  var oldName = $("#name").text();
  var finalName = oldName.trim().split(" ");
  finalName[0] = finalName[0][0].toUpperCase() + finalName[0].slice(1).toLowerCase();
  finalName[1] = finalName[1].toUpperCase();
  finalName = finalName.join(" ");
  return finalName;
};

// Display map

$("#mapDiv").append(googleMap); 


