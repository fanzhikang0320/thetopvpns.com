<template>
  <div>
    <header>
      <div class="header-container">
        <img src="@/assets/image/website-logo.png" alt="Top VPN" class="website-logo">
        <span class="icon menu-icon"></span>
        <ul class="website_nav">
          <li>
            <nuxt-link to="/" >Top VPN</nuxt-link>
          </li>
          <li>
            <span class="text-title">
              <span class="text">VPN Reviews</span>
              <span class="icon"></span>
            </span>
            
            <ul class="reviews_nav_list">
              <li v-for="(item,index) in navList" :key="index">
                <nuxt-link :to="{name: 'reviews-id',query: {id: item.keyname}}" @click.native="hideList">{{item.name}} Review</nuxt-link>
              </li>
            </ul>
          </li>
          <li>
            <nuxt-link to="/about">About us</nuxt-link>
          </li>
        </ul>
      </div>
    </header>
    <main>
      <Nuxt />
      <Message :url="mainLink" />
      
    </main>
    

    <footer>
      <div class="footer-container">
        <img src="@/assets/image/website-logo.png" alt="Top VPN" class="website-footer-logo">
        <div class="footer_right">
          <div class="footer_right_top">
            <dl class="quick_link_list">
              <dt>Quick link:</dt>
              <dd>
                <nuxt-link to="/about">About us</nuxt-link>
              </dd>
              <dd>
                <nuxt-link to="/private">Private Policy</nuxt-link>
              </dd>
              <dd>
                <nuxt-link to="/terms">Terms of Use</nuxt-link>
              </dd>
              <dd>
                <nuxt-link to="/faqs">FAQS</nuxt-link>
              </dd>
            </dl>
            <div class="form_box">
              <span class="contact_title">Contact Us:</span>
              <form class="contact_us_form" @submit.prevent="onSubmit">
                <div class="input-box">
                  <div class="form-left">
                    <label for="user">
                      <span class="icon user-icon"></span>
                      <input type="text" name="username" v-model="username" id="user" placeholder="Name">
                    </label>
                    <label for="email">
                      <span class="icon email-icon"></span>
                      <input type="text" name="email" v-model="email" id="email" placeholder="Email">
                    </label>
                  </div>
                  <textarea name="content" v-model="content" id="content" cols="30" rows="4" placeholder="Input your text here......"></textarea>
                  
                </div>
                <button type="submit" class="submitBtn" @click="submitForm">Submit</button>
                
              </form>

            </div>

            
          </div>
          <p class="copyright">Copyright © 2009-2021 Westwin Technologies Co. Ltd. All Rights Reserved.</p>
            <p class="desc">By using our content, products & services you agree to our Terms of Service and Privacy Policy</p>
        </div>
      </div>
    </footer>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        mainLink: '',
        navList: [],
        email: '',
        content: '',
        username: '',
        timer: null,
        timer2: null,
        count: 0
      }
    },
    methods: {
      
      async getLink() {
        let aff_sub = this.$route.query['utm_term'],
              aff_sub2 = this.$route.query['TargetId'],
              aff_sub3 = this.$route.query['loc'],
              msclkid = this.$route.query['msclkid'],
              gclid = this.$route.query['gclid'],
              aff_sub4 = Math.floor(new Date().getTime() / 1000),
              // aff_sub5 = key + '_homepage',
              basePath = '/jump?url=';

        const res = await this.$axios.$get('/data/product.json');

        res.data.forEach(element => {
          if (element.key == 'ultravpn') {

            if (typeof gclid != 'undefined') {
              element.link = `${basePath}https://hotsale.featuredproduct.news/576399e9-4511-4ff2-9344-df0b19cd1124?msclkid=${msclkid}&keyword=${aff_sub}&TargetId=${aff_sub2}&CampaignId=g`
            } else if (typeof msclkid != 'undefined') {
              element.link = `${basePath}${element.link}?msclkid=${msclkid}&keyword=${aff_sub}&TargetId=${aff_sub2}&CampaignId=b`
            }

            this.mainLink = `${basePath}${element.link}`;
          }
        })

        
      },
      async getNav() {
        let res = await this.$axios.get('/data/product.json');
        let productArr = res.data.data.filter(item => {
          return item.keyname != '';
        })

        this.navList = productArr;

      },
      resetForm() {
        this.email = '';
        this.content = '';
        this.username = '';
      },
      //阻止表单 默认事件
      onSubmit(){return false;},
      submitForm() {
        const reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
        if (!this.username || this.username.trim().length == 0) {
          window.alert('Please fill in your name!')
        } else if (!this.email || this.email.trim().length == 0) {
          window.alert('Please fill in your email address!')
        } else if (!reg.test(this.email.trim())) {
          window.alert('Please fill in the email correctly!')
        } else if (!this.content || this.content.trim().length == 0) {
          window.alert('Please fill in the content!')
        } else {
          this.$nuxt.$loading.start();

          this.$axios.post('https://api.vpncollection.com/admin/email',{params: {
            username: this.username,
            email: this.email,
            content: this.content
          }})
            .then((res) => {

              this.$nuxt.$loading.finish();

              if (res.status == 200) {
                
                this.$message({
                  type: 'success',
                  message: 'Submit successfully!'
                })
              } else {
                  this.$message({
                    type: 'error',
                    message: 'Fail to send, please refresh and try again!'
                  })
              }

              this.resetForm();
            }).catch((err) => {

              this.$nuxt.$loading.finish();

              this.$message({
                  type: 'error',
                  message: 'Fail to send, please refresh and try again!'
                })

              this.resetForm();
            })
        }
      },
      hideList() {
        $('.website_nav li .text-title').toggleClass('clickme');
          $('header .reviews_nav_list').slideToggle('fast');
      }
      
    },
    created() {
      
      this.getNav();
      this.getLink();
    },
    mounted() {
 
     $('header .menu-icon').on('click',function () {
       $(this).toggleClass('click-menu-icon');

       $('header .reviews_nav_list').css({
         display: 'none'
       })

       $('header .website_nav').slideToggle('fast');
     })

      $('.website_nav li .text-title').on('click',function () {
        
        $(this).toggleClass('clickme');
        $('.website_nav .reviews_nav_list').slideToggle('fast')
        
      })
    
    
    }
    
  }
</script>
<style lang="scss">

@import '../assets/css/default.scss'

</style>
