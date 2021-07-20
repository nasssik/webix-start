const cCategories = new webix.DataCollection({
    url:'../data/categories.js'
  });

const cUsers = new webix.DataCollection({
    url:'../data/users.js'
  });

const admin = {
    rows:[
    {
    view:"datatable", 
    id:"admin_table",
    editable:true,
    editaction:"click",
    rules: {
        value: webix.rules.isNotEmpty
    },
      columns:[
        { id:"id",	header:""},
        { id:"value", editor:"text", header:"Category", fillspace: true},  
        { width: 50, template: "{common.trashIcon()}" }
      ],
      onClick: {
        "wxi-trash": function (event, id, node) {
            this.remove(id);
            return false
        },
    },
},
{ view:"button", value:"Add item", click:addItem, css:"webix_danger" }
]
}

function addItem(){
    $$("admin_table").add({value:"Cartoon" });
  };
