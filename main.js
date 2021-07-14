var name_of_the_student_array=[];
function submit()
{
    var display_name_of_student=[];
   for(var j=1;j<=4;j++){
       var name_of_the_student=document.getElementById("name_of_the_student_"+j).value;
     console.log(name_of_the_student);
     name_of_the_student_array.push(name_of_the_student);
   }
   console.log(name_of_the_student_array);
   var length=name_of_the_student_array.length;
   console.log(length);
   for(var k=0;k<length;k++){
    display_name_of_student.push("<h4>NAME -"+name_of_the_student_array[k]+"</h4>");
    console.log(display_name_of_student);
   }
   console.log(display_name_of_student);
   document.getElementById("display_name_with_commas").innerHTML=display_name_of_student;
   var removecomma=display_name_of_student.join(" ");
   console.log(removecomma);
   document.getElementById("display_name_without_commas").innerHTML=removecomma;
   document.getElementById("submit_button").style.display="none";
   document.getElementById("sort_button").style.display="inline-block";
}

function sorting()
{
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array);
    var display_name_of_student_sorting=[];
   var length=name_of_the_student_array.length;
   console.log(length);
   for(var k=0;k<length;k++){
    display_name_of_student_sorting.push("<h4>NAME -"+name_of_the_student_array[k]+"</h4>");
    console.log(display_name_of_student_sorting);
   }
   var removecomma=display_name_of_student_sorting.join(" ");
   console.log(removecomma);
   document.getElementById("display_name_without_commas").innerHTML=removecomma;
   document.getElementById("p2").innerHTML="Name_found"+found+"time/s";
   console.log("Name_found"+found+"time/s");
}
