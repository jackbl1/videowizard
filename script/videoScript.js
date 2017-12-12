$(function(){
    $('a.read_more').click(function(event){
        event.preventDefault();
        document.getElementById("more_text").style.display='block';
    });
});