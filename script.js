function birthdayBoy () {
    var name = document.getElementById("yourName").value;
    var date = new Date();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var selectedMonth = document.getElementById("selectMonth").value;
    var selectedDay = document.getElementById("selectDay").value - 1;
    var monthDayCombined = selectedMonth + selectedDay;
    var birthdayCombined = month + "" + day;
    if (monthDayCombined == birthdayCombined) {
        document.getElementById("output").innerHTML = "OMG! " + name + ", it's your birthday!";
        document.getElementById("outputImage").innerHTML = "<image src = 'img/birthday.png'>";
        document.getElementById("outputFuture").innerHTML = "In the coming year, you will have a hell on earth. All of your friends" +
            "will start to hate you, you will fail all your classes, and everything you ever had will be lost. Hope it's a good year! :)";
        return true;
    }
}


function validateDate(){
    var thirtyOneDays = ["January", "March", "May", "July", "August", "October", "December"];
    var thirtyDays = ["April", "June", "September", "November"];
    var monthBox = document.getElementById("selectMonth");
    var dayBox = document.getElementById("selectDay");
    var numberOfDaysInMonth;
    var selectedMonth = monthBox.options[monthBox.selectedIndex].textContent;
    if(thirtyOneDays.indexOf(selectedMonth) != -1 ){
        numberOfDaysInMonth = 31;
    }
    if(thirtyDays.indexOf(selectedMonth) != -1 ){
        numberOfDaysInMonth = 30;
    }
    if(thirtyOneDays.indexOf(selectedMonth) == -1 && thirtyDays.indexOf(selectedMonth) == -1 ){
        numberOfDaysInMonth = 28;
    }
    console.log("joe");
    dayBox.options.length = 0;
    var firstOption = document.createElement("option");
    firstOption.value = 0;
    firstOption.textContent = "Choose Day";
    dayBox.appendChild(firstOption);
    for(var i = 2; i <= numberOfDaysInMonth + 1; i++){
        var newOption = document.createElement("option");
        newOption.value = i;
        newOption.textContent = i-1;
        dayBox.appendChild(newOption);
    }

}

function determineSign() {
    console.log(document.getElementById("selectMonth").value);
    var name = document.getElementById("yourName").value;
    var selectedMonth = document.getElementById("selectMonth").value;
    var selectedDay = document.getElementById("selectDay").value;
    if(selectedDay < 10) {
        var selectedDay = 0 + "" + document.getElementById("selectDay").value;
        }
    console.log(document.getElementById("yourName").value);
    horoscopeArray = [0,"Capricorn", 120, "Aquarius", 218, "Pisces", 321, "Aries", 420, "Taurus", 521,
        "Gemini", 621, "Cancer", 723, "Leo", 823, "Virgo", 923, "Libra", 1023, "Scorpio", 1122, "Sagittarius", 1222, "Capricorn", 1240];
    var monthDayCombined = selectedMonth + selectedDay;
    var sign;
    console.log("hi");
    for(var i=0; i < horoscopeArray.length; i = i + 2){
         if(horoscopeArray[i] >= monthDayCombined){
             sign = horoscopeArray[i - 1];
             break;
         }
    }
    document.getElementById("output").innerHTML = name + ", your horoscope is " + sign + "!" ;
    document.getElementById("outputImage").innerHTML = "<image src = 'img/" + sign + ".png'>"
    return sign;
}

function determineFuture(){
    birthdayBoy();
    var sign = determineSign();
    var locationOfSign = horoscopeArray.indexOf(sign);
    console.log("bob");
    if(birthdayBoy() != true) {
        document.getElementById("outputFuture").innerHTML = (horoscopeFuture[(locationOfSign + 1) / 2]);
    }
    document.getElementById("border").style.display = "block";
}
function setUpVars(){
    horoscopeFuture = ["The gentle winds of change are blowing through your life at the moment. You have a feeling of n" +
    "ewness and an open attitude toward the world. Some outside events give you the impression that you're advancing in a" +
    " concrete manner toward a new life. You can expect to have some pleasant surprises.", "In your case, the phrase turning" +
    " point has some meaning. This turning point could take the form of a new person or a key event that changes things forever." +
    " Sometimes amazing things we hear about really do happen. One of these things may be happening to you in the coming months.", "It" +
    " may be that you've come back deeply changed from a long voyage. Of course, travel changes everyone to some extent, but in your" +
    " case, the change is more profound. You're going to have a problem getting back into your old life. It may feel too limiting" +
    " for you. So what are you waiting for? Change it!", "If you feel suffocated by your romantic relationship, if you feel it lacks" +
    " spice or is too traditional, then why not liberate yourself? Today's planetary energy will help you turn even your craziest " +
    "ideas into reality. Starting today, you're going to be asked to be more decisive.", "You've met some strange people who have " +
    "greatly influenced your attitude about your marriage or partnership. Some people have been pushing you toward more freedom. " +
    "These people have been influenced by the planetary alignments, but that's no reason you have to be. Freedom or lack of it is " +
    "completely subjective.", "If you've yearned to modify something in your daily life, do it now. The planetary energy is telling" +
    " you that the hour has come to make concrete changes. Whether the change you seek is at home or at work, physical or emotional," +
    " don't be afraid to seriously upset the status quo of your life.", "The planetary shift will probably be imperceptible today," +
    " but you'll have several months to understand how this change impacts you. It will dawn on you that you feel a strong need for" +
    " liberation. Perhaps you need to release yourself from the bonds of your group. Change and innovation are in the air!", "You mustn't" +
    " expect any enormous changes today. The process you began three or four years ago will accelerate slightly. You're changing" +
    " the moorings of your identity, the ideas that make you sure of who you are. Your family, background, and education no longer" +
    " count for as much as your spiritual foundations.", "The day ahead should be fairly positive. You'll begin to feel the faintest" +
    " hint of a major change beginning. This new phase will last seven months. As it progresses, you'll find greater freedom of" +
    " expression. You can expect to shift into high gear on subjects you used to avoid in the past. Some friction with siblings" +
    " may arise in the next few months.", "The solar system is liable to trigger a transformation that will last several months." +
    " The change will center on the means you use to fulfill yourself in terms of your career and love life. If you feel hemmed" +
    " in by your training or upbringing, you can expect to seek liberation from these inhibitions in the months to come.", "It's" +
    " an excellent day for you! Although no major events occur today, there's the promise of freedom in the coming months." +
    " A fundamental shift is about to occur in your occupation and love life. As the months unfold, you can expect to be more" +
    " visionary, more creative, and perhaps more rebellious. You'll be much more effective than in the past two or three years.", "To" +
    " understand the shift occurring today, you must look at events from a lofty perspective. A slow liberation process is" +
    " gathering momentum. Over the next few months you won't refuse an opportunity to rid yourself of an oppressive part of" +
    " your past. You'll shed your old complexes and emerge renewed. Don't be alarmed if family relations suffer a bit. The " +
    "distress is only temporary.", "The gentle winds of change are blowing through your life at the moment. You have a feeling" +
    " of newness and an open attitude toward the world. Some outside events give you the impression that you're advancing" +
    " in a concrete manner toward a new life. You can expect to have some pleasant surprises."];

    horoscopeArray = [0, "Capricorn", 120, "Aquarius", 218, "Pisces", 321, "Aries", 420, "Taurus", 521,
        "Gemini", 621, "Cancer", 723, "Leo", 823, "Virgo", 923, "Libra", 1023, "Scorpio", 1122, "Sagittarius", 1222, "Capricorn", 1240];
}

