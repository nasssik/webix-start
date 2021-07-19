const prodView = {
    view: "treetable",
    url: "../data/products.js",
    scroll: "y",
    columns: [
        { id: "id",header: "", css: { "text-align": "right" }, width: 50 },
        {
            id: "title", editor: "text", header: "Title", width: 1000,
            template: "{common.treetable()} #title#"
        },
        { id: "price", editor: "text", header: "Price", width: 600, }
    ],
    select: "row",
    rules: {
        "price": webix.rules.isNumber,
        "title": webix.rules.isNotEmpty
    },
    ready: function () {
        this.openAll();
    },
    editable: true,

}