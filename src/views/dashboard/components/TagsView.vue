<template>

  <div class="home-market">

    <div class="max-w">
      <el-input style="width: 200px; margin-left:1000px" size="small" prefix-icon="el-icon-search"
                v-model="filter"></el-input>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="Favourites" name="first">
          <el-table :data="getData(favouritePair)">

            <el-table-column width="50" align="left">

              <template scope="scope">
                  <span class="D text-center ts-18" @click="collect(scope.row)"
                        :class="{ 'collect-hover': scope.row.favourite  }">
                  <i :class="['el-icon-star-' + ( scope.row.favourite ? 'on' : 'off') ]"></i>

                </span>
              </template>

            </el-table-column>
            <el-table-column prop="pair" label="Pair" sortable></el-table-column>
            <el-table-column prop="price" label="Trade History" sortable></el-table-column>
            <el-table-column prop="change" label="24h Change" sortable>
              <template scope="scope">
                <span :class="colorStatus(scope.row.change)">{{ scope.row.change }}% </span>
              </template>
            </el-table-column>
            <el-table-column prop="24h High" label="24h High" sortable></el-table-column>
            <el-table-column prop="24h Low" label="24h Low" sortable></el-table-column>
            <el-table-column prop="24h Volume" label="24h Volume" sortable></el-table-column>

          </el-table>
        </el-tab-pane>
        <el-tab-pane label="ETH Market" name="second">
          <el-table :data="getData(ethPair)">

            <el-table-column width="50" align="left">

              <template scope="scope">

                  <span class="D text-center ts-18" @click="collect(scope.row)"
                        :class="{ 'collect-hover': scope.row.favourite  }">

                  <i :class="['el-icon-star-' + (  scope.row.favourite ? 'on' : 'off') ]"></i>

                </span>
              </template>

            </el-table-column>
            <el-table-column prop="pair" label="Pair" sortable width="170%">


              <template scope="scope">


                <span>{{ scope.row.pair }}</span><span
                style="color: #7d8b99">/ETH</span>

              </template>

            </el-table-column>
            <el-table-column prop="price" label="Trade History" width="320%" sortable>

              <template scope="scope">
                <span>{{ scope.row.price }}</span><span
                style="color: #7d8b99"> / 0.22USD</span>

              </template>

            </el-table-column>
            <el-table-column prop="24h Change" label="24h Change" sortable aligh="right" width="200%">


              <template scope="scope">

                <span :class="colorStatus(scope.row.change)">{{ scope.row.change }}% </span>

              </template>


            </el-table-column>
            <el-table-column prop="24h High" label="24h High" sortable width="200%" aligh="right"></el-table-column>
            <el-table-column prop="24h Low" label="24h Low" sortable width="100%" aligh="right"></el-table-column>
            <el-table-column prop="24h Volume" label="24h Volume" sortable align="right"></el-table-column>

          </el-table>
        </el-tab-pane>
        <el-tab-pane label="BTC Market" name="third">
          <el-table :data="getData(btcPair)">
            <el-table-column width="50" align="left">

              <template scope="scope">

                  <span class="D text-center ts-18" @click="collect(scope.row)"
                        :class="{ 'collect-hover': scope.row.favourite  }">

                  <i :class="['el-icon-star-' + (  scope.row.favourite ? 'on' : 'off') ]"></i>

                </span>
              </template>

            </el-table-column>
            <el-table-column prop="pair" label="Pair" sortable width="170%">


              <template scope="scope">


                <span>{{ scope.row.pair }}</span><span
                style="color: #7d8b99">/BTC</span>

              </template>

            </el-table-column>
            <el-table-column prop="price" label="Trade History" width="320%" sortable>

              <template scope="scope">
                <span>{{ scope.row.price }}</span><span
                style="color: #7d8b99"> / 0.22USD</span>

              </template>

            </el-table-column>
            <el-table-column prop="24h Change" label="24h Change" sortable aligh="right" width="200%">


              <template scope="scope">

                <span :class="colorStatus(scope.row.change)">{{ scope.row.change }}% </span>

              </template>


            </el-table-column>
            <el-table-column prop="24h High" label="24h High" sortable width="200%" aligh="right"></el-table-column>
            <el-table-column prop="24h Low" label="24h Low" sortable width="100%" aligh="right"></el-table-column>
            <el-table-column prop="24h Volume" label="24h Volume" sortable align="right"></el-table-column>


          </el-table>
        </el-tab-pane>
        <el-tab-pane label="USDT Market" name="fourth">
          <el-table :data="getData(usdtPair)">
            <el-table-column width="50" align="left">

              <template scope="scope">

                  <span class="D text-center ts-18" @click="collect(scope.row)"
                        :class="{ 'collect-hover': scope.row.favourite  }">

                  <i :class="['el-icon-star-' + (  scope.row.favourite ? 'on' : 'off') ]"></i>

                </span>
              </template>

            </el-table-column>
            <el-table-column prop="pair" label="Pair" sortable width="170%">


              <template scope="scope">


                <span>{{ scope.row.pair }}</span><span
                style="color: #7d8b99">/USDT</span>

              </template>

            </el-table-column>
            <el-table-column prop="price" label="Trade History" width="320%" sortable>

              <template scope="scope">
                <span>{{ scope.row.price }}</span><span
                style="color: #7d8b99"> / 0.22USD</span>

              </template>

            </el-table-column>
            <el-table-column prop="24h Change" label="24h Change" sortable aligh="right" width="200%">


              <template scope="scope">

                <span :class="colorStatus(scope.row.change)">{{ scope.row.change }}% </span>

              </template>


            </el-table-column>
            <el-table-column prop="24h High" label="24h High" sortable width="200%" aligh="right"></el-table-column>
            <el-table-column prop="24h Low" label="24h Low" sortable width="100%" aligh="right"></el-table-column>
            <el-table-column prop="24h Volume" label="24h Volume" sortable align="right"></el-table-column>

          </el-table>
        </el-tab-pane>
      </el-tabs>
    </div>

  </div>

</template>
<script>
  export default {
    name: 'home-market',
    data() {
      return {

        activeName: 'second',
        filter: '',
        favouritePair: [],
        ethPair:
          [{

            'favourite': false,
            'pair': 'SBTC',
            'price': '0.00088999',
            'change': '-0.2512',
            '24h High': '0.00088999',
            '24h Low': '0.00088323',
            '24h Volume': (22000).toLocaleString('en-US'),
          },
            {

              'favourite': false,
              'pair': 'ABTC',
              'price': '0.00088999',
              'change': '0.523',
              '24h High': '0.00088999',
              '24h Low': '0.00088999',
              '24h Volume': (90111).toLocaleString('en-US')

            },
            {

              'favourite': false,
              'pair': 'ABTC',
              'price': '0.00088999',
              'change': '0.523',
              '24h High': '0.00088999',
              '24h Low': '0.00088999',
              '24h Volume': (90111).toLocaleString('en-US')

            },
            {

              'favourite': false,
              'pair': 'ABTC',
              'price': '0.00088999',
              'change': '0.523',
              '24h High': '0.00088999',
              '24h Low': '0.00088999',
              '24h Volume': (90111).toLocaleString('en-US')

            },
            {

              'favourite': false,
              'pair': 'ABTC',
              'price': '0.00088999',
              'change': '0.523',
              '24h High': '0.00088999',
              '24h Low': '0.00088999',
              '24h Volume': (90111).toLocaleString('en-US')

            },
            {

              'favourite': false,
              'pair': 'ABTC',
              'price': '0.00088999',
              'change': '0.523',
              '24h High': '0.00088999',
              '24h Low': '0.00088999',
              '24h Volume': (90111).toLocaleString('en-US')

            },
            {

              'favourite': false,
              'pair': 'ABTC',
              'price': '0.00088999',
              'change': '0.523',
              '24h High': '0.00088999',
              '24h Low': '0.00088999',
              '24h Volume': (90111).toLocaleString('en-US')

            },
            {
              'favourite': false,
              'pair': 'ABTC',
              'price': '0.00088999',
              'change': '1',
              '24h High': '0.00088999',
              '24h Low': '0.00088999',
              '24h Volume': (1240).toLocaleString('en-US')

            }
          ],

        btcPair:
          [{

            'favourite': false,
            'pair': 'SBTC',
            'price': '0.00088999',
            'change': '-0.2512',
            '24h High': '0.00088999',
            '24h Low': '0.00088323',
            '24h Volume': (22000).toLocaleString('en-US'),
          },
            {

              'favourite': false,
              'pair': 'ABTC',
              'price': '0.00088999',
              'change': '0.523',
              '24h High': '0.00088999',
              '24h Low': '0.00088999',
              '24h Volume': (90111).toLocaleString('en-US')

            },
            {

              'favourite': false,
              'pair': 'ABTC',
              'price': '0.00088999',
              'change': '0.523',
              '24h High': '0.00088999',
              '24h Low': '0.00088999',
              '24h Volume': (90111).toLocaleString('en-US')

            },
            {

              'favourite': false,
              'pair': 'ABTC',
              'price': '0.00088999',
              'change': '0.523',
              '24h High': '0.00088999',
              '24h Low': '0.00088999',
              '24h Volume': (90111).toLocaleString('en-US')

            },
            {

              'favourite': false,
              'pair': 'ABTC',
              'price': '0.00088999',
              'change': '0.523',
              '24h High': '0.00088999',
              '24h Low': '0.00088999',
              '24h Volume': (90111).toLocaleString('en-US')

            },
            {

              'favourite': false,
              'pair': 'ABTC',
              'price': '0.00088999',
              'change': '0.523',
              '24h High': '0.00088999',
              '24h Low': '0.00088999',
              '24h Volume': (90111).toLocaleString('en-US')

            },
            {

              'favourite': false,
              'pair': 'ABTC',
              'price': '0.00088999',
              'change': '0.523',
              '24h High': '0.00088999',
              '24h Low': '0.00088999',
              '24h Volume': (90111).toLocaleString('en-US')

            },
            {
              'favourite': false,
              'pair': 'ABTC',
              'price': '0.00088999',
              'change': '1',
              '24h High': '0.00088999',
              '24h Low': '0.00088999',
              '24h Volume': (1240).toLocaleString('en-US')

            }
          ],
        usdtPair:
          [{

            'favourite': false,
            'pair': 'SBTC',
            'price': '0.00088999',
            'change': '-0.2512',
            '24h High': '0.00088999',
            '24h Low': '0.00088323',
            '24h Volume': (22000).toLocaleString('en-US'),
          },
            {

              'favourite': false,
              'pair': 'ABTC',
              'price': '0.00088999',
              'change': '0.523',
              '24h High': '0.00088999',
              '24h Low': '0.00088999',
              '24h Volume': (90111).toLocaleString('en-US')

            },
            {

              'favourite': false,
              'pair': 'ABTC',
              'price': '0.00088999',
              'change': '0.523',
              '24h High': '0.00088999',
              '24h Low': '0.00088999',
              '24h Volume': (90111).toLocaleString('en-US')

            },
            {

              'favourite': false,
              'pair': 'ABTC',
              'price': '0.00088999',
              'change': '0.523',
              '24h High': '0.00088999',
              '24h Low': '0.00088999',
              '24h Volume': (90111).toLocaleString('en-US')

            },
            {

              'favourite': false,
              'pair': 'ABTC',
              'price': '0.00088999',
              'change': '0.523',
              '24h High': '0.00088999',
              '24h Low': '0.00088999',
              '24h Volume': (90111).toLocaleString('en-US')

            },
            {

              'favourite': false,
              'pair': 'ABTC',
              'price': '0.00088999',
              'change': '0.523',
              '24h High': '0.00088999',
              '24h Low': '0.00088999',
              '24h Volume': (90111).toLocaleString('en-US')

            },
            {

              'favourite': false,
              'pair': 'ABTC',
              'price': '0.00088999',
              'change': '0.523',
              '24h High': '0.00088999',
              '24h Low': '0.00088999',
              '24h Volume': (90111).toLocaleString('en-US')

            },
            {
              'favourite': false,
              'pair': 'ABTC',
              'price': '0.00088999',
              'change': '1',
              '24h High': '0.00088999',
              '24h Low': '0.00088999',
              '24h Volume': (1240).toLocaleString('en-US')

            }
          ],
      }
    },
    methods: {
      colorStatus(change) {
        return {
          'color-rise': change > 0,
          'color-fall': change < 0,
          'color-default': change === 0,
        }
      },
      collect (row){
        row.favourite =! row.favourite
        if (row.favourite){
          this.favouritePair.push(row)
        }

        else {

        }

      },
      getData(rawData) {

        let data = rawData.filter((data) => {
          return data.pair.toLowerCase().includes(this.filter.toLowerCase())
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

  .D {
    padding: inherit;
    color: #a2adb8

  }

  .D :hover {
    cursor: pointer;
    color: #65a8f3;
  }

  .ts-18 {
    font-size: 19px;
  }

  .text-center {
    text-align: center;
  }

  .collect-hover {
    cursor: pointer;
    color: #65a8f3;
  }

  .color-rise {

    color: #70b32e;
  }

  .color-fall {

    color: #f5663b;
  }

  .color-default {
    color: black;
  }

</style>

