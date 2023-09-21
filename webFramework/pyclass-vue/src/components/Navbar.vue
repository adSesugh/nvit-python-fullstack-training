<template>
    <div class="navbar">
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
        </ul>
    </div>
</template>

<style scoped>
    .navbar {
        height: 10vh;
        background-color: blueviolet;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .navbar > ul {
        display: flex;
        list-style-type: none;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
    .navbar > ul > li {
        margin: 0px 10px;
        color: white
    }
</style>