<template>
  <div class="message-box">
        <div class="message-container">
            <span class="close-message"></span>
            <a :href="url" @click="execute" target="_blank" rel="noopener noreferrer nofollow">
                <img src="@/assets/image/ULTRA-message.jpg" class="message-img" alt="UltraVPN"/>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        url: {
            type: String,
            required: true
        },
        delay: {
            type: Number,
            default: 20000
        }
    },
    data() {
        return {
            timer: null,
            timer2: null,
            count: 0
        }
    },
    methods: {
        execute() {
            window.execute();
        },
        openMessage() {
            $('.message-box').css({
            display: 'block'
            }).animate({
            opacity: 1
            },300,function () {
            $('.message-box .message-container').animate({
                top: '50%',
                opacity: 1
            })
            })


        },
        closeMessage() {
            $('.message-box .message-container').animate({
            top: '-100%',
            opacity: 0
            },400,function () {
            $('.message-box').css({
                display: 'none',
                opacity: 0
            })
            })
        },
    },
    mounted() {
        let that = this;
        this.timer = setTimeout(() => {
            
            $('body').on('mouseenter',function () {

                $('body').one('mouseleave',function () {
            
                    if (that.count == 0) {
                        that.openMessage();
                    }
                    
                    that.count ++;
                })
            })
        },this.delay)

        
        if (window.screen.width <= 750) {
            this.timer2 = setTimeout(() => {
                this.openMessage();
            },this.delay)
        }
        
        $('.message-box .close-message').on('click',function () {
            that.closeMessage();
        })
    },
    destroyed() {
      clearTimeout(this.timer);
      clearTimeout(this.timer2);
    }
}
</script>

<style lang="scss" scoped>
.message-box {
    display: none;
    opacity: 0;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.8);

    .message-container {
    // display: none;
    opacity: 0;
    position: absolute;
    left: 50%;
    top: -100%;
    transform: translate(-50%,-50%);

    .close-message {
        
        position: absolute;
        right: -40px;
        top: -40px;
        width: 30px;
        height: 30px;
        cursor: pointer;
        background-image: url('../assets/image/cha.svg');
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;

    }
    .message-img {
        position: relative;
        width: 650px;
        left: 0;
        top: 0;
    }
    .btn {
        position: absolute;
        right: 33px;
        bottom: 40px;
        
        width: 265px;
        height: 50px;
        font-size: 22px;
        font-weight: bold;
        line-height: 50px;
        outline: none;
        border: none;
        text-align: center;
        color: #ffffff;
        background-color: rgb(245,79,100);
        border-radius: 30px;
        text-decoration: none;
        transition: all linear 0.1s;
        cursor: pointer;
        &:hover {
        background-color: #da4255;
        }
    }
    }
}
.message-box {
    @media screen and (max-width: 750px) {
        
        .message-container {
            .close-message {
            right: 0;
            }
            .message-img {
            width: 370px;
            }
            
            .btn {
            width: 206px;
            height: 30px;
            line-height: 30px;
            font-size: 16px;
            }
        }
      
    }
}
</style>