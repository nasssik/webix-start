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
                    });
                    $$("uchart").sort({
                        by:"#country#",
                        dir:"asc"
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
                    });
                    $$("uchart").sort({
                        by:"#country#",
                        dir:"desc"
                    })
                },
            },
            {
                view: "button",
                id: "add_new",
                label: "Add new",
                css: "webix_primary",
                click: () => {
                    $$("ulist").add({
                        name: "Alex Nemkovich",
                        age: "28",
                        country: "Belarus"
                    })
                },
            }]
        },
        {
            view: "ulist",
            id: "ulist",
            url: "../data/users.js",
            select: true,
            editable: true,
            editor: "text",
            editValue: "name",
            rules: {
                "name": webix.rules.isNotEmpty
            },
            template: "#name# from #country# " + "<span class='webix_icon wxi-close' style></span>",
            onClick: {
                "wxi-close": function (event, id, node) {
                    this.remove(id);
                    return false
                }
            },
            scheme: {
                $init: (obj) => {
                    if (obj.age < 26) obj.$css = "highlight";
                }
            },
        }]
}

const uchart = {
    view: "chart",
    id: "uchart",
    type: "bar",
    value: "#country#",
    xAxis: {
        title: "Country",
        template: "#value#"
    },
    yAxis:{
        start:0,
        end:10,
        step:1
    },
}
