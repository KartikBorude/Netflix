var hindi = document.querySelector("#page1 nav #nav1 button#hindi")
var fi = document.querySelector("#page2 h1")
var fi2 = document.querySelector("#page2 h1#f2")
var h4 = document.querySelector("#page2 h4")
var h5 = document.querySelector("#page2 h5")


a = 0 
hindi.addEventListener("click",function(){
   
if(a==0){
    fi.innerHTML="अनलिमिटेड फ़िल्में, टीवी"
    fi2.innerHTML="शो, और बहुत कुछ"
    h4.innerHTML="₹149 से शुरू होता है. कभी भी कैंसल करें."
    h5.innerHTML="देखने के लिए तैयार हैं? अपनी मेंबरशिप बनाने या रीस्टार्ट करने के लिए अपना ईमेल एड्रेस डालें"
   
    hindi.innerHTML="English"
    a=1
}
else{
    fi.innerHTML="Unlimited movies,"
    fi2.innerHTML="TV shows and more"
    h4.innerHTML="Starts at ₹149. Cancel at any time."
    h5.innerHTML="Ready to watch? Enter your email to create or restart your membership."
   
    hindi.innerHTML="Hindi"
    a=0
}


})