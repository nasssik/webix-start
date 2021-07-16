
const col2 = {
    rows: [
        {
            view: "tabbar",
            options: [
                { value: 'All', id: 'all' },
                { value: 'Old', id: 'old' },
                { value: 'Modern', id: 'modern', },
                { value: 'New', id: 'new' }
            ],
            cells: [
                {
                    id: "all",
                },
                {
                    id: "old",
                    click: function () {
                        $$("mydata").filter((obj) => {
                            return (obj.year <= 2000)

                        })
                    }
                },
                {
                    id: "modern",
                    click: function () {
                        $$("mydata").filter((obj) => {
                            return (obj.year > 2000 && obj.year < 2019)
                        })
                    }
                },
                {
                    id: "new",
                    click: function () {
                        $$("mydata").filter((obj) => {
                            return (obj.year >= 2019)
                        })
                    }
                },
            ]
        },
        {
            view: 'datatable',
            id: 'mydata',
            select: "row",
            scroll: 'y',
            gravity: 2,
            url: "../data/data.js",
            scheme: {
                $init: function (obj) {
                    obj.categoryId = Math.floor(Math.random() * 4 + 1);
                }
            },
            columns: [
                { id: 'title', header: ['Title', { content: "textFilter" }], fillspace: true, css: "table_style" },
                { id: 'categoryId', header: ['Category', { content: "selectFilter" }], editor: "richSelect", fillspace: true, collection: "../data/categories.js" },
                { id: 'year', header: 'Year', fillspace: true },
                { id: 'votes', header: ['Votes', { content: "textFilter" }], fillspace: true },
                { id: 'rating', header: ['Rating', { content: "textFilter" }], fillspace: true },
                { id: 'rank', header: ['Rank', { content: "textFilter" }], fillspace: true },
                { width: 50, template: "{common.trashIcon()}" }
            ],
            onClick: {
                "wxi-trash": function (event, id, node) {
                    this.remove(id);
                    return false
                }
            },
            hover: "data_hover",
        }
    ]
};

