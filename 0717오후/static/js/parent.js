let child="";

$(function(){
    $("#open_child").click(function(){

        if( $("#name").val() == ''  ){ //input 태그에 이름을 입력안했다면
            alert("이름을 먼저 입력하세요");
            $("#name").focus();
            return;
        }

        child = window.open("child.html","","width=500,height=300,top=100,left=300");

    });
    $("#child_send").click(function(){

        $(child.document).find('#input_name').html($("#name").val());
    });

});