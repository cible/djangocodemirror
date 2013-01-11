/*
* Settings for DjangoCodeMirror buttons bar
*/
DCM_Buttons_settings = [
    {name:'Maximize', id: 'FullscreenEnter', classname: 'dcm-icons-fullscreen_enter', funcname:"maximize_editor", method:"internal" },
    {name:'Normal size', id: 'FullscreenExit', classname: 'dcm-icons-fullscreen_exit', funcname:"normalize_editor", method:"internal" },
    {separator:true},
    {name:'Quick save', id: 'QuickSave', classname: 'dcm-icons-disk', key:'S', funcname:"content_quicksave", method:"internal" },
    {separator:true},
    {name:'Undo', id: 'Undo', classname: 'dcm-icons-arrow_undo', funcname:"do_undo", method:"internal" },
    {name:'Redo', id: 'Redo', classname: 'dcm-icons-arrow_redo', funcname:"do_redo", method:"internal" },
    {separator:true},
    {name:'Title level 1', id: 'H1', classname: 'dcm-icons-h1', key:'1', linechar:'=', placeholder:'Your title', funcname:"title" },
    {name:'Title level 2', id: 'H2', classname: 'dcm-icons-h2', key:'2', linechar:'*', placeholder:'Your title', funcname:"title" },
    {name:'Title level 3', id: 'H3', classname: 'dcm-icons-h3', key:'3', linechar:'-', placeholder:'Your title', funcname:"title" },
    {separator:true},
    {name:'Bold', id: 'Bold', classname: 'dcm-icons-bold', key:'B', placeholder:'Your value', begin_with:'**', close_with:'**', move_cursor_char:1 },
    {name:'Italic', id: 'Italic', classname: 'dcm-icons-italic', key:'I', placeholder:'Your value', begin_with:'*', close_with:'*', move_cursor_char:1 },
    {name:'Inline code', id: 'Code', classname: 'dcm-icons-text_allcaps', key:'T', placeholder:'Your value', begin_with:'``', close_with:'``', move_cursor_char:1 },
    {separator:true},
    {name:'External link', id: 'Link', classname: 'dcm-icons-world_link', key:'A', placeholder:'http://perdu.com', funcname:"link", move_cursor_char:1 },
    {name:'Internal link to a Page document', id: 'page_link', classname: 'dcm-icons-page_link', key:'W', placeholder:'slug', begin_with:':page:`', close_with:'`', move_cursor_char:1 },
    {separator:true},
    {name:'Substitution image', id: 'SubPicture', classname: 'dcm-icons-bullet_picture', begin_with:'\n.. |', close_with:'| image:: Your image link\n', placeholder:'slugname'},
    {name:'Simple image block', id: 'Picture', classname: 'dcm-icons-picture', begin_with:'.. image:: ', close_with:'\n', placeholder:'Your image link'},
    {name:'Annoted image block', id: 'Figure', classname: 'dcm-icons-photo', begin_with:'.. figure:: ', close_with:'\n', placeholder:'Your image link'},
    {separator:true},
    {name:'Bullet list', id: 'BList', classname: 'dcm-icons-list-bullet', key:'L', funcname:"bulletlist", placeholder:'Item' },
    {name:'Enumerated List', id: 'NList', classname: 'dcm-icons-list-numeric', funcname:"numberedlist", placeholder:'Item' },
    {separator:true},
    {name:'Cite', id: 'Quotes', classname: 'dcm-icons-quotes', begin_with:'    ', placeholder:'Your value', funcname:"cite"},
    {name:'Block code', id: 'Sourcecode', classname: 'dcm-icons-sourcecode', placeholder:'Your value', funcname:"sourcecode" },
    {separator:true},
    {name:'Help', id: 'Help', classname: 'dcm-icons-help', funcname:"externalressource" },
    {name:'Settings', id: 'Settings', classname: 'dcm-icons-cog_edit', funcname:"show_settings", method:"internal" }
];
