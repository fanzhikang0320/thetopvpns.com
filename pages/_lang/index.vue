<template>
  <div class="container">
    <div class="page_top_container">
      <div class="banner_container" id="index_banner">
        <div class="banner_content">
          <h1 class="page_title">{{$t('banner.title', { length: productData.length })}}</h1>
          <p>{{$t('banner.p1')}}</p>
          <p>{{$t('banner.p2')}}</p>
          <p>{{$t('banner.p3')}}</p>
        </div>
      </div>
      <div class="supportted_devices-container">
        <div class="devices_wrapper">
          <a :href="mainLink" target="_blank" rel="noopener noreferrer">
            <img src="@/assets/image/DAZN.jpg" alt="DAZN">
          </a>
          <a :href="mainLink" target="_blank" rel="noopener noreferrer">
            <img src="@/assets/image/SHOWTIME.jpg" alt="SHOWTIME">
          </a>
          <a :href="mainLink" target="_blank" rel="noopener noreferrer">
            <img src="@/assets/image/NETFLIX.jpg" alt="NETFLIX">
          </a>
          <a :href="mainLink" target="_blank" rel="noopener noreferrer">
            <img src="@/assets/image/PRIME.jpg" alt="PRIME VIDEO">
          </a>
          <a :href="mainLink" target="_blank" rel="noopener noreferrer">
            <img src="@/assets/image/HULU.jpg" alt="HULU">
          </a>
          <a :href="mainLink" target="_blank" rel="noopener noreferrer">
            <img src="@/assets/image/DISNEP.jpg" alt="DISNEP">
          </a>
          <a :href="mainLink" target="_blank" rel="noopener noreferrer">
            <img src="@/assets/image/BBC_PLAYER.jpg" alt="BBC PLAYER">
          </a>
          <a :href="mainLink" target="_blank" rel="noopener noreferrer">
            <img src="@/assets/image/HBOHD.jpg" alt="HBO HD">
          </a>
          <a :href="mainLink" target="_blank" rel="noopener noreferrer">
            <img src="@/assets/image/COMEDY_CENTRAL.jpg" alt="COMEDY CENTRAL">
          </a>
        </div>
        
      </div>
    </div>

    <div class="product_container">
      <div class="product_container_title_box">

        <div class="title_box_left">
          <h2 class="product_area_title">Top VPNs for {{getMonth()}}</h2>
          <div class="updated">
            {{$t('product.updated')}} {{autoUpdateTime()}}
          </div>
        </div>
        

        <div class="disclosure_box">
          <div class="disclosure_title" @click="showDisclosure">
            <span class="icon"></span>
            <span class="text">{{$t('disclosure.title')}}</span>
          </div>
          <div class="disclosure_content">
            <p>{{$t('disclosure.content.p1')}}</p>
            <p>{{$t('disclosure.content.p2')}}</p>
            <p>{{$t('disclosure.content.p3')}}</p>
            <p>{{$t('disclosure.content.p4')}}</p>

            <ul>
              <li>{{$t('disclosure.content.p5')}}</li>
              <li>{{$t('disclosure.content.p6')}}</li>
              <li>{{$t('disclosure.content.p7')}}</li>
              <li>{{$t('disclosure.content.p8')}}</li>
            </ul>
          
          </div>


        </div>
      </div>

      <div class="product_list_container">
        <div class="product_item" v-for="(product,index) in productData" :key="index">
          <div :class="{'special_corner_box':true,'first': index == 0, 'second': index == 1, 'third': index == 2}" v-if="index < 3 ">
            
            <span class="most" v-if="index == 0">{{$t('product.corner.first')}}</span>
            <span class="most" v-if="index == 1">{{$t('product.corner.second')}}</span>
            <span class="most" v-if="index == 2">{{$t('product.corner.third')}}</span>

          </div>
          <div class="corner_box" v-else>
            
            <span>#{{index + 1}}</span>
          </div>
          <p class="slogan" v-if="product.slogan">{{product.slogan}}</p>
          <!-- <div class="first-name" v-if="index == 0">UltraVPN</div> -->

          <!-- <div class="price_box" v-if="index == 0">
            <span class="text">From</span>
            <span class="price-text">${{product.price}}</span>
            <span class="text">/month</span>
          </div> -->
          <!-- <a :href="product.link" class="product_link_box" target="_blank" rel="noopener noreferrer"> -->
            <div class="product_item_content">
              <img v-lazy="product.logoSrc" :alt="product.name" class="product_logo">
              <div class="product_item_center">
                
                <ul class="product_desc_list">
                  <li v-for="(text,id) in product.meritList" :key="id">
                    <span class="icon_pic"></span>
                    <p class="text">{{text.text}}</p>
                  </li>
                </ul>
                <dl class="available_list">
                  <dt>{{$t('product.abailable')}}：</dt>
                  <dd  v-if="product.system.android">
                    <img src="@/assets/image/android.svg" alt="android">
                  </dd>
                  <dd v-if="product.system.mac">
                    <img src="@/assets/image/macOS.svg" alt="macOS" >
                  </dd>
                  <dd v-if="product.system.ios">
                    <img src="@/assets/image/iOS.svg" alt="iOS" >
                  </dd>
                  <dd v-if="product.system.router">
                    <img src="@/assets/image/router.svg" alt="router">
                  </dd>
                  <dd v-if="product.system.linux">
                    <img src="@/assets/image/linux.svg" alt="linux">
                  </dd>
                  <dd v-if="product.system.windows">
                    <img src="@/assets/image/windows.svg" alt="windows" >
                  </dd>
                  <dd v-if="product.system.chrome">
                    <img src="@/assets/image/chrome.svg" alt="chrome" >
                  </dd>
                  <dd v-if="product.system.firefox">
                    <img src="@/assets/image/firefox.svg" alt="firefox" >
                  </dd>
                  <dd v-if="product.system.gameConsole">
                    <img src="@/assets/image/gameConsole.svg" alt="gameConsole" >
                  </dd>
                  <dd v-if="product.system.smartTv">
                    <img src="@/assets/image/smartTV.svg" alt="watchTV" >
                  </dd>
                </dl>
              </div>

              <div class="rate-box">
                <div class="rate-text">
                  <span class="rate">{{product.rate.score}}</span>
                  <span>/{{product.rate.max}}</span>
                </div>
                <div class="star">
                  <el-rate disabled :value="changScore(product.rate.score,product.rate.max)"></el-rate>
                </div>
                <div class="reviews">
                  <span>({{product.reviews}} reviews)</span>
                </div>
              </div>

              <div class="btn-box">
                <a :href="product.link" class="visit_btn" :data-key="product.key" target="_blank" rel="noopener noreferrer" @click.self="execute">{{$t('product.visit')}} {{product.name}}</a>
                <a :href="product.link" class="text-link" :data-key="product.key" target="_blank" rel="noopener noreferrer" @click.self="execute" v-if="product.speaker && product.speaker != ''"><span class="volume-icon"></span><span>{{product.speaker}}</span></a>
                <span v-if="product.key == 'surfshark'" style="margin-top: 10px;display:inline-block;"><del style="margin-right: 5px;">$12.95/mo</del><span style="color: #e83f60;font-weight:bold;">$2.49/mo</span></span>
              </div>
              
            </div>
          <!-- </a> -->
          
        </div>
      </div>
    </div>

    <div class="question_container">
      <div class="question_title_box">
        <img src="@/assets/image/duihua.svg" alt="Top-Vpn" class="icon_pic">
        <h2 class="question_title">{{$t('faq.title')}}</h2>
      </div>
      <div class="question_box">
        <ul class="question_list">
          <li v-for="(item,index) in questionData" :key="index">
            <h6 :class="{'question_title':true, 'current': index == currentIndex}" @click="cut(index)">
              <span class="circle"></span>
              <span class="text">{{item.title}}</span>
            </h6>

            <div class="phone_show_question_content">
              <div class="question_content" v-html="item.content"></div>
              <div class="isUseful_btn_box">
                <button class="btn useless" @click="phoneChangeUseless(index)">
                  <span class="text-container" v-if="item.useless">
                    <span class="icon"></span>
                    <span class="text">{{$t('faq.useless')}}</span>
                  </span>
                  <span class="text-container" v-else>
                    <span class="cry-icon icon"></span>
                    <span class="text">Uh......</span>
                  </span>
                </button>
                
                <button class="btn useful" @click="phoneChangeUsefull(index)">
                  <span class="text-container" v-if="item.usefull">
                    <span class="icon"></span>
                    <span class="text">{{$t('faq.useful')}}!</span>
                  </span>
                  
                  <span class="text-container" v-else>
                    <span class="smile-icon icon"></span>
                    <span class="text">{{$t('faq.thanks')}}!</span>
                  </span>
                </button>
             </div>
            </div>
          </li>
        </ul>

        <div class="show_question_content">
          <div class="question_content" v-html="questionContent"></div>
          <div class="isUseful_btn_box">
            <button class="btn useless" @click="changeUseless">
              <span class="text-container" v-if="isShowUseless">
                <span class="icon"></span>
                <span class="text">{{$t('faq.useless')}}</span>
              </span>

              <span class="text-container" v-else>
                <span class="cry-icon icon"></span>
                <span class="text">Uh......</span>
              </span>
              
            </button>
            
            <button class="btn useful" @click="changeUsefull">
              <span class="text-container" v-if="isShowUsefull">
                <span class="icon"></span>
                <span class="text">{{$t('faq.useful')}}!</span>
              </span>
              
              <span class="text-container" v-else>
                <span class="smile-icon icon"></span>
                <span class="text">{{$t('faq.thanks')}}!</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="pickers_container">
        <h2 class="pickers_title">{{$t('topPicks.title')}}</h2>
        <div class="pickers_product_wrapper">
         
          <div :class="{'picker_product_item':true, 'picker_product_main_item': index == 0}" v-for="(item,index) in pickterData" :key="index">
            <div class="corner-box" v-if="index == 0">
              <span class="line"></span>
              <span class="text"># {{index + 1}}</span>
            </div>
            
            <div class="picker_item_top">
                <img v-lazy="item.horizontalLogoSrc" :alt="item.name" class="logo">
                <div class="rate_wrapper">
                  <div class="rate_box">
                    <span class="rate">{{item.rate.score}}</span>
                    <span>/{{item.rate.max}}</span>
                  </div>
                  <div class="star">
                    <el-rate :value="changScore(item.rate.score,item.rate.max)" disabled></el-rate>
                  </div>
                  <div class="reviews">
                    <span>({{item.reviews}} reviews)</span>
                  </div>
                </div>
            </div>
            <img v-lazy="item.picture" :alt="item.name" class="picture">
            <p class="desc">{{item.feature}}</p>
            <a :href="item.link" target="_blank" @click.self="execute" class="btn" rel="noopener noreferrer nofollow">{{$t('topPicks.visit')}} {{item.name}}</a>
            <nuxt-link :to="$i18n.path('reviews?id='+item.keyname)" v-if="item.keyname" class="review">{{$t('topPicks.read')}}</nuxt-link>
          </div>
        </div>
    </div>
  </div>
</template>


<script>
export default {
 
  async asyncData({ app, route, store }) {
      const changeLink = (url,key) => {
          let aff_sub = route.query['utm_term'],
              aff_sub2 = route.query['TargetId'],
              aff_sub3 = route.query['loc'],
              msclkid = route.query['msclkid'],
              gclid = route.query['gclid'],
              aff_sub4 = Math.floor(new Date().getTime() / 1000),
              aff_sub5 = key + '_homepage',
              basePath = '/jump?url=';

          // 判断是Google的流量还是bing的流量

          if (typeof gclid != 'undefined') {
            if (key == 'nordvpn') {
              return `${basePath}https://hotsale.featuredproduct.news/e527db6e-9905-4870-82a5-d7aedfded2c3?msclkid=${msclkid}&keyword=${aff_sub}&TargetId=${aff_sub2}&CampaignId=g`
            }
            

          } else if (typeof msclkid != 'undefined') {

            if (key == 'surfshark' || key == 'nordvpn') {

              return `${basePath}${url}?msclkid=${msclkid}&keyword=${aff_sub}&TargetId=${aff_sub2}&CampaignId=b`

            }

          }
          return `${basePath}${url}`;
          
        }
      // 获取当前语言环境
      const language = store.state.locales.locale;
      let res, result;

      // 根据当前语种加载对应的数据
      if (language == 'fr' || language == 'es' || language == 'de' || language == 'it') {
        res = await app.$axios.get(`/data/lang_${language}/product_${language}.json`);
        result = await app.$axios.get(`/data/lang_${language}/question_${language}.json`);
      } else {
        res = await app.$axios.get('/data/product.json');
        result = await app.$axios.get('/data/question.json');
      }
      

      res.data.data.forEach(element => {

          element.link = changeLink(element.link,element.key);

          let basic = {
              android: false,
              ios: false,
              mac: false,
              windows: false,
              linux: false,
              router: false,
              gameConsole: false,
              smartTv: false,
              chrome: false,
              firefox: false
          }
          
          for (let i = 0; i < element.system.length; i++) {
              basic[element.system[i]] = true;
          }
          element.system = basic;
      });

      result.data.data.forEach(item => {
        item.useless = true;
        item.usefull = true;
      })

      return {
        productData: res.data.data,
        pickterData: res.data.data.slice(0,3),
        questionData: result.data.data,
        mainLink: res.data.data[0].link
      }

  },

  data() {
    return {
      isShowUseless: true,
      isShowUsefull: true,
      currentIndex: 0,
      questionContent: ""
    }
  },
  
  methods: {
    
    // 记录按钮点击数量
    execute() {
      window.execute();
    },
    changeUseless() {
      this.isShowUseless = !this.isShowUseless;
      this.isShowUsefull = true;
    },
    changeUsefull() {
      this.isShowUsefull = !this.isShowUsefull;
      this.isShowUseless = true;
    },
     
    phoneChangeUseless(index) {
      this.questionData[index].useless = !this.questionData[index].useless;

      this.questionData[index].usefull = true;
    },
    phoneChangeUsefull(index) {
       this.questionData[index].usefull = !this.questionData[index].usefull;
       this.questionData[index].useless = true;
    },
    
    async getQuestion() {
      const res = await this.$axios.get('/data/question.json');
      res.data.data.forEach(item => {
        item.useless = true;
        item.usefull = true;
      })
      this.questionData = res.data.data;
      this.cut(0);
    },
    getMonth() {
        let month = new Date().getMonth();
        let string = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        return string[month];
    },
    drawCanvas() {
      ! function() {
        //封装方法，压缩之后减少文件大小
        function get_attribute(node, attr, default_value) {
          return node.getAttribute(attr) || default_value;
        }
        //封装方法，压缩之后减少文件大小
        function get_by_tagname(name) {
          return document.getElementById(name);
        }
        //获取配置参数
        function get_config_option() {
          var scripts = document.getElementsByTagName("script"),
            script_len = scripts.length,
            script = scripts[script_len - 1]; //当前加载的script
          return {
            l: script_len, //长度，用于生成id用
            z: get_attribute(script, "zIndex", 1), //z-index
            o: get_attribute(script, "opacity", 1), //opacity
            c: get_attribute(script, "color", "255,255,255"), //color
            n: get_attribute(script, "count", 25) //count
          };
        }
        //设置canvas的高宽
        function set_canvas_size() {
          canvas_width = the_canvas.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, 
          canvas_height = the_canvas.height =  document.getElementById('index_banner').clientHeight && document.getElementById('index_banner').clientHeight;
        }

        //绘制过程
        function draw_canvas() {
          context.clearRect(0, 0, canvas_width, canvas_height);
          //随机的线条和当前位置联合数组
          var e, i, d, x_dist, y_dist, dist; //临时节点
          //遍历处理每一个点
          random_lines.forEach(function(r, idx) {
            r.x += r.xa, 
            r.y += r.ya, //移动
            r.xa *= r.x > canvas_width || r.x < 0 ? -1 : 1, 
            r.ya *= r.y > canvas_height || r.y < 0 ? -1 : 1, //碰到边界，反向反弹
            // context.arc(r.x - 0.5, r.y - 0.5,10,0,2*Math.PI);
            context.fillStyle = '#ffffff'
            context.fillRect(r.x - 0.5, r.y - 0.5, 3, 3); //绘制一个宽高为1的点
            //从下一个点开始
            for (i = idx + 1; i < all_array.length; i++) {
              e = all_array[i];
              //不是当前点
              if (null !== e.x && null !== e.y) {
                  x_dist = r.x - e.x, //x轴距离 l
                  y_dist = r.y - e.y, //y轴距离 n
                  dist = x_dist * x_dist + y_dist * y_dist; //总距离, m
                // dist < e.max && (e === current_point && dist >= e.max / 2 && (r.x -= 0.03 * x_dist, r.y -= 0.03 * y_dist), //靠近的时候加速
                  d = (e.max - dist) / e.max, 
                  context.beginPath(), 
                  // context.lineWidth = d / 2, 
                  context.lineWidth = 0.8,
                  context.strokeStyle = "rgba(" + config.c + "," + (d + 0.9) + ")", 
                  context.moveTo(r.x, r.y), 
                  context.lineTo(e.x, e.y), 
                  context.stroke()
                  // );
              }
            }
          }), frame_func(draw_canvas);
        }
        //创建画布，并添加到body中
        var the_canvas = document.createElement("canvas"), //画布
          config = get_config_option(), //配置
          canvas_id = "c_n" + config.l, //canvas id
          context = the_canvas.getContext("2d"), canvas_width, canvas_height, 
          frame_func = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(func) {
            window.setTimeout(func, 1000 / 45);
          }, random = Math.random, 
          current_point = {
            x: null, //当前鼠标x
            y: null, //当前鼠标y
            max: 20000
          },
          all_array;
        the_canvas.id = canvas_id;
          the_canvas.style.cssText = "position:absolute;top:0;left:0;z-index:" + config.z + ";opacity:" + config.o + ";background-image:linear-gradient(to right, #79bade, #2547b6)";
          
          // the_canvas.style.height = document.getElementById('index_banner').clientHeight;
          

        get_by_tagname("index_banner").appendChild(the_canvas);
        //初始化画布大小

        set_canvas_size(), window.onresize = set_canvas_size;
        //当时鼠标位置存储，离开的时候，释放当前位置信息
        window.onmousemove = function(e) {
          e = e || window.event, current_point.x = e.clientX, current_point.y = e.clientY;
        }, window.onmouseout = function() {
          current_point.x = null, current_point.y = null;
        };
        //随机生成config.n条线位置信息
        for (var random_lines = [], i = 0; config.n > i; i++) {
          var x = random()  * canvas_width, //随机位置
            y = random()  * canvas_height,
            xa = 2 * random() - 1, //随机运动方向
            ya = 2 * random() - 1;
          random_lines.push({
            x: x,
            y: y,
            xa: xa,
            ya: ya,
            max: 6000 //沾附距离 6000
          });
        }
        all_array = random_lines.concat([current_point]);
        //0.1秒后绘制
        setTimeout(function() {
          draw_canvas();
        }, 0);
      }();
    },
    cut(index) {
      this.questionContent =  this.questionData[index].content;
      this.isShowUseless = true;
      this.isShowUsefull = true;
      this.currentIndex = index;
    },
    changScore(score,max) {

      return score / max * 5
    },
    autoUpdateTime() {
      let year = new Date().getFullYear();
      let month = new Date().getMonth();
      let string = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec'];
      let day = new Date().getDate();

      
      if (day < 3) {

        if (month == 0) {
          month = 11;
          year = year - 1;
        } else {
          month = month - 1
        }
          
      }
      return `${string[month]} 03 ${year}`;
    },
    showDisclosure() {
        $('.disclosure_box .disclosure_content').slideToggle('fast');
    }
  },
  
  mounted() {

    this.cut(0);
    // this.drawCanvas();
    let that = this;

    $('.product_item_content').on('click',function (e) {
      e.preventDefault();
      let href = $(this).find('.btn-box a').attr('href');

      if (href) {
        let newTab = window.open();
        newTab.location.href = href
      }
      
    })


  }

}
</script>

<style lang="scss" scoped>
@import '~/assets/css/index.scss';


</style>
