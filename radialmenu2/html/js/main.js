'use strict';

var menuItems = [
    { 
      id     : 'lisaa',
      title:   'Ajoneuvo',                 ////THERE IS SOME PRE-MADE FEATURES FOR CARS ETC. GO DOWN TO LINE 150 AND THERE WILL BE AFTER INFO TO MAKE CUSTOM BUTTONS :)
      icon:    '#more',
      items: [
      {
          id   : 'trunk',
          title: 'Trunk'
      },
      {
          id   : 'seat',
          title: 'Seats',
          icon: '#more',
          items: [
              {
                  id: 'seat -1',
                  title: 'Driver'
              },
              {
                  id: 'seat 0',
                  title: 'Passenger'
              },
              {
                  id: 'seat 1',
                  title: 'Back 1'
              },
              {
                  id: 'seat 2',
                  title: 'Back 2'
              },
              {
                  id: 'seat 3',
                  title: 'Back 3'
              },
              {
                  id: 'seat 4',
                  title: 'Back 4'
              }
          ]
      },
      {
          id   : 'engine',
          title: 'Engine',
          icon: '#drive'
      },
      {
          id   : 'hood',
          title: 'Hood'
      },
      {
          id   : 'window',
          title: 'Windows',
          icon: '#more',
          items: [
              {
                  id: 'rlwindow',
                  title: 'RL Window'
              },
              {
                  id: 'flwindow',
                  title: 'FL Window'
              },
              {
                  id: 'frwindow',
                  title: 'FR Window'
              },
              {
                  id: 'rrwindow',
                  title: 'RR Window'
              }
          ]
      },
      {
          id: 'door',
          title: 'Doors',
          icon: '#more',
          items: [
              {
                  id: 'rldoor',
                  title: 'RL Door'
              },
              {
                  id: 'fldoor',
                  title: 'FL Door'
              },
              {
                  id: 'frdoor',
                  title: 'FR Door'
              },
              {
                  id: 'rrdoor',
                  title: 'RR Door'
              }
          ]
      }
    ]  
    },   
    { 
        id     : 'lisaa2',
        title:   'Emotet',
        icon:    '#more',
        items: [
            {
                id   : 'e dance',
                title: 'Tanssi'
            },
            {
                id   : 'e box',
                title: 'Laatikko'
            },
            {
                id   : 'e finger',
                title: 'Keskisormi'
            },
            {
                id   : 'e beer',
                title: 'Kalja'
            },
            {
                id   : 'e sitchair',
                title: 'Istu'
            },
            {
                id   : 'e sitchair',
                title: 'Istu'
            },
        ]
    },
    { 
        id     : 'lisaa3',
        title:   'Vaatteet',
        icon:    '#more',
        items: [
            {
                id   : 'glasses',
                title: 'Lasit'
            },
            {
                id   : 'bag',
                title: 'Reppu'
            },
            {
                id   : 'bracelet',
                title: 'Kellot'
            },
            {
                id   : 'ear',
                title: 'Korvat'           /////////////AFTER THAT STARTS UNDER THE CUSTOM PART FOR YOU.////////////////////////
            },
        ]
    },
    { 
        id     : 'lisaa4', //Custom Class for something - id just put something...
        title:   'Jotain tähän', //Custom Class for something - put the class name.
        icon:    '#more', //The class icon
        items: [
            {
                id   : 'komento', //A command triggered when pressed one of the buttons.
                title: 'Jotain tähän' //A title for one of the buttons.
            },
            {
                id   : 'komento', //A command triggered when pressed one of the buttons.
                title: 'Jotain tähän' //A title for one of the buttons.
            },
        ]
    },
    { 
        id     : 'lisaa4',  //Custom Class for something - id just put something...
        title:   'Jotain Tähan', //Custom Class for something - put the class name.
        icon:    '#more', //The class icon
        items: [
            {
                id   : 'komento', //A command triggered when pressed one of the buttons.
                title: 'Testi' //A title for one of the buttons.
            },
        ]
    },
    { 
        id     : 'lisaa5', //Custom Class for something - id just put something...
        title:   'Jotain Tähan', //Custom Class for something - put the class name.
        icon:    '#more', //The class icon
        items: [
            {
                id   : 'komento', //A command triggered when pressed one of the buttons.
                title: 'Testi' //A title for one of the buttons.
            },
        ]
    }
];

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
window.onload = function () {
    var svgMenu = new RadialMenu({
        parent      : document.body,
        size        : 400,
        closeOnClick: false,
        menuItems   : menuItems,
        onClick     : function (item) {
            console.log('Painoit:', item.id, item.title);
            NUIcommand(item.id);
        }
    });


    window.addEventListener('message', (event) => {
        if (event.data.type === 'open') {
            svgMenu.open();
        }
    });

};


function NUIclose() {
    fetch(`https://${GetParentResourceName()}/close`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            itemId: 'close'
        })
    }).then(resp => resp.json());
}

function NUIcommand(commandString) {
    fetch(`https://${GetParentResourceName()}/command`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            itemId: commandString
        })
    }).then(resp => resp.json());
}