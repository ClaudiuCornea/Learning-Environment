function calc_age(){
    let actual_y,
    bird_y,
    age;
    actual_y=prompt('Dans quelle année sommes-nous?');
    bird_y=prompt('Dans quelle année es-tu née?');
    age='Vous avez '+(actual_y - bird_y)+' ans.';
    alert(age);
}

function array_0_to_9(){
    let array=[];
    for (let iter=0; iter<10;iter++){
        array.push(iter);
    }
    return(array);
}

function add_items_list(list){
    let total=0;
    for (let iter in list){
        total+=parseInt(iter);
    }
    return(total);
}

function generate_word_list(word,gen){
    let list=[];
    for(let iter in word){
        if(!gen){
            list.push(word[iter]);
        }else{
            list.push('');
        }
    }
    return(list);
}

function find(leter,list,empty_list){
    for(let iter=0; iter<list.length;iter++){
        if(leter==list[iter]){
            empty_list[iter]=leter;
            console.log('Vous avez trouvez une lettre.');
        }
    }
    return(empty_list);
}



function win(list,empty_list){
    let result=true;
    if(list_idem(list,empty_list)){
        result=false;
        console.log('Vous avez gagné, BRAVO!');
    }
    return(result);
}

function list_idem(list_1,list_2){
    let iter=list_1.length;
    if(iter!=list_2.length){
        return(false);
    }
    while(iter--){
        if(list_1[iter]!==list_2[iter]){
            return(false);
        }
    }
    return(true);
}

function jeu_pendu(){
    console.log("Bienvenue au jeu du pendu by me");
    let word=prompt("Entrez un mot que vous voulez faire devinez à votre cerveau."),
        word_list=generate_word_list(word),
        empty_list=generate_word_list(word,true),
        result=true,
        leter;
    console.log(empty_list);
    do{
        leter=prompt('Entrez une lettre pour deviner le mot');
        console.log(leter);
        empty_list=find(leter,word_list,empty_list);
        console.log(empty_list);
        result=win(word_list,empty_list);
    }while(result);
}

function randon_between(min,max, up){
    let random_x=(Math.random()*(max-min)+min);
    if (!up){
        random_x=Math.ceil(random_x);
    }else{
        random_x=Math.floor(random_x);
    }
    return(random_x);
}
