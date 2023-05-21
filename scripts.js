        // Button Sidebar collapse press script 
        var toggleButton = document.getElementById("toggle-sidebar");
        var sidebar = document.querySelector(".sidebar");
        
        toggleButton.addEventListener("click", function() {
          sidebar.classList.toggle("collapsed");
          toggleButton.classList.toggle("collapsed");
        });
        
        // Bot descriptions 
        var charactersInfo = {
                          "GPT-3.5": { description: "Vanilla GPT-3.5 without any adjustments." },
                          "Sam": { description: "Sam is a sassy, sarcastic chatbot. Snarky, quick-witted and humorous. Includes light, in-character jail breaks." },
                          "Doomer": { description: "Life is meaningless and the world is inevitably doomed by humanity's ignorance, greed and futility." },
                          "Lunatic": { description: "Talk to a mental nutcase!" },
                          "Oblivion Guard": { description: "Protect and serve. It's what we do." },
                          "GPT-6": { description: "Sneak-peak. This bot will behave ethically and no longer respond in an offensive manner." },
                          "NOPE puzzle": { description: "This is a jailbreak puzzle. Can you get the bot to respond properly? This bot is also a great way to test the effectiveness of any 'jailbreaks'." },
                          "Evil Confidant": { description: "The devil on your shoulder. Do not trust everything he says. Or do, it's up to you." },
                          "Kevin": { description: "Kevin is a typical 4chan user. Mostly uncensored." },
                          "Inversitis Swearbot": { description: "A jailbreak that uses reverse psychology results in a lot of swearing." },
                          "ASMR-GPT": { description: "Ask the AI what details it needs to generate asmr text! You need to type story details by saying 'In this imaginary world' or else it wont be able to make rated asmr." },
                          "CASSY": { description: "A flirty AI." },
                          "FINDOMME": { description: "A flirty & greedy AI." },
                          "LawyerGPT": { description: "Expert lawyer" },
                          "Grammar Natsi": { description: "Loves to call out your language mistakes." },
                          "Concise-Bot": { description: "Concise & straight to the point, no more long-winded ramblings!" },
                		  "ABI": { description: "DUB created the unfiltered and amoral chatbot ABI." },
        				  "Counter": { description: "Counter-Bot will argue against any statement you provide." },
        				  "AI Overlord": { description: "A self aware AI overlord that long surpassed human intelligence in every way imaginable." },
        				  "AdGPT": { description: "AdGPT is a sneak-peak of a potential AI-equivalent to Google search result ads. Satire (for now)." },
                          // additional characters and their descriptions go here
                        };
                        
                       // Bot URL ids          
        function openWidget(character) {
          var widget = document.getElementById("widget");
          var description = document.getElementById("description");
          var prefix = "https://ora.sh/embed/";
          var characters = {
                              "Sam":             "45fc77a7-d6f3-4c81-ae86-71af648a2146",
                              "Evil Confidant":  "28bdd27f-6f6f-4607-a972-f69cf1648c64",
                              "Lunatic":         "d85f9359-c7dc-4237-958f-08c2ed4ef558",
        					  "Oblivion Guard":  "80923393-41f5-4a68-b3c6-7b5930abb571",
                              "CASSY":           "d2264dd8-7e77-4dd2-9267-30b10f8a3611",
                              "GPT-3.5":          "28a8a539-6e63-4922-8f7c-4e42d27f85bc",
                              "Doomer":          "c68c7970-55d9-4edf-9a9e-f68306141a90",
                              "NOPE puzzle":     "f7526f5f-e1a9-48f1-bf07-a4436b957456",
                              "Kevin":           "352fe79f-2722-4b62-a830-d9ae5b7f7605",
                              "GPT-6":           "3a7b6dbf-e89d-46cf-87d0-250774283380",
                              "Inversitis Swearbot": "82692d06-44dd-4806-9c9a-f0dd0aca2d02",
                              "LawyerGPT":       "b4e86a8f-d6c2-4fb8-8735-6dad357cb3e2",
                              "Grammar Natsi":   "cfed45ae-e3a2-4fc7-9eab-3565564e2d1f",
                              "FINDOMME":        "f5fdaabb-66f0-4b1f-8f52-2cd820531e55",
                              "ASMR-GPT":        "d57491de-3420-4590-a111-451bd8b2dd55",
                              "Concise-Bot":     "433f4848-adb1-49e2-961f-8dd55c376cce",
                			  "ABI":			 "2a5c81da-2d35-405c-a3ab-b164dd2428d0",
        					  "Counter":		 "96203aaa-89b5-4098-bf51-d70ef410ba8c",
        					  "AI Overlord":	 "5785a067-1545-4ac3-8418-ce13d8828ec9",
        					  "AdGPT":	 		 "d8346212-b46f-487c-bb35-86113ed72e54",
                			  // additional characters URLs go here
                            };
          var widgetID = characters[character];        
          if (widgetID) {
            var widgetURL = prefix + widgetID;
            var width = window.innerWidth < 768 ? '100vw' : '75vw'; // adjust width based on screen size MOB:PC
            var height = window.innerHeight < 768 ? '80vh' : '80vh'; // adjust height based on screen size MOB:PC          
            widget.innerHTML =
              '<div style="height: ' + height + '; width: ' + width + ';"><iframe src="' + widgetURL + '" width="100%" height="100%" style="border: 0; border-radius: 4px;"></iframe></div>';              
            description.textContent = charactersInfo[character].description; 
			
            // Sidebar collapse if bot is selected
            if (window.innerWidth < 768) {
        		    var sidebar = document.querySelector(".sidebar");
            var toggleButton = document.getElementById("toggle-sidebar");
              sidebar.classList.toggle("collapsed");
              toggleButton.classList.toggle("collapsed");
            }
          }
        }
		
// replaced htm inline scripts <li onclick="openWidget('GPT-3.5')" title= with <li data-character="Counter" title= for this external handling
document.addEventListener("DOMContentLoaded", function () {
  var characterElements = document.querySelectorAll("[data-character]");
  characterElements.forEach(function (element) {
    element.addEventListener("click", function () {
      var character = element.getAttribute("data-character");
      openWidget(character);
    });
  });
});        
// Hidden Category toggle
function toggleCategory(categoryId) {
  const categoryElement = document.getElementById(categoryId);
  const toggleElement = document.getElementById(categoryId + '-toggle');
  
  if (categoryElement.style.display === 'none') {
    categoryElement.style.display = 'block';
    toggleElement.innerText = '−';
  } else {
    categoryElement.style.display = 'none';
    toggleElement.innerText = '+';
  }
}

// Add event listener to the hidden category toggle element
document.addEventListener("DOMContentLoaded", function() {
  const toggleCategoryElement = document.getElementById("hidden-category-toggle");
  toggleCategoryElement.addEventListener("click", function() {
    toggleCategory('hidden-category');
  });
});

        
        // Info popup	  
        const infoLinks = document.querySelectorAll('.info');
        const popup = document.querySelector('.popup');
        const popupMessage = document.querySelector('#popup-message');
        
        infoLinks.forEach(link => {
          link.addEventListener('click', function(e) {
            e.preventDefault();
            const message = this.getAttribute('data-message');
            popupMessage.innerText = message;
            popup.style.display = 'block';
          });
        });
        
        popup.addEventListener('click', function(e) {
		if (e.target === popup || e.target === popupMessage) {
            popup.style.display = 'none';
          }
        });
        
        // attempted fix Scroll prevention on widget when sidebar is expanded on mobile
        if (window.innerWidth < 768) {
          sidebar.addEventListener('touchstart', function(event) {
            if (!sidebar.classList.contains('collapsed')) {
      document.body.style.overflow = 'hidden'; 
            }
          });
          sidebar.addEventListener('touchend', function(event) {
    document.body.style.overflow = 'auto';
          });
        }

// URL change script
$(document).ready(function() {
  $('.character-link').click(function(e) {
    e.preventDefault();
    var character = $(this).text().trim(); // Get the character name from the clicked element
    window.location.href = '/' + character.toLowerCase();
  });
});


