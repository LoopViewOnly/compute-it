define(function () {

    return function () {
        return {
            map: [
                ['dark', 'blue',  'dark', 'blue',  'red', 'blue', 'dark', 'blue', 'green'],
                ['normal',  'normal', 'normal', 'normal', 'blue', 'normal', 'normal', 'normal', 'normal'],
                ['normal',  'normal', 'normal', 'normal', 'dark', 'blue', 'red', 'blue', 'green'],
                ['normal',  'normal', 'normal', 'normal', 'normal', 'normal', 'blue', 'normal', 'normal'],
                ['normal',  'normal', 'normal', 'normal', 'normal', 'normal', 'dark', 'blue', 'green']
            ],

            code: function () {
                function road () {
                    right()
                    right()
                    if (red()) {
                        bypass()
                    }
                    if (dark()) {
                        road()
                    }
                }

                function bypass () {
                    down()
                    down()
                }

                road()
            },
            x: 0,
            y: 0
        }
    }

})
