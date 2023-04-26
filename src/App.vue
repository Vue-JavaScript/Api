<template>
    <div>
        <ToolbarVue/>
        <CardVue :countries="countries"/>
        <FooterVue/>
    </div>
</template>

<script>
    import {ApiService} from "@/services/api.service";
    import CardVue from '@/components/card.component.vue'
    import ToolbarVue from '@/components/toolbar.component.vue'
    import FooterVue from '@/components/footer.component.vue'

    export default {
        name:"App",
        components:{ ToolbarVue, CardVue, FooterVue},
        data(){
            return{
                countries: []
            }
        },
        created() {
            const apiService = new ApiService();
            apiService.getHttpAPI().then(
                (data) => {
                this.countries = data;
            }
            );
        }
    };
</script>