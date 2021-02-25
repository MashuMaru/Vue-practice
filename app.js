const app = Vue.createApp({
    data: function(){
        return {
            name: 'Mashumaru',
            age: 29,
            imgLink: 'https://nypost.com/wp-content/uploads/sites/2/2019/05/godzilla.jpg?quality=80&strip=all&w=618&h=410&crop=1'
        }
    },
    methods: {
        newAge() {
            return this.age + 5;
        },
        favNumber() {
            return Math.random();
        }
    }
})

app.mount('#assignment');