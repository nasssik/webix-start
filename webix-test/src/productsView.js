const prodView = {
    view: "treetable",
    url: "../data/products.js",
    scroll: "y",
    columns: [
        { id: "id", header: "", css: { "text-align": "right" }, width: 50 },
        {
            id: "value", header: "Title", width: 1000,
            template: "{common.treetable()} #title#"
        },
        { id: "price", header: "Price", width: 600, }],
    select: "row",
    ready: function () {
        this.openAll();
    },

}