Vue.component('location',{
    props:['json_data'],
    template:/*html*/`
    <div>
    <div class="row justify-content-around pt-5 mx-auto font-weight-bold text-center">
            <div class="col-1"></div>
            <div class="col-4 py-2 text-success card">
                📌Pickup
                <div class="input-group input-group-sm pt-3 pb-2 mt-1 border-top">
                    <input type="text" class="form-control input-sm mr-3 rounded" id="zip_from" placeholder="Zip From"
                        v-model="location_info.zip_from">

                    <input type="text" class="form-control input-sm rounded" id="city_from" placeholder="City From"
                        v-model="location_info.city_from">
                </div>
            </div>
            <div class="col-4 py-2 text-danger card">
                📌Delivery
                <div class="input-group input-group-sm pt-3 pb-2 mt-1 border-top">
                    <input type="text" class="form-control input-sm mr-3 rounded" id="zip_to" placeholder="Zip to"
                        v-model="location_info.zip_to">

                    <input type="text" class="form-control input-sm rounded" id="city_to" placeholder="City To"
                        v-model="location_info.city_to">
                </div>
            </div>
            <div class="col-1"></div>
        </div>
    </div>
    `,

    data(){
        return{
            location_info: {
                zip_from: '',
                city_from: '',
                zip_to: '',
                city_to: ''
            },
        }
    },
    methods: {

    },
    created(){
            this.location_info.zip_from = this.json_data.zip_from
            this.location_info.city_from = this.json_data.city_from
            this.location_info.zip_to = this.json_data.zip_to
            this.location_info.city_to = this.json_data.city_to
    }
}) 