const col3 = {
  view: 'form',
  id: 'myform',
  elements: [
    {
      rows: [
        { template: 'Edit Films', type: 'section' },
        {
          view: 'text',
          label: 'Title',
          name: 'title',
          value: '',
          invalidMessage: 'Empty title',
        },
        {
          view: 'text',
          label: 'Year',
          name: 'year',
          value: '',
          invalidMessage: 'Year is not between 1970 and 2021',
        },
        {
          view: 'text',
          label: 'Rating',
          name: 'rating',
          value: '',
          invalidMessage: 'Incorrect rating',
        },
        {
          view: 'text',
          label: 'Votes',
          name: 'votes',
          value: '',
          invalidMessage: 'Votes must me less than 10000',
        },
        {
          view: 'richselect',
          label: 'Category',
          name: 'categoryId',
          value: 1,
          options: cCategories,
        },
      ],
    },
    {
      cols: [
        {
          view: 'button',
          label: 'Save',
          type: 'form',
          css: 'webix_primary',
          click: saveItem,
        },
        {
          view: 'button',
          label: 'Clear',
          click: () => {
            webix
              .confirm({
                title: 'Please, confirm',
                ok: 'Clear',
                cancel: 'Cancel',
                text: 'Are you sure that you want to clear your form?',
              })
              .then(() => {
                const form = $$('myform');
                const data = $$('mydata');
                form.clear();
                form.clearValidation();
                data.clearSelection();
              });
          },
        },
      ],
    },
    {},
  ],
  rules: {
    title: webix.rules.isNotEmpty,
    year: (value) => {
      return value >= 1970 && value <= 2021;
    },
    votes: (value) => {
      return value < 100000;
    },
    rating: (value) => {
      return webix.rules.isNotEmpty && value != 0;
    },
  },
};

function saveItem() {
  const form = $$('myform');
  if (form.validate()) {
    form.save();
    webix.message('success');
  }
}
