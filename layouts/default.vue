<template>
  <div>
    <header>
      <div class="header-container">
        <img src="@/assets/image/website-logo.png" alt="Top VPN" class="website-logo">
        <span class="icon menu-icon"></span>
        <ul class="website_nav">
          <li>
            <nuxt-link :to="$i18n.path('')" >{{$t('header.home')}}</nuxt-link>
          </li>
          <li>
            <span class="text-title">
              <span class="text">{{$t('header.reviews')}}</span>
              <span class="icon"></span>
            </span>
            
            <ul class="reviews_nav_list">
              <li v-for="(item,index) in navList" :key="index">
                <nuxt-link :to="$i18n.path('reviews?id=' + item.keyname)" @click.native="hideList">{{item.name}} Review</nuxt-link>
              </li>
            </ul>
          </li>
          <li>
            <nuxt-link :to="$i18n.path('about')">{{$t('header.about')}}</nuxt-link>
          </li>
        </ul>
        <div class="language-box">
          <span class="language" @click="toggleLanguage"><span class="icon"></span>{{$t('header.language.title')}}</span>
          <ul class="language-list">
            <li v-if="$i18n.locale != 'en'">
              <nuxt-link :to="changePath('en')" @click.native="toggleLanguage">{{$t('header.language.en')}}</nuxt-link>
            </li>
            <li v-if="$i18n.locale != 'de'">
              <nuxt-link :to="changePath('de')" @click.native="toggleLanguage">{{$t('header.language.de')}}</nuxt-link>
            </li>
            <li v-if="$i18n.locale != 'fr'">
              <nuxt-link :to="changePath('fr')" @click.native="toggleLanguage">{{$t('header.language.fr')}}</nuxt-link>
            </li>
            <li v-if="$i18n.locale != 'es'">
              <nuxt-link :to="changePath('es')" @click.native="toggleLanguage">{{$t('header.language.es')}}</nuxt-link>
            </li>
            <li v-if="$i18n.locale != 'it'">
              <nuxt-link :to="changePath('it')" @click.native="toggleLanguage">{{$t('header.language.it')}}</nuxt-link>
            </li>
            
          </ul>
        </div>
      </div>
    </header>
    <main>
      <Nuxt />
      <!-- <Message :url="mainLink" /> -->
      <!-- <Nord2 :url="mainLink"/> -->
      <Message2 :url="mainLink" />
    </main>
    

    <footer>
      <div class="footer-container">
        <img src="@/assets/image/website-logo.png" alt="Top VPN" class="website-footer-logo">
        <div class="footer_right">
          <div class="footer_right_top">
            <dl class="quick_link_list">
              <dt>{{$t('footer.quickLink.title')}}:</dt>
              <dd>
                <nuxt-link :to="$i18n.path('about')">{{$t('footer.quickLink.about')}}</nuxt-link>
              </dd>
              <dd>
                <nuxt-link :to="$i18n.path('private')">{{$t('footer.quickLink.private')}}</nuxt-link>
              </dd>
              <dd>
                <nuxt-link :to="$i18n.path('terms')">{{$t('footer.quickLink.terms')}}</nuxt-link>
              </dd>
              <dd>
                <nuxt-link :to="$i18n.path('faqs')">{{$t('footer.quickLink.faq')}}</nuxt-link>
              </dd>
            </dl>
            <div class="form_box">
              <span class="contact_title">{{$t('footer.form.contact')}}:</span>
              <form class="contact_us_form" @submit.prevent="onSubmit">
                <div class="input-box">
                  <div class="form-left">
                    <label for="user">
                      <span class="icon user-icon"></span>
                      <input type="text" autocomplete="off" name="username" v-model="username" id="user" :placeholder="$t('footer.form.name')">
                    </label>
                    <label for="email">
                      <span class="icon email-icon"></span>
                      <input type="text" autocomplete="off" name="email" v-model="email" id="email" :placeholder="$t('footer.form.email')">
                    </label>
                  </div>
                  <textarea name="content" v-model="content" id="content" cols="30" rows="4" :placeholder="$t('footer.form.text')"></textarea>
                  
                </div>
                <button type="submit" class="submitBtn" @click="submitForm">{{$t('footer.form.submit')}}</button>
                
              </form>

            </div>

            
          </div>
          <p class="copyright">{{$t('footer.copyright')}}</p>
            <p class="desc">{{$t('footer.desc')}}</p>
        </div>
      </div>
    </footer>

  </div>
</template>
<script>
// import Nord2 from '~/components/nord2.vue'
import Message2 from '~/components/message2.vue'
  export default {
  components: { Message2 },
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
      toggleLanguage() {
        this.$nextTick(() => {
          $('.language-list').slideToggle('fast')
        })
      },
      changePath(locale) {
        let strArr = this.$route.fullPath.split('/');
        let flag = this.$store.state.locales.locales.includes(strArr[1]);

        if (flag && locale != strArr[1]) {
          return this.$route.fullPath.replace(/^\/[^\/]+/, '/' + locale)
        } else if (this.$route.fullPath == '' || this.$route.fullPath == '/') {
          return '/' + locale
        } else {
          return '/' + locale + this.$route.fullPath
        }
      },
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

          if (element.key == 'nordvpn') {

            element.link = `${basePath}${element.link}?msclkid=${msclkid}&keyword=${aff_sub}&TargetId=${aff_sub2}&CampaignId=b`
            
            this.mainLink = element.link;
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
