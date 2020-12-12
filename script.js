Vue.component('app',{
    template:/*html*/`
    <div>

        <location v-if="json_data" id=location :json_data="json_data"></location>
        <accessorials v-if="json_data" id="accessorials" :json_data="json_data"></accessorials>
        <commodity v-if="json_data" id="commodity" :json_data="json_data"></commodity>

    </div>

    `,
    data(){
        return{
            json_data: ''
        }
    },
    methods:{

    },
    beforeCreate: function () {
        axios.get('https://tt.guane.com.co/api/loads/1')
        .then(response => {
            this.json_data = response.data.hauls[0]
        })
        .catch(error => console.log(`An error has ocurred. ${error}`))
    } 
}) 

new Vue({
    el: '#app',
    data: {
    },
    methods: {       
    },
})