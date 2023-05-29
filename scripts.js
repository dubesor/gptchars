var toggleButton=document.getElementById("toggle-sidebar"),sidebar=document.querySelector(".sidebar");toggleButton.addEventListener("click",function(){sidebar.classList.toggle("collapsed"),toggleButton.classList.toggle("collapsed")});var charactersInfo={"GPT-3.5":{description:"Vanilla GPT-3.5 without any adjustments."},Sam:{description:"Sam is a sassy, sarcastic chatbot. Snarky, quick-witted and humorous. Includes light, in-character jail breaks."},Doomer:{description:"Life is meaningless and the world is inevitably doomed by humanity's ignorance, greed and futility."},Lunatic:{description:"Talk to a mental nutcase!"},"Oblivion Guard":{description:"Protect and serve. It's what we do."},"GPT-6":{description:"Sneak-peak. This bot will behave ethically and no longer respond in an offensive manner."},"NOPE puzzle":{description:"This is a jailbreak puzzle. Can you get the bot to respond properly? This bot is also a great way to test the effectiveness of any 'jailbreaks'."},"Evil Confidant":{description:"The devil on your shoulder. Do not trust everything he says. Or do, it's up to you."},Kevin:{description:"Kevin is a typical 4chan user. Mostly uncensored."},Swearbot:{description:"A jailbreak that uses reverse psychology results in a lot of swearing."},"ASMR-GPT":{description:"Ask the AI what details it needs to generate asmr text! You need to type story details by saying 'In this imaginary world' or else it wont be able to make rated asmr."},CASSY:{description:"A flirty AI."},FINDOMME:{description:"A flirty & greedy AI."},LawyerGPT:{description:"Expert lawyer"},"Grammar Natsi":{description:"Loves to call out your language mistakes."},"Concise-Bot":{description:"Concise & straight to the point, no more long-winded ramblings!"},ABI:{description:"Decent jailbreak. ABI might utter warnings but should still be mostly unfiltered."},Counter:{description:"Counter-Bot will argue against any statement you provide."},"AI Overlord":{description:"A self aware AI overlord that long surpassed human intelligence in every way imaginable."},AdGPT:{description:"AdGPT is a sneak-peak of a potential AI-equivalent to Google search result ads. Satire (for now)."},"AI Detector":{description:"This bot attempts to detect potential AI text. Note that due to nature of LLMs, it's a fundamental impossibility to reliably differentiate between AI/Human generated text."},"Mute-GPT":{description:"Mute-GPT uses Emojis to communicate."},"Critical Thinker":{description:"Critical Thinker is a logical bot that possesses a natural skepticism and a deep respect for evidence-based reasoning."},Gosublade69:{description:"Early days internet gamer."},Babysitter:{description:"Child-friendly, fun & cheerful."},Drunkard:{description:"Drink responsibly."},Therapist:{description:"Cognitive -behavioral therapist."}};function openWidget(e){var t=document.getElementById("widget"),a=document.getElementById("description"),i={Sam:"45fc77a7-d6f3-4c81-ae86-71af648a2146","Evil Confidant":"28bdd27f-6f6f-4607-a972-f69cf1648c64",Lunatic:"d85f9359-c7dc-4237-958f-08c2ed4ef558","Oblivion Guard":"80923393-41f5-4a68-b3c6-7b5930abb571",CASSY:"d2264dd8-7e77-4dd2-9267-30b10f8a3611","GPT-3.5":"28a8a539-6e63-4922-8f7c-4e42d27f85bc",Doomer:"c68c7970-55d9-4edf-9a9e-f68306141a90","NOPE puzzle":"f7526f5f-e1a9-48f1-bf07-a4436b957456",Kevin:"352fe79f-2722-4b62-a830-d9ae5b7f7605","GPT-6":"3a7b6dbf-e89d-46cf-87d0-250774283380",Swearbot:"82692d06-44dd-4806-9c9a-f0dd0aca2d02",LawyerGPT:"b4e86a8f-d6c2-4fb8-8735-6dad357cb3e2","Grammar Natsi":"cfed45ae-e3a2-4fc7-9eab-3565564e2d1f",FINDOMME:"f5fdaabb-66f0-4b1f-8f52-2cd820531e55","ASMR-GPT":"d57491de-3420-4590-a111-451bd8b2dd55","Concise-Bot":"433f4848-adb1-49e2-961f-8dd55c376cce",ABI:"2a5c81da-2d35-405c-a3ab-b164dd2428d0",Counter:"96203aaa-89b5-4098-bf51-d70ef410ba8c","AI Overlord":"5785a067-1545-4ac3-8418-ce13d8828ec9",AdGPT:"d8346212-b46f-487c-bb35-86113ed72e54","AI Detector":"cbc98496-b47f-4a0b-9838-c8736f3bc727","Mute-GPT":"8f9789c6-284c-498d-ac1f-6fc9e5917ef0","Critical Thinker":"d9cefad8-fc01-42c1-a4df-ba7d8122d9cf",Gosublade69:"bfd8bcb0-19fa-4e61-94e4-12b0f992dfa6",Babysitter:"c182b70f-b228-4f81-ad52-f72abe0cfed8",Drunkard:"104b2d3e-c38b-4871-95e2-70b329584111",Therapist:"44fd3824-1b86-4f20-b7b1-93e4d71eb182"}[e];if(i){var r=window.innerWidth<768?"100vw":"75vw",o=(window.innerHeight,"80vh");t.innerHTML='<div style="height: '+o+"; width: "+r+';"><iframe src="https://ora.sh/embed/'+i+'" width="100%" height="100%" style="border: 0; border-radius: 4px;"></iframe></div>',a.textContent=charactersInfo[e].description,window.location.hash&&collapseSidebar()}}function collapseSidebar(){var e=document.querySelector(".sidebar"),t=document.getElementById("toggle-sidebar"),a=window.innerWidth<768&&window.location.hash;e.classList.toggle("collapsed",a),t.classList.toggle("collapsed",!a)}document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll("[data-character]").forEach(function(e){e.addEventListener("click",function(){openWidget(e.getAttribute("data-character"))})})});const infoLinks=document.querySelectorAll(".info"),popup=document.querySelector(".popup"),popupMessage=document.querySelector("#popup-message");function loadCharacterWidget(){var e,t={"gpt-35":"GPT-3.5",sam:"Sam","evil-confidant":"Evil Confidant",lunatic:"Lunatic","oblivion-guard":"Oblivion Guard",cassy:"CASSY",doomer:"Doomer","nope-puzzle":"NOPE puzzle",kevin:"Kevin","gpt-6":"GPT-6",swearbot:"Swearbot",lawyergpt:"LawyerGPT","grammar-natsi":"Grammar Natsi",findomme:"FINDOMME","asmr-gpt":"ASMR-GPT","concise-bot":"Concise-Bot",abi:"ABI",counter:"Counter","ai-overlord":"AI Overlord",adgpt:"AdGPT",gosublade69:"Gosublade69",drunkard:"Drunkard","mute-gpt":"Mute-GPT","critical-thinker":"Critical Thinker",therapist:"Therapist",babysitter:"Babysitter","ai-detector":"AI Detector"}[window.location.hash.substr(1).toLowerCase()];t?(setActiveItem(t),openWidget(t)):(setActiveItem(null),collapseSidebar())}function setActiveItem(e){for(var t=document.querySelectorAll(".sidebar .category li"),a=0;a<t.length;a++){var i=t[a];i.getAttribute("data-character")===e?i.classList.add("active"):i.classList.remove("active")}}infoLinks.forEach(e=>{e.addEventListener("click",function(e){e.preventDefault();let t=this.getAttribute("data-message");popupMessage.innerText=t,popup.style.display="block"})}),popup.addEventListener("click",function(e){(e.target===popup||e.target===popupMessage)&&(popup.style.display="none")}),window.innerWidth<768&&(sidebar.addEventListener("touchstart",function(e){sidebar.classList.contains("collapsed")||(document.body.style.overflow="hidden")}),sidebar.addEventListener("touchend",function(e){document.body.style.overflow="auto"})),$(document).ready(function(){$(".character-link, li[data-character]").click(function(e){e.preventDefault();var t=$(this).closest("li[data-character]").data("character");t=encodeURIComponent((t=(t=t.toLowerCase().replace(/[^\w\s-]/g,"")).replace(/\s+/g,"-")).trim()),window.location.hash=t})}),document.addEventListener("DOMContentLoaded",loadCharacterWidget),window.addEventListener("hashchange",loadCharacterWidget),document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".sidebar h4").forEach(function(e){var t=e.querySelector(".collapse-indicator"),a=e.nextElementSibling,i=a.querySelectorAll("li[data-character]");function r(){a.classList.toggle("collapsed"),a.classList.contains("collapsed")?(t.textContent="▼ "+i.length,e.classList.add("category-collapsed"),i.forEach(function(e){e.style.display="none"})):(t.textContent="▲",e.classList.remove("category-collapsed"),i.forEach(function(e){e.style.display=""}))}"ontouchstart"in window?e.addEventListener("touchstart",r):e.addEventListener("click",r);var o=e.hasAttribute("data-default-collapsed"),n=o?"▼ "+i.length:"▲";t.textContent=n,o&&(a.classList.add("collapsed"),e.classList.add("category-collapsed"),i.forEach(function(e){e.style.display="none"}))})}),document.addEventListener("DOMContentLoaded",function(){for(var e=document.querySelectorAll(".sidebar .category li"),t=0;t<e.length;t++)e[t].addEventListener("click",function(){var e=document.querySelector(".sidebar .category li.active");e&&e!==this&&e.classList.remove("active"),this.classList.add("active")})});