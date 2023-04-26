<template>
    <div class="container-card">
        <v-card style="width: 25em" v-for="country in countries">
            <template #header>
                <img :src="country.flags.png" alt="Image doesn't exist" width="350" height="200" class="imgOne"/>
            </template>
            <template #title> {{ country.name.common }} </template>
            <template #subtitle> Detalles </template>
            <template #content>
                <p><strong>Official Name: </strong>{{ country.name.official }}</p>
                <p><strong>Currency: </strong>{{ Object.values(country.currencies.PEN).join(", ") }}</p>
                <p><strong>Capital: </strong>{{ country.capital[0] }}</p>
                <p><strong>Region: </strong>{{ country.region }}</p>
                <p><strong>Subregion: </strong>{{ country.subregion }}</p>
                <p><strong>Languages: </strong>{{ Object.values(country.languages).join(", ") }}</p>
                <p><strong>Area: </strong>{{ country.area }}</p>
                <p><strong>Population: </strong>{{ country.population }}</p>
                <img :src="country.coatOfArms.svg" alt="Coat of arms of {{ country.name.common }}" width="200" height="200" class="imgTwo"/>
            </template>
        </v-card>
    </div>
</template>


<script>
export default {
    props: {
        countries: {
            type: Array
        }
    }
};
</script>


<style scoped>
.container-card {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1em;
}
.imgOne {
    margin-left: 1.5em;
    margin-top: 1em;
}
.imgTwo {
    margin-left: 5.5em;
    margin-top: 2em;
}
</style>