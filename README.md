# Eureka-widget-model-navbar

A navigation bar for Eureka's models. Usage:

    {
        User: {
            views: {
                model: {
                    widgets: [
                        {
                            type: 'model-navbar',
                            items: [ // the items of the navigation bar
                                {
                                    route: 'user.model.index' // the full ember route
                                    label: 'Informations' // the displayed name
                                },
                                {
                                    route: 'user.model.favorites',
                                    label: 'Favorites',
                                    icon: 'glyphicon glyphicon-star' // the icon css classes
                                }
                            ]
                        }
                    ],
                    index: {
                        widgets: [...]
                    },
                    favorties: {
                        widgets: [...]
                    }
                }
            }
        }
    }

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
