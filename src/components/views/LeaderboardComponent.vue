<template>
    <div>
        <BlockHuntHeader text="Leaderboard"/>
        <div class="pageFormat">
            <v-simple-table>
                <template v-slot:default>
                    <thead>
                    <tr>
                        <th class="text-left">
                        Standing
                        </th>
                        <th class="text-left">
                        User name
                        </th>
                        <th class="text-left">
                        Score
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr
                        v-for="item in items"
                        :key="item.name"
                    >
                        <td>{{ item.standing }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.score }}</td>
                    </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </div>
        <BottomNavComponent/>
    </div>
</template>

<script>
import BottomNavComponent from ".././BottomNavComponent.vue"
import BlockHuntHeader from ".././BlockHuntHeader.vue"
export default {
    components: {
        BottomNavComponent,
        BlockHuntHeader,
    },
    data() {
        return {
            items: [
                {
                    standing: '1',
                    name: 'CryptoNerd',
                    score: '9000'
                },
                {
                    standing: '2',
                    name: 'DweebThatOwnsNfts',
                    score: '432'
                },
                {
                    standing: '3',
                    name: 'NoLife12345',
                    score: '123'
                },
                {
                    standing: '4',
                    name: 'HodlThisL',
                    score: '21'
                },
            ]
        }
    }

}
</script>

<style>

.text-left{
    text-align: left;
}
</style>