<template>
    <div>
        <v-container grid-list-md style="width:1440px">
            <v-row>
                <v-col>
                    <v-card>
                        <v-tabs color="primary">
                            <v-tab>一覧</v-tab>
                            <v-tab>概要</v-tab>
                            <v-tab>詳細</v-tab>
                            <v-tab>ギャラリー</v-tab>
                            <v-tab>商品</v-tab>
                            <v-tab>日本語</v-tab>

                            <!-- 一覧 -->
                            <v-tab-item class="tab-item">
                                <v-divider></v-divider>
                                <v-container class="px-8">
                                    <v-row>
                                        <v-col v-for="card in cards" :key="card.index" cols="4">
                                            <v-card class="my-5">
                                                <v-img height="600" :src="card.imgLink"></v-img>
                                                <v-card-title>{{card.title}}</v-card-title>
                                                <v-card-subtitle>
                                                    {{card.company}}
                                                </v-card-subtitle>
                                                <v-card-text>
                                                    <b>{{card.price}}</b>
                                                </v-card-text>
                                            </v-card>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-tab-item>

                            <!-- 概要 -->
                            <v-tab-item class="tab-item">
                                <v-divider></v-divider>
                                <v-card tile flat height="768">
                                    <v-img :src="goodsInfo.overviewImageLink" height="700"></v-img>

                                    <v-card-title>{{goodsInfo.title}}</v-card-title>
                                    <v-card-subtitle>
                                        {{goodsInfo.company}}
                                    </v-card-subtitle>
                                </v-card>
                            </v-tab-item>

                            <!-- 詳細 -->
                            <v-tab-item class="tab-item">
                                <v-divider></v-divider>
                                <v-container>
                                    <v-row align="center">
                                        <v-col cols="12" md="4" offset-md="1">
                                            <v-card flat>
                                                <v-card-title primary-title class="pa-5">
                                                    {{goodsInfo.detailedDescription}}
                                                </v-card-title>
                                            </v-card>
                                        </v-col>
                                        <v-col cos="12" md="6">
                                            <v-img :src="goodsInfo.detailImageLink" height="100%">
                                            </v-img>
                                        </v-col>
                                    </v-row>
                                </v-container>

                            </v-tab-item>

                        </v-tabs>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                cards: [{
                    title: "N idea pad mini / アイディアパッドミニ",
                    company: "NeoLAB株式会社",
                    imgLink: "https://cdn.shopify.com/s/files/1/0455/8497/3975/products/ideapadmini_2_1024x1024.jpg?v=1611797216",
                    price: "¥650"
                }, {
                    title: "N planner 2021 / Nプランナー2021",
                    company: "NeoLAB株式会社",
                    imgLink: "https://cdn.shopify.com/s/files/1/0455/8497/3975/products/2021_1_1024x1024.jpg?v=1611797287",
                    price: "¥2,940"
                }, {
                    title: "N pocket note / ポケットノート",
                    company: "NeoLAB株式会社",
                    imgLink: "https://cdn.shopify.com/s/files/1/0455/8497/3975/products/pocket_5_1024x1024.jpg?v=1611797277",
                    price: "¥500"
                }],
                goodsInfo: {
                    id: 1,
                    title: 'HEALBE GOBE3',
                    company: '株式会社Healbe Japan',
                    category: '情報・通信機器',
                    videoLink: 'vidio.mp4',
                    shortDescription: '世界初、ただ一つの「自動」で摂取カロリー・水分バランス・ストレスレベルを計測するスマートバンド',
                    detailedDescription: 'GoBeは、世界初、ただ一つの「自動」で摂取カロリー・水分バランス・ストレスレベルを計測するスマートバンドです。 最新モデルのGoBe3は、 -　全世界市場に先駆けて、GoBe3本体のローカライズ（日本語表示）対応 -　センサーの接地面の形状が改良され、データ取得の制度が向上 -　光学式の脈拍センサーで、リアルタイム計測 -　低アレルギー性チタンセンサーコンタクトとソフトタッチバンドストラップがGoBe3で過ごす時間を非常に快適に -　MIPディスプレイ採用晴れの日でもギラつかないく見やすい HEALBEは、自信を持ってこの新モデルGoBe3を日本の皆様にお届けします。',
                    overviewImageLink: "https://the-platinum-select.jp/client_info/PLATINUMSELECT/infoimage/gobe_760x410pix.jpg",
                    detailImageLink: "https://cdn.shopify.com/s/files/1/0455/8497/3975/products/fb022f98618ad1617496240eae5ba196_0ede2cee-1e93-4e1c-9c46-10b8c41ece64_1024x1024.png?v=1609148383",
                    goodsImages: [{
                            imageId: 1,
                            imageLink: "https://cdn.shopify.com/s/files/1/0455/8497/3975/products/eaabe2c4ff6f12cb4fc8e2fc23203019_2fcb40be-cbe9-4f96-b7d8-2b3201e29685_1024x1024.png?v=1608777843"
                        }, {
                            imageId: 2,
                            imageLink: "https://cdn.shopify.com/s/files/1/0455/8497/3975/products/fd28a4abb8b7f275ba233e5cce3a4647_f19e6661-7f61-44be-af04-7b06b465eb1e_1024x1024.png?v=1608777843"
                        }, {
                            imageId: 3,
                            imageLink: "https://cdn.shopify.com/s/files/1/0455/8497/3975/products/c0c0fe643b14f2cdca435dd4f56577d1_91029d2b-0895-4b32-be3e-4cd5f07c396c_1024x1024.png?v=1608777843"
                        }, {
                            imageId: 4,
                            imageLink: "https://cdn.shopify.com/s/files/1/0455/8497/3975/products/e42188c92b884994c431886ff38f5602_df8db206-cc1f-46c2-9721-5c7faaca000d_1024x1024.png?v=1608777843"
                        }, {
                            imageId: 5,
                            imageLink: "https://cdn.shopify.com/s/files/1/0455/8497/3975/products/f96a3e7dd6dd13e49867acd29e043169_3d45c454-f278-4989-b6aa-c71092b65f78_1024x1024.png?v=1608777843"
                        }, {
                            imageId: 6,
                            imageLink: "https://cdn.shopify.com/s/files/1/0455/8497/3975/products/d88b7ea57e4a74cd158932f3bda49def_325ea358-94c9-4ef9-a0d0-b90d33687bd2_1024x1024.png?v=1608777843"
                        }, {
                            imageId: 7,
                            imageLink: "https://cdn.shopify.com/s/files/1/0455/8497/3975/products/55f5c92ee0c84146e5af1463d6f24570_034bac1a-b991-4ac2-9b03-eab60b0c7d68_1024x1024.png?v=1608777843"
                        }, {
                            imageId: 8,
                            imageLink: "https://cdn.shopify.com/s/files/1/0455/8497/3975/products/00d37b1ad67495a6cbfe08d8d3eed364_b95351f6-adee-41a3-9017-df91e052a4f3_1024x1024.png?v=1608777843"
                        },
                        {
                            imageId: 9,
                            imageLink: "https://cdn.shopify.com/s/files/1/0455/8497/3975/products/9065fcce57c117dbb84ecb841d1f3c0a_2cda02cb-3611-425b-99cc-a8888e0de964_1024x1024.png?v=1608777846"
                        },
                        {
                            imageId: 10,
                            imageLink: "https://cdn.shopify.com/s/files/1/0455/8497/3975/products/fb022f98618ad1617496240eae5ba196_1024x1024.png?v=1609163404"
                        },
                        {
                            imageId: 11,
                            imageLink: "https://cdn.shopify.com/s/files/1/0455/8497/3975/products/77e1182f3d2effc606979957569aa3e4_1024x1024.png?v=1609163404"
                        },
                        {
                            imageId: 8,
                            imageLink: "https://cdn.shopify.com/s/files/1/0455/8497/3975/products/469f4fb88184872042ca1587f57af845_1024x1024.png?v=1609163404"
                        }
                    ],
                    setMeal: [{
                        intro: 'burgundy',
                        price: '¥29,700（税込）',
                        imageLink: 'https://cdn.shopify.com/s/files/1/0455/8497/3975/products/fb022f98618ad1617496240eae5ba196_1024x1024.png?v=1609163404'
                    }, {
                        intro: 'gray',
                        price: '¥29,700（税込）',
                        imageLink: 'https://cdn.shopify.com/s/files/1/0455/8497/3975/products/77e1182f3d2effc606979957569aa3e4_1024x1024.png?v=1609163404'
                    }, {
                        intro: 'yellow',
                        price: '¥29,700（税込）',
                        imageLink: 'https://cdn.shopify.com/s/files/1/0455/8497/3975/products/469f4fb88184872042ca1587f57af845_280x280_crop_center.png?v=1609163404'
                    }],
                    accessories: [{
                        intro: 'pen',
                        price: '2000',
                    }]
                }
            }
        },
        components: {

        }
    }
</script>

<style scoped lang="stylus">
    .v-tab {
        font-weight bold;
    }

    .tab-item {
        height: 800px;
    }
</style>