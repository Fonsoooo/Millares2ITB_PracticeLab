function validateForm() {
    fullDate1 = document.getElementById("eDate1ID").value;
    fullDate2 = document.getElementById("eDate2ID").value;
    fullDate3 = document.getElementById("pDateID").value;

    // year1 =  fullDate1.substring(0, 4);
    // month1 = fullDate1.substring(5, 7);
    // day1 =   fullDate1.substring(8, 10);

    // year2 =  fullDate2.substring(0, 4);
    // month2 = fullDate2.substring(5, 7);
    // day2 =   fullDate2.substring(8, 10);

    // year3 =  fullDate3.substring(0, 4);
    // month3 = fullDate3.substring(5, 7);
    // day3 =   fullDate3.substring(8, 10);

    // fullDate1F = {year1, month1, day1};
    // fullDate2F = {year2, month2, day2};
    // fullDate3F = {year3, month3, day3};

    // //check event dates

    // if(fullDate1F.year1 <= fullDate2F.year2){
    //     if(fullDate1F.year1 < fullDate2F.year2){ 
    //         checkPost();
    //     }
    //     else if(fullDate1F.month1 <= fullDate2F.month2){
    //         if(fullDate1F.month1 < fullDate2F.month2){
    //             checkPost();
    //         }
    //         else if(fullDate1F.day1 <= fullDate2F.day2){
    //             checkPost();
    //         }
    //         else alert("Event Dates not Valid! Starting Date must be before or on the same date as End Date. [Day Invalid]");
    //     }
    //     else alert("Event Dates not Valid! Starting Date must be before or on the same date as End Date. [Month Invalid]");
    // }
    // else alert("Event Dates not Valid! Starting Date must be before or on the same date as End Date. [Year Invalid]");

    // function checkPost(){
    //     // check posting date

    //     if(fullDate3F.year3 >= fullDate1F.year1 && fullDate3F.year3 <= fullDate2F.year2){
    //         if(fullDate3F.year3 == fullDate2F.year2){
    //             if(fullDate3F.month3 <= fullDate2F.month2){
    //                 if(fullDate3F.day3 <= fullDate2F.day2){
    //                     alert("Submission Received!");
    //                 } 
    //             }
                
                
    //         }
    
    //         else if(fullDate3F.month3 >= fullDate1F.month1 && fullDate3F.month3 <= fullDate2F.month2){
    //             if(fullDate3F.month3 > fullDate1F.month11 && fullDate3F.month3 < fullDate2F.month2){ 
    //                 alert("Submission Received!");
    //             }
                
    //             else if(fullDate3F.day3 >= fullDate1F.day1 && fullDate3F.day3 <= fullDate2F.day2){
    //                 alert("Submission Received!");
    //             }
    //             else alert("Posting Date not Valid! Posting Date must be between Starting and End Dates. [Day Invalid]");
    //         }
    //         else alert("Posting Date not Valid! Posting Date must be between Starting and End Dates. [Month Invalid]");
    //     }
    //     else alert("Posting Date not Valid! Posting Date must be between Starting and End Dates. [Year Invalid]");
    // }

    
    
    // date1 = document.getElementById("eDate1ID").value;
    // alert(year + " " + month + " " + day);

    if(fullDate1 <= fullDate2){
        if(fullDate3 <= fullDate2 && fullDate3 >= fullDate1){
            alert("Submission Sent!")
        }
        else alert("Your Posting Date is Invalid!");
    }
    else alert("One/Both of your Event Dates is/are invalid!");
}