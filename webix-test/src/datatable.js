const col2 = {
  rows: [
    {
      view: 'tabbar',
      id: 'tabbar',
      options: [
        { value: 'All', id: 'all' },
        { value: 'Old', id: 'old' },
        { value: 'Modern', id: 'modern' },
        { value: 'New', id: 'new' },
      ],
      on: {
        onChange: (value) => {
          $$('mydata').filter((obj) => {
            switch (value) {
              case 'old':
                return obj.year < 1999;
                break;
              case 'modern':
                return obj.year >= 1999 && obj.year < 2009;
                break;
              case 'new':
                return obj.year >= 2009;
                break;
              default:
                return true;
            }
          });
        },
      },
    },
    {
      view: 'datatable',
      id: 'mydata',
      select: 'row',
      scroll: 'y',
      gravity: 2,
      url: '../data/data.js',
      scheme: {
        $init: function (obj) {
          obj.categoryId = Math.floor(Math.random() * 4 + 1);
        },
      },
      columns: [
        {
          id: 'title',
          header: ['Title', { content: 'textFilter' }],
          fillspace: true,
          css: 'table_style',
        },
        {
          id: 'categoryId',
          header: ['Category', { content: 'selectFilter' }],
          editor: 'richSelect',
          fillspace: true,
          options: cCategories,
        },
        { id: 'year', header: 'Year', fillspace: true },
        {
          id: 'votes',
          header: ['Votes', { content: 'textFilter' }],
          fillspace: true,
        },
        {
          id: 'rating',
          header: ['Rating', { content: 'textFilter' }],
          fillspace: true,
        },
        {
          id: 'rank',
          header: ['Rank', { content: 'textFilter' }],
          fillspace: true,
        },
        { width: 50, template: '{common.trashIcon()}' },
      ],
      onClick: {
        'wxi-trash': function (event, id, node) {
          this.remove(id);
          return false;
        },
      },
      on: {
        onAfterAdd: function (obj) {
          this.select(obj);
          this.showItem(obj);
        },
      },
      hover: 'data_hover',
    },
  ],
};
