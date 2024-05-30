define(function () {

    return function () {
        return {
            map: [
                ['blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue'],
                ['blue', 'yellow', 'blue', 'blue', 'blue', 'blue', 'blue'],
                ['blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue'],
                ['blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue'],
                ['green', 'green', 'green', 'blue', 'green', 'green', 'green'],
                ['green', 'green', 'green', 'blue', 'green', 'green', 'green']
            ],
            code: function () {

                function jump () {
                    up()
                    right()
                    right()
                    down()
                }

                function run () {
                    right()
                    right()
                }

                run()
                jump()
                run()
            },
            x: 0,
            y: 3
        }
    }

})
