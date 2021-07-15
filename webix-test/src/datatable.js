const col2 = {
    view: 'datatable',
    id: 'mydata',
    select: "row",
    scroll: 'y',
    gravity: 2,
    url: "../data/data.js",
    columns: [
        { id: 'title', header: ['Title', { content: "textFilter" }], fillspace: true, css: "table_style" },
        { id: 'year', header: ['Year', { content: "textFilter" }], fillspace: true },
        { id: 'votes', header: ['Votes', { content: "textFilter" }], fillspace: true },
        { id: 'rating', header: ['Rating', { content: "textFilter" }], fillspace: true },
        { id: 'rank', header: ['Rank', { content: "textFilter" }], fillspace: true },
        { width: 50, template: "{common.trashIcon()}" }
    ],
    on: {
        onAfterSelect: valuesToForm
    },
    onClick: {
        "wxi-trash": function (event, id, node) {
            this.remove(id);
            return false
        }
    },
    hover: "data_hover",
};

function valuesToForm(id) {
    var values = $$("mydata").getItem(id);
    $$("myform").setValues(values)
};

