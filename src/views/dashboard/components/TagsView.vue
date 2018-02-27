<template>

  <div  class="home-market">
    <div class="max-w">
   <el-input   style="width: 200px; margin-left:1000px" size="small" prefix-icon="el-icon-search"  v-model="filter"> </el-input>

   <el-tabs  v-model="activeName" @tab-click="handleClick">

    <el-tab-pane label="Favourites" name="first">

      <el-table :data="getData(favouritePair)" >

        <el-table-column prop="Pair" label="Pair"  sortable > </el-table-column>
        <el-table-column prop="Last Price"   label="Last Price"   sortable > </el-table-column>
        <el-table-column prop="24h Change" label="24h Change"  sortable> </el-table-column>
        <el-table-column prop="24h High" label="24h High" sortable > </el-table-column>
        <el-table-column prop="24h Low" label="24h Low"  sortable> </el-table-column>
        <el-table-column prop="24h Volume" label="24h Volume" sortable> </el-table-column>

      </el-table>

    </el-tab-pane>



    <el-tab-pane label="ETH Market" name="second">

      <el-table :data="getData(ethPair)">

        <el-table-column prop="Pair" label="Pair" sortable width="150%"   > </el-table-column>
        <el-table-column prop="Last Price"   label="Last Price"   width="270%"     sortable  > </el-table-column>
        <el-table-column prop="24h Change" label="24h Change"  sortable width="270%"    > </el-table-column>
        <el-table-column prop="24h High" label="24h High" sortable width="170%"   > </el-table-column>
        <el-table-column prop="24h Low" label="24h Low"  sortable width="170%"   > </el-table-column>
        <el-table-column prop="24h Volume" label="24h Volume" sortable width="170%"    > </el-table-column>

      </el-table>

    </el-tab-pane>
    <el-tab-pane label="BTC Market" name="third">

      <el-table :data="getData(btcPair)" >

        <el-table-column prop="Pair" label="Pair" sortable width="150%"   > </el-table-column>
        <el-table-column prop="Last Price"   label="Last Price"   width="270%"     sortable  > </el-table-column>
        <el-table-column prop="24h Change" label="24h Change"  sortable width="270%"    > </el-table-column>
        <el-table-column prop="24h High" label="24h High" sortable width="170%"   > </el-table-column>
        <el-table-column prop="24h Low" label="24h Low"  sortable width="170%"   > </el-table-column>
        <el-table-column prop="24h Volume" label="24h Volume" sortable width="170%"    > </el-table-column>


      </el-table>
    </el-tab-pane>
    <el-tab-pane label="USDT Market" name="fourth">

      <el-table :data="getData(usdtPair)" >


      </el-table>
      </el-tab-pane>
  </el-tabs>
    </div>
  </div>
</template>
<script>



  export default {
    data() {
      return {

        filter : '',
        activeName: 'fourth',
        favouritePair: [],
        ethPair: [{
          'Pair':'SBTC/ETH',
          'Last Price':'SBTC/ETH',
          '24h Change' 	:'+0.01809698 +17.65%',
          '24h High':'1',
          '24h Low'	:'3',
          '24h Volume':'124'

        },     {
          'Pair':'ABTC/ETH',
          'Last Price':'SBTC/ETH',
          '24h Change' 	:'+0.01809698 +17.65%',
          '24h High':'1',
          '24h Low'	:'4',
          '24h Volume':'124'

        },{
          'Pair':'SBTC/ETH',
          'Last Price':'SBTC/ETH',
          '24h Change' 	:'+0.01809698 +17.65%',
          '24h High':'1',
          '24h Low'	:'3',
          '24h Volume':'124'

        },{
          'Pair':'SBTC/ETH',
          'Last Price':'SBTC/ETH',
          '24h Change' 	:'+0.01809698 +17.65%',
          '24h High':'1',
          '24h Low'	:'1',
          '24h Volume':'124'

        },     {
          'Pair':'ABTC/ETH',
          'Last Price':'SBTC/ETH',
          '24h Change' 	:'+0.01809698 +17.65%',
          '24h High':'1',
          '24h Low'	:'4',
          '24h Volume':'124'

        },{
          'Pair':'SBTC/ETH',
          'Last Price':'SBTC/ETH',
          '24h Change' 	:'+0.01809698 +17.65%',
          '24h High':'1',
          '24h Low'	:'3',
          '24h Volume':'124'

        },{
          'Pair':'SBTC/ETH',
          'Last Price':'SBTC/ETH',
          '24h Change' 	:'+0.01809698 +17.65%',
          '24h High':'1',
          '24h Low'	:'1',
          '24h Volume':'124'

        },
          {
            'Pair':'ABTC/ETH',
            'Last Price':'SBTC/ETH',
            '24h Change' 	:'+0.01809698 +17.65%',
            '24h High':'1',
            '24h Low'	:'4',
            '24h Volume':'124'

          },{
            'Pair':'SBTC/ETH',
            'Last Price':'SBTC/ETH',
            '24h Change' 	:'+0.01809698 +17.65%',
            '24h High':'1',
            '24h Low'	:'3',
            '24h Volume':'124'

          },{
            'Pair':'SBTC/ETH',
            'Last Price':'SBTC/ETH',
            '24h Change' 	:'+0.01809698 +17.65%',
            '24h High':'1',
            '24h Low'	:'1',
            '24h Volume':'124'

          },
        ],
        btcPair: [{
          'Pair':'SBTC/ETH',
          'Last Price':'SBTC/ETH',
          '24h Change' 	:'+0.01809698 +17.65%',
          '24h High':'1',
          '24h Low'	:'3',
          '24h Volume':'124'

        },     {
          'Pair':'ABTC/ETH',
          'Last Price':'SBTC/ETH',
          '24h Change' 	:'+0.01809698 +17.65%',
          '24h High':'1',
          '24h Low'	:'4',
          '24h Volume':'124'

        },{
          'Pair':'SBTC/ETH',
          'Last Price':'SBTC/ETH',
          '24h Change' 	:'+0.01809698 +17.65%',
          '24h High':'1',
          '24h Low'	:'3',
          '24h Volume':'124'

        },{
          'Pair':'SBTC/ETH',
          'Last Price':'SBTC/ETH',
          '24h Change' 	:'+0.01809698 +17.65%',
          '24h High':'1',
          '24h Low'	:'1',
          '24h Volume':'124'

        },     {
          'Pair':'ABTC/ETH',
          'Last Price':'SBTC/ETH',
          '24h Change' 	:'+0.01809698 +17.65%',
          '24h High':'1',
          '24h Low'	:'4',
          '24h Volume':'124'

        },{
          'Pair':'SBTC/ETH',
          'Last Price':'SBTC/ETH',
          '24h Change' 	:'+0.01809698 +17.65%',
          '24h High':'1',
          '24h Low'	:'3',
          '24h Volume':'124'

        },{
          'Pair':'SBTC/ETH',
          'Last Price':'SBTC/ETH',
          '24h Change' 	:'+0.01809698 +17.65%',
          '24h High':'1',
          '24h Low'	:'1',
          '24h Volume':'124'

        },
          {
            'Pair':'ABTC/ETH',
            'Last Price':'SBTC/ETH',
            '24h Change' 	:'+0.01809698 +17.65%',
            '24h High':'1',
            '24h Low'	:'4',
            '24h Volume':'124'

          },{
            'Pair':'SBTC/ETH',
            'Last Price':'SBTC/ETH',
            '24h Change' 	:'+0.01809698 +17.65%',
            '24h High':'1',
            '24h Low'	:'3',
            '24h Volume':'124'

          },{
            'Pair':'SBTC/ETH',
            'Last Price':'SBTC/ETH',
            '24h Change' 	:'+0.01809698 +17.65%',
            '24h High':'1',
            '24h Low'	:'1',
            '24h Volume':'124'

          },
        ],
        usdtPair: [{
          'Pair':'SBTC/ETH',
          'Last Price':'SBTC/ETH',
          '24h Change' 	:'+0.01809698 +17.65%',
          '24h High':'1',
          '24h Low'	:'3',
          '24h Volume':'124'

        },     {
          'Pair':'ABTC/ETH',
          'Last Price':'SBTC/ETH',
          '24h Change' 	:'+0.01809698 +17.65%',
          '24h High':'1',
          '24h Low'	:'4',
          '24h Volume':'124'

        },{
          'Pair':'SBTC/ETH',
          'Last Price':'SBTC/ETH',
          '24h Change' 	:'+0.01809698 +17.65%',
          '24h High':'1',
          '24h Low'	:'3',
          '24h Volume':'124'

        },{
          'Pair':'SBTC/ETH',
          'Last Price':'SBTC/ETH',
          '24h Change' 	:'+0.01809698 +17.65%',
          '24h High':'1',
          '24h Low'	:'1',
          '24h Volume':'124'

        },
          {
            'Pair':'ABTC/ETH',
            'Last Price':'SBTC/ETH',
            '24h Change' 	:'+0.01809698 +17.65%',
            '24h High':'1',
            '24h Low'	:'4',
            '24h Volume':'124'

          },{
            'Pair':'SBTC/ETH',
            'Last Price':'SBTC/ETH',
            '24h Change' 	:'+0.01809698 +17.65%',
            '24h High':'1',
            '24h Low'	:'3',
            '24h Volume':'124'

          },{
            'Pair':'SBTC/ETH',
            'Last Price':'SBTC/ETH',
            '24h Change' 	:'+0.01809698 +17.65%',
            '24h High':'1',
            '24h Low'	:'1',
            '24h Volume':'124'

          },
        ]

      }
    },

    methods: {

      getData(rawData) {

        let data = rawData.filter((data) => {
           return data.Pair.toLowerCase().includes(this.filter.toLowerCase())
        })
        return data
      },

      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>


<style rel="stylesheet/scss" lang="scss" scoped>
  .home-market {
    width: 100%;
    padding: 40px 0;
    background-color: #f8f8fb;
  }
  .max-w {
    width: 1200px;
    padding: 0 50px;
    margin: 0 auto;
  }

</style>

