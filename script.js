
/*----clock----*/
setInterval(()=>{
        const time = document.querySelector("#time");
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let day_night = "AM";
        if(hours > 12){
        hours = hours - 12;
        day_night = "PM";
        }
        if(hours < 10){
        hours = "0" + hours;
        }
        if(minutes < 10){
        minutes = "0" + minutes;
        }
        if(seconds < 10){
        seconds = "0" + seconds;
        }
        time.textContent = hours +":" + minutes + ":" + seconds + day_night;
        });


/*---------Employee search-----*/
        var messages = new Array(22);
        messages[0] = "Select Employee From Dropdown";
        messages[1] = "BLARKMAN";
        messages[2] = "ANDY975";
        messages[3] = "A691B477";
        messages[4] = "B213B125";
        messages[5] = "B058G887";
        messages[6] = "CKESSLER";
        messages[7] = "CMANNELL";
        messages[8] = "D633H644";
        messages[9] = "D923P315";
        messages[10] ="E347N692";
        messages[11] = "J879G814";
        messages[12] = "JKWHEEL";
        messages[13] = "K737M994";
        messages[14] = "K602M297";
        messages[15] = "L068C490";
        messages[16] = "L895S788";
        messages[17] = "M398D829";
        messages[18] = "SMBEHZADI";
        messages[19] = "R847C109";
        messages[20] = "R845P919";
        messages[21] = "TBRYCE";
        messages[22] = "J078A519";
        function messageReveal() {
        var messageindex = document.messageForm.messagePick.selectedIndex
        document.messageForm.messageField.value = messages[messageindex];
        }