import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    goodsInfo:
      {
        id:1,
        title:'BRAIN SLEEP PILLOW',
        company:'株式会社Healbe Japan',
        category:'ライフスタイル',
        videoLink:'vidio.mp4',
        shortDescription:'世界初、ただ一つの「自動」で摂取カロリー・水分バランス・ストレスレベルを計測するスマートバンド',
        detailedDescription:'GoBeは、世界初、ただ一つの「自動」で摂取カロリー・水分バランス・ストレスレベルを計測するスマートバンドです。 最新モデルのGoBe3は、 -　全世界市場に先駆けて、GoBe3本体のローカライズ（日本語表示）対応 -　センサーの接地面の形状が改良され、データ取得の制度が向上 -　光学式の脈拍センサーで、リアルタイム計測 -　低アレルギー性チタンセンサーコンタクトとソフトタッチバンドストラップがGoBe3で過ごす時間を非常に快適に -　MIPディスプレイ採用晴れの日でもギラつかないく見やすい HEALBEは、自信を持ってこの新モデルGoBe3を日本の皆様にお届けします。',
        goodsImages:[{
          imageId:1,
          imageLink:"goodsImage1.jpg"
        },{
          imageId:2,
          imageLink:"goodsImage2.jpg"
        }],
        setMeal:[{
          intro:'blue',
          price:'2000',
          imageLink:'setImage1.jpg'
        },{
          intro:'yello',
          price:'3000',
          imageLink:'setImage2.jpg'
        }],
        accessories:[{
          intro:'pen',
          price:'2000',
        }]
      }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
