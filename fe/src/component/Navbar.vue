<template>
    <nav>
        <ul>
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/sample-page">Student</router-link>
            </li>
        </ul>
    </nav>
</template>

<style scoped lang="scss">
nav{
    ul{
        text-decoration: none;
        li{
            display: inline-block;
           padding: 10px;
        } 
    }
}
</style>