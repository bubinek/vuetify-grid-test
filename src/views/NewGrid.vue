<template>
    <v-container text-center>
        <v-row dense>
            <v-col cols="12">
                <v-card dark color="primary">
                    <v-card-text class="px-0">12</v-card-text>
                </v-card>
            </v-col>
            <v-col v-for="i in 2" :key="`6${i}`" cols="6">
                <v-card dark color="secondary">
                    <v-card-text class="px-0">6</v-card-text>
                </v-card>
            </v-col>
            <v-col v-for="i in 3" :key="`4${i}`" cols="4">
                <v-card dark color="primary">
                    <v-card-text class="px-0">4</v-card-text>
                </v-card>
            </v-col>
            <v-col v-for="i in 4" :key="`3${i}`" cols="3">
                <v-card dark color="secondary">
                    <v-card-text class="px-0">3</v-card-text>
                </v-card>
            </v-col>
            <v-col v-for="i in 6" :key="`2${i}`" cols="2">
                <v-card dark color="primary">
                    <v-card-text class="px-0">2</v-card-text>
                </v-card>
            </v-col>
            <v-col v-for="i in 12" :key="`1${i}`" cols="1">
                <v-card dark color="secondary">
                    <v-card-text class="px-0">1</v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
