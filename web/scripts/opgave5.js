$(document).ready(function ()
{


//        if (($("#a").val() === "") || ($("#b").val() === false))
//        {
//            $("#sub").prop("disabled", true);
//            $("#a").attr("value", "skriv nu bubber");
//        }
    $("#sub").click(function ()
    {
        console.log("klik");
        if (($("#a").val() > 0) && ($("#b").val() > 0))
        {
            console.log("1");
            $("#sub").removeAttr("disabled");

        } else
        {
            console.log("0");
        }
    });








});