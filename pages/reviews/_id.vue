<template>
  <div class="reviews-container">
      <div class="reviews-main-container">
          <div class="product-info-container">
              <div class="reviews-top">
                  <div class="title-box">
                      <img  :src="productItem.logoSrc" :alt="productItem.name" class="product-logo">
                      <div class="product-text-box">
                          <h1 class="reviews-title">{{productItem.name}}</h1>
                          <p class="desc">
                              <span class="author">{{reviewsData.username}}</span>
                              <span class="date">{{changeDate(reviewsData.addtime)}}</span>
                          </p>
                      </div>
                  </div>
                  <div class="card-box">
                      <div class="card-info-box">
                          <div class="info-item">
                              <div class="info-key">VPN Rating</div>
                              <div class="info-value">
                                  <div class="star-box">
                                      <el-rate :value="changScore(productItem.rate.score,productItem.rate.max)" disabled></el-rate>
                                  </div>
                                  <div class="rate">
                                      <strong>{{productItem.rate.score}}</strong>
                                     <span>/{{productItem.rate.max}}</span>
                                  </div>
                              </div>
                          </div>
                          <span class="line"></span>
                          <div class="info-item">
                              <div class="info-key">Minimum Price</div>
                              <div class="info-value">
                                  <strong>${{productItem.price}}</strong>
                                  <span>/Month</span>
                              </div>
                          </div>
                          <span class="line"></span>
                          <div class="info-item">
                              <div class="info-key">Comparisons won</div>
                              <div class="info-value">
                                  <strong>{{reviewsData.won1}}</strong>
                                  <span>/{{reviewsData.won2}}</span>
                              </div>
                          </div>
                      </div>
                      <a :href="productItem.link" class="btn" target="_blank" @click="execute" rel="noopener noreferrer">Get {{productItem.name}} Now</a>
                  </div>
              </div>
              <div class="content" v-html="reviewsData.content"></div>
          </div>
          <div class="product-attributes">

              <div class="chapter-box" id="overview">
                  <h6 class="attr">Overview</h6>
                  <div class="content" v-html="reviewsData.overview"></div>
              </div>
              <div class="chapter-box" id="serverLocations">
                  <h6 class="attr">Server Locations</h6>
                  <div class="content" v-html="reviewsData.server"></div>
              </div>
              <div class="chapter-box" id="logging">
                  <h6 class="attr">Logging</h6>
                  <div class="content" v-html="reviewsData.logging"></div>
              </div>
              <div class="chapter-box speed-box" id="speed">
                  <h6 class="attr">Speed</h6>
                <div class="content" v-html="reviewsData.speed_s"></div>
                
                <div class="speed-info" v-for="(item,index) in reviewsData.pingce" :key="index">
                    <p class="table-title">{{item.titlename}}</p>
                    <ul class="table">
                        <li>
                            <div class="speed-key">
                                
                                <strong>PING</strong>
                                <span>ms</span>
                            </div>
                            <div class="speed-value">
                                {{item.ping}}
                            </div>
                        </li>
                        <li>
                            <div class="speed-key">
                                
                                <strong>DOWNLOAD</strong>
                                <span>Mbps</span>
                            </div>
                            <div class="speed-value">
                                {{item.download}}
                            </div>
                        </li>
                        <li>
                            <div class="speed-key">
                                
                                <strong>UPLOAD</strong>
                                <span>Mbps</span>
                            </div>
                            <div class="speed-value">
                                {{item.upload}}
                            </div>
                        </li>
                    </ul>
                    <ul class="list">
                        <li>
                            <span class="circle"></span>
                            <strong>Download:</strong>
                            <span class="value">{{item.download}} Mbps</span>
                        </li>
                        <li>
                            <span class="circle"></span>
                            <strong>Upload:</strong>
                            <span class="value">{{item.upload}} Mbps</span>
                        </li>
                        <li>
                            <span class="circle"></span>
                            <strong>Ping:</strong>
                            <span class="value">{{item.ping}} ms</span>
                        </li>
                    </ul>
                </div>
                <div class="content" v-html="reviewsData.speed_x"></div>
              </div>
              <div class="chapter-box" id="encryption">
                  <h6 class="attr">Encryption</h6>
                <div class="content" v-html="reviewsData.encryption"></div>
              </div>
              <div class="chapter-box" id="DP">
                   <h6 class="attr">Devices & Platforms</h6>
                <div class="content" v-html="reviewsData.platforms"></div>
              </div>
              <div class="chapter-box" id="support">
                  <h6 class="attr">Support</h6>
                <div class="content" v-html="reviewsData.support"></div>
              </div>
              <div class="chapter-box pricing-info" id="pricing">
                  <h6 class="attr">Pricing</h6>
                <div class="card-box">
                    <div class="card-title">{{reviewsData.pricing.topdata[0].pricing1}}</div>
                    <div class="card-item">
                        <div class="card-top">
                            <img  :src="productItem.logoSrc" :alt="productItem.name" data-custom="newVpn" class="product-logo">
                            <div class="card-info">
                                <span class="name">{{productItem.name}}</span>
                                <span class="text desc"><strong>{{reviewsData.pricing.topdata[0].pricing2}}</strong></span>
                                <span class="text">{{reviewsData.pricing.topdata[0].pricing3}}</span>
                            </div>
                        </div>
                        <div class="card-bottom">
                            <p class="desc">
                                <strong>{{reviewsData.pricing.topdata[0].pricing4}}</strong>
                                <span>/{{reviewsData.pricing.topdata[0].pricing5}}</span>
                            </p>

                            <a :href="productItem.link" class="btn" target="_blank" @click="execute" rel="noopener noreferrer">Visit Site</a>
                        </div>
                    </div>
                </div>

                <div class="content" v-html="reviewsData.pricing.content_x"></div>
                
                <div class="card-list">
                    <div class="list-item" v-for="(item,index) in reviewsData.pricing.listdata" :key="index">
                        <span class="month-num">{{item.months}} Month</span>
                        <del class="history-price">${{item.price}}</del>
                        <span><strong class="price">${{item.pjprice}}</strong>/month</span>
                        <p class="desc">{{item.miaoshu}}</p>
                        <div class="save">
                            <span>{{item.biaoqian}}</span>
                        </div>
                    </div>
                </div>

                <div class="content" v-html="reviewsData.pricing.content_y"></div>
              </div>
              <div class="chapter-box" id="bottomLine">
                  <h6 class="attr">The Bottom Line</h6>
                <div class="content" v-html="reviewsData.bottom"></div>
              </div>
              <div class="author-box">
                  <h6 class="attr">About The Author </h6>
                  
                  <div class="author-info">
                      <img :src="reviewsData.userimg" data-custom="newVPN" :alt="reviewsData.username" class="headImg">
                      <div class="info">
                          <span class="name">{{reviewsData.username}}</span>
                          <span class="desc">{{reviewsData.title}}</span>
                      </div>
                  </div>

              </div>
              
          </div>
          <div class="user-reivew-container">
              <h3 class="user-review-title">Users Review For {{productItem.name}}</h3>
              <ul class="talks-list">
                  <li v-for="(item,index) in talksArr" :key="index">
                      <p class="info">
                        <strong class="name">{{item.username}}</strong>
                        <span class="date">{{changeDate(item.addtime)}}</span>
                      </p>
                      <p class="content">{{item.content}}</p>
                      <div class="star">
                          <el-rate :value="changScore(item.level,5)" disabled></el-rate>
                      </div>
                  </li>
              </ul>
              <div class="more-box">
                  <a href="javascript:void(0)" class="more">Read More Reviews</a>
              </div>
              <div class="form-box">
                  <div class="form-title">
                      <p class="title">How would you rate {{productItem.name}}?</p>
                        <div class="star">
                            <el-rate v-model="score"></el-rate>
                        </div>
                  </div>
                  <form class="reviews-form" @submit.prevent="onSubmit">
                    <textarea name="content" v-model="content" placeholder="Your review" id="user-content" cols="30" rows="10"></textarea>
                    
                    <div class="input-box">
                        <input type="text" placeholder="Name" v-model="username" name="username"/>
                        <input type="text" placeholder="Email" v-model="email" name="email"/>
                        <button type="submit" @click="submitInfo(reviewsId)" class="submit">Submit</button>
                    </div>
                </form>
              </div>
              
          </div>
          <div class="recommended-container">
              <h3 class="recommended-title">Alternatives to {{productItem.name}}</h3>
              <div class="recommend-list">
                  <div class="recommend-item" v-for="(item,index) in recommendData" :key="index">
                      <img :src="item.logoSrc" :alt="item.name" class="logo">
                      <strong class="score">{{item.rate.score}}</strong>
                      <span class="reviews">{{item.reviews}} review</span>
                      <div class="star">
                          <el-rate :value="changScore(item.rate.score,item.rate.max)" disabled></el-rate>
                      </div>
                      <a :href="item.link" class="btn" target="_blank" @click="execute" rel="noopener noreferrer">Visit Site</a>
                  </div>
              </div>
          </div>
      </div>
      <div class="aside-container">
          <div class="top-three-box">
              <h5 class="title">Top 3 VPNs</h5>
              <ul class="list-box">
                  <li v-for="(item,index) in recommendData" :key="index">
                      <img :src="item.logoSrc" :alt="item.name" class="logo">
                      <strong class="score">{{item.rate.score}}</strong>
                      <a :href="item.link" class="btn" @click="execute" target="_blank" rel="noopener noreferrer">Visit Site</a>
                  </li>
              </ul>
          </div>

          <dl class="quick-nav">
              <dt>Quick Access</dt>
              <dd @click="scrollTo('overview')">
                  <span class="icon"></span>
                  <span class="text">Overview</span>
              </dd>
              <dd @click="scrollTo('serverLocations')">
                  <span class="icon"></span>
                  <span class="text">Server Locations</span>
              </dd>
              <dd @click="scrollTo('logging')">
                  <span class="icon"></span>
                  <span class="text">Logging</span>
              </dd>
              <dd @click="scrollTo('speed')">
                  <span class="icon"></span>
                  <span class="text">Speed</span>
              </dd>
              <dd @click="scrollTo('encryption')">
                  <span class="icon"></span>
                  <span class="text">Encryption</span>
              </dd>
              <dd @click="scrollTo('DP')">
                  <span class="icon"></span>
                  <span class="text">Devices & Platforms</span>
              </dd>
              <dd @click="scrollTo('support')">
                  <span class="icon"></span>
                  <span class="text">Support</span>
              </dd>
              <dd @click="scrollTo('pricing')">
                  <span class="icon"></span>
                  <span class="text">Pricing</span>
              </dd>
              <dd @click="scrollTo('bottomLine')">
                  <span class="icon"></span>
                  <span class="text">The Bottom Line</span>
              </dd>
          </dl>
      </div>
  </div>
</template>

<script>
export default {
    watchQuery: ['id'],
    async asyncData({query,app}) {
        
        let id = query.id;
        const productArr = await app.$axios.get('/data/product.json');
        
        const result = await app.$axios.get('https://api.vpncollection.com/review',{ params: {id: id}});

        const productItem = productArr.data.data.filter(item => {
            return item.keyname.toLocaleLowerCase() == result.data.data[0].keyname.toLocaleLowerCase()
        })

        const recommendData = productArr.data.data.slice(0,3);
        return {
            productItem: productItem[0],
            reviewsData: result.data.data[0],
            recommendData: recommendData,
            reviewsId: result.data.data[0].id
        }
    },
    head() {
        return {
            title: this.productItem.name + ' Review',
            
        }
    },
    data() {
        return {
            websiteTitle: '',
            productItem: {},
            reviewsData: {},
            recommendData: [],
            currentPage: 1,
            totalpage: 0, //总页数
            talksArr: [],
            username: '',
            email: '',
            content: '',
            score: 4
        }
    },
    methods: {
        execute() {
            window.execute();
        },
        async getReviewsData() {
            
            let id = this.$route.query.id;
            const productArr = await this.$axios.get('/data/product.json');
            
            const result = await this.$axios.get('https://api.vpncollection.com/review',{ params: {id: id}});
            
            const productItem = productArr.data.data.filter(item => {
                return item.keyname.toLocaleLowerCase() == result.data.data[0].keyname.toLocaleLowerCase()
            })
            
            const recommendData = productArr.data.data.slice(0,3);
           
            this.productItem = productItem[0];
            this.reviewsData = result.data.data[0];
            this.recommendData = recommendData;
            
        },
        /**
         *  替换 内容
         */
        replaceAll(content,searchText,replaceText) {
            while(content.indexOf(searchText) > -1) {
                content = content.replace(searchText,replaceText);
            }

            return content;
        },
        /**
         *  获取评论内容
         */
        async getTalks(currentPage) {
            let id = this.reviewsId;
            // this.$nuxt.$loading.start()
            let res = await this.$axios.get('https://api.vpncollection.com/reviewcommon',{params: {page: currentPage,id: id}});
            // this.$nuxt.$loading.finish();
            this.talksArr = res.data.data;
            // this.talksArr = this.talksArr.concat(res.data.data);
            this.totalpage = res.data.totalpage;
        },
        changScore(score,max) {

            return score / max * 5
        },
        /**
         *  转换 时间戳
         */
        changeDate(ctime) {
            let time = ctime * 1000;
            let monthArray = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec'];
            let date = new Date(time);
            let year = date.getFullYear();
            let month = monthArray[date.getMonth()];
            let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
            let result = `${month} ${day} ${year}`;
            return result;
        },
        /**
         * 滚动到相应位置
         */
        scrollTo(id) {
            let top = document.getElementById(id).offsetTop;
            window.scrollTo({
                top: top - 100,
                behavior: 'smooth'
            })
        },
        //阻止表单 默认事件
        onSubmit(){return false;},
        /**
         * 提交用户评论
         */
        submitInfo(reviewsId) {


            var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
            
            
            if ( !this.content || this.content.trim().length == 0) {
                
                this.$message({
                    type: 'error',
                    message: 'Please fill in the content!'
                })
            } else if (!this.username || this.username.trim().length == 0) {
                
                this.$message({
                    type: 'error',
                    message: 'Please fill in your name!'
                })
            } else if ( !this.email || this.email.trim().length == 0 ) {
                
                this.$message({
                    type: 'error',
                    message: 'Please fill in your email address!'
                })
            } else if (!reg.test(this.email.trim())) {

                this.$message({
                    type: 'error',
                    message: 'Please fill in the email correctly!'
                })

            } else {
                this.$nuxt.$loading.start();

                this.$axios.post('https://api.vpncollection.com/recomment',{
                    id: reviewsId,
                    content: this.content,
                    email: this.email,
                    username: this.username,
                    level: this.score
                })
                .then((res) => {
                    this.$nuxt.$loading.finish();

                    if (res.data.data === 'success') {

                         this.$message({
                            type: 'success',
                            message: 'Comment on success!'
                        })
                        
                    } else {

                        this.$message({
                            type: 'error',
                            message: 'Comment on failure!'
                        })
                    }

                    this.resetForm();
                })
                .catch((err) => {
                    this.$nuxt.$loading.finish();

                    this.$message({
                        type: 'error',
                        message: 'Comment on failure!'
                    })

                    this.resetForm();
                })
            } 
        },
        /**
         * 重置 表单
         */
        resetForm() {
            this.username = '';
            this.email = '';
            this.content = '';
            this.score = 4
        },
        /**
         * 固定侧边栏
         */

        fixedAside() {
            let quickNavContainer = document.getElementsByClassName('quick-nav')[0];
            let reviewsContainer = document.getElementsByClassName('reviews-container')[0]
            let right = reviewsContainer.offsetLeft;
            
            let navHeight = document.getElementsByTagName('header')[0].offsetHeight;
            
            let top = quickNavContainer.offsetTop;
            
            let scrollTop = document.documentElement.scrollTop;
            if (scrollTop >= top) {
                quickNavContainer.style.position = 'fixed';
                quickNavContainer.style.top = navHeight + 'px';
                quickNavContainer.style.right = right + 'px';
            } else {
                quickNavContainer.style.position = 'static';
                
            }

            window.addEventListener('scroll',function () {
                scrollTop = document.documentElement.scrollTop;
                if (scrollTop >= top) {
                    quickNavContainer.style.position = 'fixed';
                    quickNavContainer.style.top = navHeight + 'px';
                    quickNavContainer.style.right = right + 'px';
                } else {
                    quickNavContainer.style.position = 'static';
                    
                }
            })

        },
        /**
         * 格式化 返回的内容
         */
        format() {
            let div = document.querySelectorAll('.product-info-container .content div');
            let infoP = document.querySelectorAll('.product-info-container .content  p')
            for (let i = 0 ; i < div.length; i++) {
                div[i].style = {};
                div[i].align = '';
                div[i].style.fontSize = '16px'
            }

            for (let i = 0; i < infoP.length; i++) {
                infoP[i].style.marginTop = '15px';
                infoP[i].style.fontSize = 16 + 'px';
            }
            let p = document.querySelectorAll('.product-attributes .chapter-box p')
            
            for ( let i = 0; i < p.length; i++) {
                
                p[i].style.marginTop = '15px'
            }


            // 操作 所有内容区图片
            if (window.screen.width <= 750) {
                let imgArr = document.querySelectorAll('.product-attributes .chapter-box img');
                for (let i = 0; i < imgArr.length; i++) {
                    if (imgArr[i].getAttribute('data-custom') != 'newVpn') {
                        imgArr[i].style.width = '100%';
                        imgArr[i].style.height = 'auto';
                    }
                    
                }
            }
        }
    },
    watch: {
        $route() {
            this.format();
            this.getTalks(this.currentPage);
        }
    },
    mounted() {
        this.fixedAside();
        this.getTalks(this.currentPage);
        this.format();
        let loadMoreBtn = document.getElementsByClassName('more')[0];
        let that = this;
        loadMoreBtn.addEventListener('click',function () {
            that.currentPage ++;
            that.getTalks(that.currentPage);

            // 判断是否已经全部加载完成

            if (that.currentPage >= that.totalpage) {
                this.style.display = 'none';
            }
                
        })
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/reviews.scss'
</style>