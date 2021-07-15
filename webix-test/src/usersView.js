const ulist = {
    rows: [
        {
            cols: [{
                view: "text",
                id: "list_input",
                gravity: 5,
                on: {
                    onTimedKeyPress: function () {
                        const value = this.getValue().toLowerCase();
                        $$("ulist").filter("#name#", value);
                    }
                }
            },
            {
                view: "button",
                id: "sort_asc",
                label: "Sort asc",
                css: "webix_primary",
                click: () => {
                    $$("ulist").sort({
                        by: "#name#",
                        dir: "asc",
                        as: "string"
                    })
                },
            },
            {
                view: "button",
                id: "sort_desc",
                label: "Sort desc",
                css: "webix_primary",
                click: () => {
                    $$("ulist").sort({
                        by: "#name#",
                        dir: "desc",
                        as: "string"
                    })
                },
            }]
        },
        {
            view: "list",
            id: "ulist",
            url: "../data/users.js",
            select: true,
            template: "#name# from #country# " + "<span class='webix_icon wxi-close' style></span>",
            onClick: {
                "wxi-close": function (event, id, node) {
                    this.remove(id);
                    return false
                }
            },
            scheme: {
                $init: (obj) => {
                    if (obj.id >= 1 && obj.id <= 5) obj.$css = "highlight";
                }
            },
        }]
}

const uchart = {
    view: "chart",
    type: "bar",
    url: "../data/users.js",
    value: "#age#",
    xAxis: {
        title: "Age",
        template: "#age#"
    }
}
