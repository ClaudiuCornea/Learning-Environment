let pseudo = $("#pseudo"),
    password = $("#mdp"),
    password_confirm = $("#mdp-confirm"),
    e_mail = $("#email"),
    send = $("#send"),
    inputs = $("input");

pseudo.change(() => green_or_red(pseudo));
password.change(() => same_password(password,password_confirm));
password_confirm.change(() => same_password(password,password_confirm));
e_mail.change(() => green_or_red(e_mail));
send.click(function(event){
    send_check(inputs,event);
});

function green_or_red(target, password) {
    if ((target.val().length > 5) && (!password)){
        target.css("border","5px solid green");
    }else{
        target.css("border","5px solid red");
    }
}

function same_password(password,password_confirm){
    if (password.val() === password_confirm.val()){
        green_or_red(password);
        green_or_red(password_confirm);
    }else{
        green_or_red(password,true);
        green_or_red(password_confirm,true);
    }
}

function send_check(target,event){
    for (let i = 0; i < target.length; i++){
        console.log(target.eq(i).val().length);
        if (target.eq(i).val().length < 5){
            event.preventDefault();
            $("#erreur").css("display","block");
            green_or_red(target.eq(i),true);
        }
    }
}