var TempFahr = prompt("Enter the temperature today");
var EventType = prompt("Enter the Event Type, Casual Formal or Semi-Formal");



var TempFahr = (TempFahr);  
var EventType = (EventType);
if (TempFahr >0 && TempFahr <55) {TempFahr = "Less than 54 degrees outside you should wear a coat,"}
else if  (TempFahr >55 && TempFahr<70) {TempFahr = "between 55 and 70 degrees outside you should wear a jacket,"}
else if  (TempFahr > 70) {TempFahr = "more than 70 degrees outside you shouldn't wear a coat,"}
else {TempFahr=  "No Value"};

if (EventType == "Casual") {EventType = "with something comfy, it's a casual event"}
else if  (EventType== 'Semi-Formal') {EventType = "with a polo, it's a Semi-Formal event"}
else if  (EventType== "Formal", 'formal') {EventType = "with a suit, it's a Formal event after all. "}
else {EventType= "No Value"};
    

    





var result = "Being that it's " + TempFahr  + EventType; 

console.log(result);