$('input:checkbox').prop('checked', false);

function toggleSidebar(checkbox){
    if(checkbox.checked){
        $("#sidebar").show();
    }
    else {
        $("#sidebar").hide();
    }
}
