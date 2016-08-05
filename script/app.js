console.log("-In js-");

/* main JavaScript file */
// IIFE - Immediately Invoked Function Expression

//Kushan, 300873962, Mini portfolio.


(function(){
	"use strict"
	var homeTextData, contactTextData, projectTextData, commonTextData;
	var xhrParaData = new XMLHttpRequest(); // step 1 - create xhr object
        xhrParaData.open("GET", "script/paragraphs.json", true); // step 2 - open request
        xhrParaData.send(null); // step 3 - send request
        xhrParaData.addEventListener("readystatechange", readData); // step 4 
        console.log("SEnding Ajax");


    // create a reference to the contact nav bar content
	var contact = document.getElementsByClassName("contact")[0];
	// contact.innerHTML = "Contact";
		// create a reference to the project nav bar content
	var contact = document.getElementsByClassName("project")[0];
	// contact.innerHTML = "Projects"
	// create a reference to the home nav bar content
	var contact = document.getElementsByClassName("home")[0];
	// contact.innerHTML = "Home"

	// create a reference to the privacy policy
	var pp = document.getElementsByClassName("pp")[0];
	console.log(pp)
	pp.innerHTML = "Privacy Policy"
	
	// create a reference to the Email webmaster
	var EM = document.getElementsByClassName("EM")[0];
	console.log(EM)
	EM.innerHTML = "Email Webmaster"				
	



	function readData() {
		console.log("AJAX Sent")
        // data loaded                everything is ok
        if ((xhrParaData.readyState === 4) && (xhrParaData.status === 200)) {

            var paragraph = JSON.parse(xhrParaData.responseText);
			console.log(paragraph)
			console.log(paragraph["home"])
			for(var key in paragraph){
				console.log(key);
				console.log(paragraph[key])
				console.log(typeof(key));
				if(key == "home"){
					homeTextData=paragraph[key];
				}
				if(key == "contact"){
					contactTextData=paragraph[key]				
				}
				if(key == "project"){
					projectTextData=paragraph[key];
				}
				
			}
		    console.log("executing this firts")
        	// reading url of the browser and checking with respect to html pages
		var url = window.location.pathname.split("/");
		console.log(url[url.length - 1])
		if(url[url.length - 1] === "index.html"){
			homeText();		
		} else if(url[url.length - 1] === "project.html"){
			projectText();
		} else if(url[url.length - 1] === "contact.html"){
			contactText();
		}        
    
        }
    }
    
	
	


	

	//for home.html	
	function homeText(){
		console.log("In home")	
		// hitting the dom to get the id and writing string

		console.log(homeTextData);
		console.log("======================");
		var h1 = document.getElementById("heading1");
		console.log(homeTextData["h1_html"])
		h1.innerHTML = homeTextData["h1_html"];
		
		var h2 = document.getElementById("heading2");
		h2.innerHTML = homeTextData["h2_html"];

		var intro_hb = document.getElementById("intro_hb");
		intro_hb.innerHTML = homeTextData["intro_hb_html"];


		var intro_para = document.getElementById("intro_para")
		intro_para.innerHTML = homeTextData["intro_para"];
		intro_para.style.color = "#000";
		
		var projectLink = document.getElementById("projectLink");
		projectLink.innerHTML = homeTextData["projectLink"];

		var pro_txt = document.getElementById("pro_text");
		pro_txt.innerHTML = homeTextData["pro_txt"];

	}

	// for contact.html
	function contactText(){
		console.log(contactTextData);
		console.log("------ In contactText ---------");
		var contact = document.getElementById("contactME");
		contact.innerHTML = contactTextData["contact_txt"];

		var name = document.getElementById("name");
		name.innerHTML = contactTextData["name"];
		
		var phone_no = document.getElementById("phone_no");
		phone_no.innerHTML = contactTextData["phone_no"];
		var email = document.getElementById("email");
		email.innerHTML = contactTextData["contact_email"];
		var message = document.getElementById("message");
		message.innerHTML = contactTextData["contact_message"];
		var lname = document.getElementById("lname")
		lname.innerHTML = contactTextData["last_name_innerHTML"];
		console.log(lname)

		var submit = document.getElementById("Send");
		console.log(submit)
		submit.innerHTML = contactTextData["sumit_innerHTML"];
		
		// array to show the output of user entered data	
		var data = [];
		// click event on submit referrence
		submit.addEventListener("click", function(e){
			e.preventDefault();
			console.log(e.target.id);
			console.log("name = " + name.nextElementSibling.children[0].value);
			data[0] =  name.nextElementSibling.children[0].value

			console.log("lastname = " + lname.nextElementSibling.children[0].value);
			data[1] =  lname.nextElementSibling.children[0].value

			console.log("phone = " + phone_no.nextElementSibling.children[0].value);
			data[2] =  phone_no.nextElementSibling.children[0].value 

			console.log("email = " + email.nextElementSibling.children[0].value);
			data[3] =  email.nextElementSibling.children[0].value

			console.log("message = " + message.nextElementSibling.children[0].value);
			data[4] =  message.nextElementSibling.children[0].value
			//showing the stored data
			console.log(data);

		});
		var cancel = document.getElementById("cancel");
		cancel.innerHTML = contactTextData["cancel_innerHTML"];
	}



	// for project.html
	function projectText(){
		console.log("In roject")
		var proIntro = document.getElementById("proIntro");
		console.log(projectTextData)
		console.log("===++==")

		var proIntro = document.getElementById("proIntro");
			proIntro.innerHTML = projectTextData["proIntro"];

		var more = document.getElementsByClassName("more");
			more.innerHTML = projectTextData["more_innerHTML"];
		var hprotask1 =  document.getElementById("hprotask1");
		var prodesc1 = hprotask1.nextElementSibling;
			prodesc1.innerHTML = projectTextData["prodesc1_innerHTML"];
		
		console.log(prodesc1);
			hprotask1.innerHTML = projectTextData["hprotask1_innerHTML"];;
		var hprotask2 =  document.getElementById("hprotask2");
		var prodesc2 = hprotask2.nextElementSibling;
			prodesc2.innerHTML = projectTextData["prodesc2_innerHTML"];
			console.log(hprotask2);
			hprotask2.innerHTML = projectTextData["hprotask2_innerHTML"];
		var hprotask3 = document.getElementById("hprotask3");
		var prodesc3 = hprotask3.nextElementSibling;
			console.log(hprotask3);
			hprotask3.innerHTML = projectTextData["hprotask3_innerHTML"];
			console.log(projectTextData["hprotask3_innerHTML"]);
		prodesc3.innerHTML = projectTextData["prodesc3_innerHTML"];




	}

})();

