<template>
    <div class="navbar">
        <!-- two links -->
        <router-link class="navbar__link" to="/inbox">Inbox(2)</router-link>
        <router-link class="navbar__link" to="/archive">Archive(0)</router-link>

        <!-- logout btn -->
        <a href="#" role="button" class="navbar__link">Logout</a>
    </div>
</template>
<style lang="scss" scoped>
$colorBlack: var(--color-black);
.navbar {
    display: flex;
    flex-direction: column;
    padding: 5rem 0;
    align-items: center;
    background-color: $colorBlack;
    min-height: 100vh;

    &__link {
        display: inline-block;
        text-decoration: none;
        background-color: white;
        color: $colorBlack;
        border-radius: 3px;
        width: 16rem;
        text-align: center;

        padding: 1rem 3rem;

        &:not(:last-child) {
            margin-bottom: 2rem;
        }

        &:last-child {
            margin-top: auto;
        }
    }
}
</style>
