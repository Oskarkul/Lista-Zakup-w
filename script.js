$(document).ready(function(){
    let i = 0;
    let k = 0;
    $("#placeholder").hide();
    $(".Edit").hide();
    //dodaj na początku
    $(".addf").click(function(){
        if($("#placeholder").text()){
            console.log("placeholdery usunięty");
            $("#placeholder").remove();
            $(".Edit").remove();
        }
        if($('.zakupy').val().trim()!=""){
            
           $("#lista").prepend("<li class='list-group-item'>"+$(".zakupy").val()+"</li>"); 
            
        }
    });
    //dodaj na końcu
    $(".addl").click(function(){
        if($("#placeholder").text()){
            console.log("placeholdery usunięty");
            $("#placeholder").remove();
            $(".Edit").remove();
        }
        if($('.zakupy').val().trim()!=""){
            
           $("#lista").append("<li class='list-group-item'>"+$(".zakupy").val()+"</li>"); 
            
        }
    });
    //usuń ostatni element
    $(".delete").click(function(){
        
        $("#lista li:last").remove();
        
    });
    //usuń wszystko
    $(".delEvery").click(function(){
        
        $("#lista li").remove();
        
    });
    //kolorowanie co 2 wiersz
    $(".koloruj").click(function(){
        if(k==0){
            k++
           console.log("kolorowanie");
            $("li:even").css("background-color", "yellow");
            $("li:even").css("color", "#A0DE33"); 
        }
        else{
            k=0;
            console.log("dekolorowanie");
            $("li:even").css("background", "none");
            $("li:even").css("color", "black");
        }
    });
    //kliknięcie elementy listy
    $("li").parent("#lista").click(function(){
        console.log("input działa");
        if(i==0){
            i++;
           $(this).css("background-color", "lightblue");
            $(this).css("color","blue"); 
        }
        else{
            i=0;
            $(this).css("background", "none");
            $(this).css("color","black");
            
        }
        
    });
    
        













});
