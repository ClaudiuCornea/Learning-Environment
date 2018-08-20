let app = new Vue({
  el : ".app",
  data: {
    message: "Hello Vue!"
  }
});

let app_2 = new Vue({
    el : "#app_2",
    data : {
        message : "You loaded this on " + new Date().toLocaleString()
    }
});

let app_3 = new Vue({
    el : "#app_3",
    data : {
        seen : true
    }
});

let app_4 = new Vue({
    el : "#app_4",
    data : {
        todos : [
            {text : "Learn JS"},
            {text : "Learn Vue"}
            ]
    }
});

let app_5 = new Vue({
    el : "#app_5",
    data : {
        message : "Hello World!"
    },
    methods : {
        reverseMessage : function(){
            this.message = this.message.split('').reverse().join('');
        }
    }
});

let app_6 = new Vue({
    el : "#app_6",
    data : {
        message : "Hello World!"
    }
});

Vue.component( "todo-item", {
    props : ["todo"],
    template : "<li>{{ todo.text }}</li>"
});

let app_7 = new Vue ({
    el : "#app_7",
    data : {
        groceryList : [
            { id : 0, text : "Vegetables"},
            { id : 1, text : "Chesse"}
            ]
    }
});