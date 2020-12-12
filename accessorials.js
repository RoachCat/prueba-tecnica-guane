Vue.component('accessorials', {
    props:['json_data'],
    template:/*html*/`
    <div class="cardcontainer">
            <div class="cardcontainer__accessorials card">
                <span>Accessorials</span>
                <div class="accessorials-checkboxes">
                    <label for="hazmat"><input type="checkbox" v-model="accessorials" value="Hazmat">Hazmat</label>
                    <label for="bonded"><input type="checkbox" v-model="accessorials" value="Bonded">Bonded</label>
                    <label for="tarps"><input type="checkbox" v-model="accessorials" value="Tarps">Tarps</label>
                    <label for="airport-non-tsa"><input type="checkbox" v-model="accessorials" value="Airport Delivery Non TSA">Airport Delivery Non TSA</label>
                    <label for="airport-tsa"><input type="checkbox" v-model="accessorials" value="Airport Delivery TSA">Airport Delivery TSA</label>
                    <label for="oversize"><input type="checkbox" v-model="accessorials" value="Oversize/Overweight">Oversize/Overweight Permits</label>
                    <label for="escorts"><input type="checkbox" v-model="accessorials" value="Escorts">Escorts</label>
                    <label for="team-drivers"><input type="checkbox" v-model="accessorials" value="Team Drivers">Team Drivers</label>
                    <label for="non-stackable"><input type="checkbox" v-model="accessorials" value="Non Stackable">Non Stackable</label>
                </div>
            </div>
        </div>
    `,

    data() {
        return {
            accessorials: []
        }
    },
    methods: {

    },
    created(){
        this.accessorials = this.json_data.accessorials
    }
}) 