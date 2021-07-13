let list = [
  { title: 'Dashboard' },
  { title: 'Users' },
  { title: 'Products' },
  { title: 'Locations' },
];

const row1 = {
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
      css: 'webix_transparent',
    },
  ],
};
const col1 = {
  rows: [
    {
      view: 'list',
      css: "class_list",
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


const row2 = {
  cols: [col1, { view: 'resizer' }, col2, col3],
};

const row3 = {
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