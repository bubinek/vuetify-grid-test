<template>
    <v-app>
        <v-app-bar app color="black" dark>
            <v-btn text exact :to="{name: 'OldGrid'}">
                <v-icon v-text="'mdi-table'" class="mr-3" />
                Old Grid
            </v-btn>

            <v-btn text exact :to="{name: 'NewGrid'}">
                <v-icon v-text="'mdi-table-large'" class="mr-3" />
                New Grid
            </v-btn>

            <v-spacer />
        </v-app-bar>

        <v-main>
            <v-container>
                <router-view />
            </v-container>
        </v-main>
    </v-app>
</template>
