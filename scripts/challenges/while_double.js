define(function () {

    return function () {
        return {
            map: [
                ['normal', 'normal', 'red',    'normal', 'normal', 'normal', 'normal', 'normal', 'normal'],
                ['normal', 'red',    'purple', 'red',    'yellow', 'normal', 'normal', 'normal', 'normal'],
                ['normal', 'normal', 'red',    'yellow', 'purple', 'yellow', 'red',    'normal', 'normal'],
                ['normal', 'normal', 'normal', 'normal', 'yellow', 'red',    'purple', 'red',    'normal'],
                ['normal', 'normal', 'normal', 'normal', 'normal', 'normal',  'red',   'normal', 'normal']
            ],
            code: function () {
                while (purple()) {
                    left()
                    up()
                    left()
                }
                down()
            },
            x: 6,
            y: 3
        }
    }

})