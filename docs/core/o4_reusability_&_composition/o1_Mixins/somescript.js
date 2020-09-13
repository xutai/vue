// console.log('this is log')

var myMixin =  {
    created () {
        this.hello()
    },
    methods: {
        hello: function() {
            console.log('hello from mixin! ')
        }
    }
}