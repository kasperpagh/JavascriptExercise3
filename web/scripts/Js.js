
$(document).ready(function ()
{
    //Opgave 1
    $("#a").click(function ()
    {
        $(this).hide();
    });

    $("#b").mouseenter(function ()
    {
        $(this).css("border", "4px solid black");
    });
    $("#b").click(function ()
    {
        $("#c").css("font-size", "300%");
    });

   
    //Opgave 2
    $(".opg2").click(function ()
    {        
        console.log("Klik på box");
        
        tal = parseInt($(this).text());
        console.log(tal);
        tal = Math.pow(tal, 2);
        $(this).html(tal);
    });
    
    //Opgave 3
    
    $("li").filter(":even").css("backgroundColor","lightgray");
    var size = 100;
    $("li").each(function ()
    {
        console.log("i loop " + $(this));
       $(this).css("font-size", size.toString()+"%"); 
       size = size + (0.1 * size);
    });



});



