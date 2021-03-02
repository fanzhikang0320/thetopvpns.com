<template>
  <div class="alert-wrapper">
      <div class="alert-content">
          <span class="close" @click="closeAlert">No thanks</span>
          <div class="link-box">
            <div class="content">
                <img src="@/assets/image/nord-message.jpg" alt="nord-vpn">

                <a :href="url" class="button" target="_blank" rel="noopener noreferrer nofollow">Get NordVPN</a>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    
    props: ['url'],
    data: () => {
        return {
            timer: null,
            timer2: null,
            count: 0
        }
    },
    methods: {
        showAlert() {
                $('.alert-wrapper').css({
                    display: 'block'
                    
                }).animate({
                    opacity: 1
                },200)
                $('.alert-content').animate({
                    top: '50%',
                    opacity: 1
                },400)
        },
        closeAlert() {
            this.$nextTick(() => {
                $('.alert-content').animate({
                    top: '40%',
                    opacity: 0
                },400,function () {
                    
                })
                $('.alert-wrapper').animate({
                    opacity: 0
                },500,function () {
                    $(this).css({
                        display: 'none'
                    })
                })
                
                
            })
        }
    },
    mounted() {
        $('body').on('click',() => {
            this.closeAlert();
        })
        this.timer2 = setTimeout(() => {
            $('body').on('mouseenter',() => {
                $('body').one('mouseleave',() => {
                    if (this.count == 0) {
                        this.showAlert();
                    }
                    this.count ++;
                })
            })
        },25000)
        
    },
    destroyed() {
        clearInterval(this.timer);
        clearTimeout(this.timer2)
    }
}
</script>
<style lang="scss" scoped>
.alert-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.55);
    display:none;
    opacity: 0;
    .alert-content {
        width: 800px;
        height: 457px;
        position: absolute;
        left: 50%;
        top: 30%;
        transform: translate(-50%,-50%);
        
        opacity: 0;
        .close {
            position: absolute;
            bottom: 15px;
            left: 50%;
            transform: translateX(-50%);
            color: #57c6ff;
            cursor: pointer;
            font-size: 14px;
            text-decoration-line: underline;
            z-index: 3;

            &:hover {
                color: #ffffff;
                text-decoration-color:#ffffff ;
            }
        }
        .link-box {
            // position: absolute;
            bottom: 0;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            // border-radius: 6px;
            text-decoration: none;
            .content {
                width: 100%;
                height: 100%;
                display: flex;
                box-sizing: border-box;
                img {
                    width: 100%;
                    border-radius: 5px;
                }

                .button {
                    position: absolute;
                    bottom: 45px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 300px;
                    height: 48px;
                    border-radius: 30px;
                    text-align: center;
                    line-height: 48px;
                    color: #ffffff;
                    font-size: 28px;
                    font-weight: bold;
                    background-image: linear-gradient(61deg,#09bbfe,#5a42ec);
                    text-decoration: none;
                    cursor: pointer;
                    &:hover {
                        color: #dddddd;
                    }
                }
            }
        }
        
    }
}
</style>