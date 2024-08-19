<template lang="">
    <div>
        <h1>hehehe</h1>
    <table>
        <tr><th><label>Name:</label></th><td><input type="text" v-model="name"></td></tr>
        <tr><th><label>Age:</label></th><td><input type="text" v-model="age"></td></tr>
        <tr><th><label>Fav Coding Language:</label></th><td><input type="text" v-model="favCodingLanguage"></td></tr>
        <tr><th><label>Fav Car:</label></th><td><input type="text" v-model="favCar"></td></tr>
        <tr><th><label>Eye Colour:</label></th><td><input type="text" v-model="eyeColour"></td></tr>
        <tr><th><label>Usename:</label></th><td><input type="text" v-model="username"></td></tr>
        <tr><th><label>Password:</label></th><td><input type="text" v-model="password"></td></tr>
        <tr><td colspan="2"><input @click="addUser" type="button">enter</td></tr>
    </table>
    <!-- <label>Name<input type="text"></label>
    <label>Surname<input type="text"></label>
    <label>Age<input type="text"></label>
    <label>Favourite coding language<input type="text"></label>
    <label>Favourite car<input type="text"></label>
    <label>Eye colour<input type="text"></label>
    <label><input type="text" value="enter"></label> -->

    </div>
</template>
<script>
export default {
    data(){
        return{
            name: '',
            surname: '',
            age: '',
            fav_coding_lang: '',
            fav_car: '',
            eye_colour: '',
            username: '',
            password: ''
    }
    },
    computed:{
        addUser(){
            this.$store.dispatch('addUser',this.$data)
        }
    },
    mounted(){
        this.addUser
    } 
}
</script>
<style lang="">
    
</style>