define(function () {

    return function () {
        return {
            map: [
                ['dark', 'red',  'dark', 'red',  'green', 'red', 'dark'],
                ['normal',  'normal', 'normal', 'normal', 'red', 'normal', 'normal'],
                ['normal',  'normal', 'normal', 'normal', 'dark', 'red', 'dark']
            ],
            code: function () {
                function road () {
                    right()
                    right()
                    if (green()) {
                        bypass()
                    } else {
                        road()
                    }
                }

                function bypass () {
                    down()
                    down()
                    right()
                    right()
                }

                road()
            },
            x: 0,
            y: 0
        }
    }

})
