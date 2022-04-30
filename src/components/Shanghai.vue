/* eslint-disable quotes */
<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="rs in results" :key="rs.id">
        <div class="m-content inl-block">
          <span class="span-left">id:&nbsp;&nbsp;{{ rs.id }}</span>
          <span class="span-left">区县名称:&nbsp;&nbsp;{{ rs.name }}</span>
          <span class="span-left">邮编(Zip Code):&nbsp;&nbsp;{{ rs.zipcode }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'shanghai',
  data () {
    return {
      msg: 'City Lists',
      results: []
    }
  },
  created: function () {
    let url = 'https://api.jisuapi.com/area/city?'
    let myappkey = '8db15f4d5a5370da'
    let paramsData = {
      parentid: 24,
      appkey: myappkey
    }
    // eslint-disable-next-line camelcase
    let json_url = url + myappkey
    // 请求api
    this.$http
      .jsonp(
        json_url,
        { params: paramsData },
        {
          headers: {},
          emulateJSON: true
        }
      )
      .then(
        function (response) {
          // 这里是处理正确的回调
          // console.log(JSON.parse(response.bodyText).result);
          this.results = JSON.parse(response.bodyText).result
        },
        function (response) {
          // 这里是处理错误的回调
          console.log(response)
        }
      )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
ul li {
  border-bottom: 1px solid #ccc;
  padding: 8px 0;
  text-align: left;
}

.inl-block {
  display: inline-block;
}

.m-content {
  margin-left: 8px;
}

span.span-left {
  margin-left: 32px;
}

li:nth-child(odd) {
  background-color: #ccc;
}

li:nth-child(even) {
  background-color: aliceblue;
}
</style>
