function validateForm() {
    fullDate1 = document.getElementById("eDate1ID").value;
    fullDate2 = document.getElementById("eDate2ID").value;

    year1 =  fullDate1.substring(0, 4);
    month1 = fullDate1.substring(5, 7);
    day1 =   fullDate1.substring(8, 10);

    year2 =  fullDate2.substring(0, 4);
    month2 = fullDate2.substring(5, 7);
    day2 =   fullDate2.substring(8, 10);

    fullDate1F = {year1, month1, day1};
    fullDate2F = {year2, month2, day2};


    if(fullDate1F.year1 <= fullDate2F.year2){
        if(fullDate1F.month1 <= fullDate2F.month2){
            if(fullDate1F.day1 <= fullDate2F.day2){
                alert("Submission Received!");
            }
            else alert("Date not Valid! Starting Date must be before or on the same date as End Date. [Day Invalid]");
        }
        else alert("Date not Valid! Starting Date must be before or on the same date as End Date. [Month Invalid]");
    }
    else alert("Date not Valid! Starting Date must be before or on the same date as End Date. [Year Invalid]");
    
    date1 = document.getElementById("eDate1ID").value;
    alert(year + " " + month + " " + day);
}