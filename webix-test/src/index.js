var small_film_set = [
  {
    id: 1,
    title: 'The Shawshank Redemption',
    year: 1994,
    votes: 678790,
    rating: 9.2,
    rank: 1,
    category: 'Thriller',
  },
  {
    id: 2,
    title: 'The Godfather',
    year: 1972,
    votes: 511495,
    rating: 9.2,
    rank: 2,
    category: 'Crime',
  },
  {
    id: 3,
    title: 'The Godfather: Part II',
    year: 1974,
    votes: 319352,
    rating: 9.0,
    rank: 3,
    category: 'Crime',
  },
  {
    id: 4,
    title: 'The Good, the Bad and the Ugly',
    year: 1966,
    votes: 213030,
    rating: 8.9,
    rank: 4,
    category: 'Western',
  },
  {
    id: 5,
    title: 'Pulp fiction',
    year: 1994,
    votes: 533848,
    rating: 8.9,
    rank: 5,
    category: 'Crime',
  },
  {
    id: 6,
    title: '12 Angry Men',
    year: 1957,
    votes: 164558,
    rating: 8.9,
    rank: 6,
    category: 'Western',
  },
];

var list = [
  { title: 'Dashboard' },
  { title: 'Users' },
  { title: 'Products' },
  { title: 'Locations' },
];

var row1 = {
  view: 'toolbar',
  height: 40,
  elements: [
    {
      view: 'label',
      label: "<span class='textToolbar'>MyApp</span>",
    },
    {
      view: 'button',
      label: "<span class='textToolbar'>Profile</span>",
      type: 'icon',
      icon: 'wxi-user',
      maxWidth: 80,
      popup: 'pop',
      css: 'webix_transparent .webix_button',
    },
  ],
};

var col1 = {
  rows: [
    {
      view: 'list',
      scroll: false,
      minWidth: 200,
      maxWidth: 250,
      template: '#title#',
      data: list,
      select: 'multiselect',
    },
    {
      view: 'label',
      align: 'center',
      label:
        "<span class='webix_icon wxi-check'></span>" +
        "<span class='connected'>Connected</span>",
    },
  ],
};
var col2 = {
  view: 'datatable',
  id: 'mydata',
  scroll: 'y',
  gravity: 2,
  columns: [
    { id: 'title', header: 'Title', fillspace: true },
    { id: 'year', header: 'Year', fillspace: true },
    { id: 'votes', header: 'Votes', fillspace: true },
    { id: 'rating', header: 'Rating', fillspace: true },
    { id: 'rank', header: 'Rank', fillspace: true },
  ],
  data: small_film_set,
};
var col3 = {
  view: 'form',
  id: 'myform',
  autoheight: true,
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
      ],
    },
    {
      cols: [
        {
          view: 'button',
          label: 'Add new',
          type: 'form',
          click: function () {
            if ($$('myform').validate()) {
              var item = $$('myform').getValues();
              $$('mydata').add(item);
              webix.message('added successfully');
            }
          },
          css: 'webix_primary .webix_button',
        },
        {
          view: 'button',
          label: 'Clear',
          click: function () {
            webix
              .confirm({
                title: 'Please, confirm',
                ok: 'Clear',
                cancel: 'Cancel',
                text: 'Are you sure that you want to clear your form?',
              })
              .then(function () {
                $$('myform').clear();
                $$('myform').clearValidation();
              });
          },
        },
      ],
    },
    {},
  ],
  rules: {
    title: webix.rules.isNotEmpty,
    year: function (value) {
      return value > 1970 && value < 2021;
    },
    votes: function (value) {
      return value < 100000;
    },
    rating: function (value) {
      return webix.rules.isNotEmpty && value != 0;
    },
  },
};

var row2 = {
  cols: [col1, { view: 'resizer' }, col2, col3],
};

var row3 = {
  view: 'template',
  height: 25,
  template:
    'The sofware is provided by <a href="https://webix.com">https://webix.com</a>. All rights reserved (c)',
  css: 'r3_text',
};
webix.ui({
  rows: [row1, row2, row3],
});

webix.ui({
  view: 'popup',
  id: 'pop',
  body: {
    view: 'list',
    data: [
      { id: '1', title: 'Settings' },
      { id: '2', title: 'Log Out' },
    ],
    template: '#title#',
    autoheight: true,
    select: true,
  },
});
