$(document).ready(function(){
    document.getElementById("more_text").style.display = 'none';
    $('a.read_more').click(function(event){
        event.preventDefault();
        if(document.getElementById("more_text").style.display == 'none'){
            document.getElementById("more_text").style.display = 'block';
        }
        else{
            document.getElementById("more_text").style.display = 'none';
        }
    });
});