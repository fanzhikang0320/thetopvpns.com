<template>
  <div class="alert-wrapper">
      <div class="alert-content">
          <span class="close" @click="closeAlert">

          </span>
          <div class="link-box">
              <div class="corner">
                  <span class="text">Limited time offer</span>
              </div>
              <div class="img-box">
                  <img src="@/assets/image/nord2-logo.png" alt="NordVPN" class="logo">
                  <img src="@/assets/image/nord2-pic.png" alt="NordVPN" class="pic">
                  <!-- <span class="small">4.3 out of 5.0</span> -->
              </div>
              <div class="content-box">
                  <p class="title">For TopVPN users only</p>
                  <strong class="big-text">68% OFF</strong>
                  <div class="time-box">
                      <div class="time-item hours">
                          <span class="value">00</span>
                          <span class="text">HOURS</span>
                        </div>
                      <div class="time-item minutes">
                        <span class="value">00</span>
                            <span class="text">MINTUES</span>
                        </div>
                      <div class="time-item seconds">
                        <span class="value">00</span>
                            <span class="text">SECONDS</span>
                        </div>
                  </div>

                  <a href="https://go.nordvpn.net/aff_c?offer_id=328&aff_id=48575&source=popup" target="_blank" rel="noopener noreferrer nofollow" class="btn">Claim the discount</a>
                  <p class="small-text">30-day money back guarantee</p>
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
            timer3: null,
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
        },
        countDown() {

            // 从昨天 凌晨到36 小时之后活动结束
            let finishTime = new Date(new Date('2021/3/9').toLocaleDateString()).getTime() + 36 * 60 * 60 * 1000;
            
            let intervalTime = 0,
                hours = 0,
                day = 0,
                minutes = 0,
                seconds = 0;
            let that = this;
            this.timer3 = setInterval(() => {
                if (finishTime - new Date().getTime() <= 0) {
                    finishTime = finishTime + 36 * 60 * 60 * 1000;
                }
                intervalTime = finishTime - new Date().getTime();
                
                day = Math.floor(intervalTime / (1000 * 60 * 60 * 24));
                hours = Math.floor(intervalTime / (60 * 60 * 1000) % 24) + day * 24;
                minutes = Math.floor(intervalTime / (60 * 1000) % 60);
                seconds = Math.floor(intervalTime / 1000 % 60);
                that.renderTime(hours,minutes,seconds);
            },1000)
        },
        renderTime(hours,minutes,seconds) {
            // console.log('hours: ' + hours + ' minutes: ' + minutes + ' seconds: ' + seconds);
            let nowHours = hours < 10 ? '0' + hours : hours;
            let nowMinutes = minutes  < 10 ? '0' + minutes : minutes;
            let nowSeconds = seconds < 10 ? '0' + seconds : seconds;
            $('.time-box .hours .value').text(nowHours)
            $('.time-box .minutes .value').text(nowMinutes);
            $('.time-box .seconds .value').text(nowSeconds);
        }
    },
    mounted() {
        this.countDown();
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
        },20000)
        
    },
    destroyed() {
        clearInterval(this.timer);
        clearTimeout(this.timer2);
        clearInterval(this.timer3);
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
        height: 500px;
        position: absolute;
        left: 50%;
        top: 30%;
        transform: translate(-50%,-50%);
        background-color: #ffffff;
        border-radius: 24px;
        border: 8px solid #4687ff;
        overflow: hidden;
        opacity: 0;
        .close {
            position: absolute;
            right: 20px;
            top: 20px;
            width: 30px;
            height: 30px;
            cursor: pointer;
            z-index: 1;
            &::after,&::before {
                position: absolute;
                content: '';
                left: 50%;
                top: 50%;
                width: 30px;
                height: 4px;
                background-color: #2c3035;

            }
            &::after {
                transform: translate(-50%,-50%) rotateZ(45deg);
            }
            &::before {
                transform: translate(-50%,-50%) rotateZ(-45deg);
            }
        }
        .link-box {
            position: relative;
            bottom: 0;
            display: flex;
            align-items: center;
            width: 100%;
            height: 100%;
            padding: 0 80px;
            
            box-sizing: border-box;
            
            .corner {
                position: absolute;
                left: 0;
                top: 30px;
                width: 262px;
                height: 42px;
                line-height: 42px;
                color: #ffffff;
                font-size: 18px;
                background-color: #2a30a0;
                .text {
                    margin-left: 40px;
                }
                &::after {
                    position: absolute;
                    right: 0;
                    top: 0;
                    content: '';

                    width: 0;
                    height: 0;
                    border-top: 21px solid transparent;
                    border-bottom: 21px solid transparent;
                    border-right: 21px solid #fff;
                    border-left: 21px solid transparent;
                }
            }

            .img-box {
                flex: 1;
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-right: 60px;
                margin-top: 52px;
                .logo {
                    display: block;
                    width: 202px;
                    height: 180px;
                }
                .pic {

                    width: 120px;
                    margin-top: 40px;
                    margin-bottom: 10px;
                }
                .small {
                    font-size: 18px;
                    font-family: 'Montserrat-light';
                }
            }
            .content-box {
                flex: 1;
                display: flex;
                flex-direction: column;
                align-items: center;
                .title {
                    font-size: 30px;
                    font-family: 'Montserrat-bold';
                    color: #595959;
                }
                .big-text {
                    font-family: 'Montserrat-bold';
                    font-size: 76px;
                    margin-top: 10px;
                    margin-bottom: 20px;
                    line-height: 95px;
                    color: #f64f64;
                }

                .time-box {
                    display: flex;
                    align-items: center;
                    .time-item {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        width: 112px;
                        height: 112px;
                        box-shadow: 0px 2px 4px 0px rgba(0,0,0,.25);

                        .value {
                            font-size: 50px;
                            color: #595959;
                            font-family: 'Montserrat-bold';
                        }
                        .text {
                            font-size: 14px;
                            color: #595959;
                        }

                        &.minutes {
                            margin: 0 10px;
                        }
                    }

                }
                .btn {
                    display: block;
                    width: 357px;
                    height: 64px;
                    margin-top: 40px;
                    margin-bottom: 10px;
                    background-color: #f64f64;
                    color: #fff;
                    font-size: 20px;
                    text-align: center;
                    line-height: 64px;
                    border-radius: 6px;
                    text-decoration: none;
                    transition: all linear 0.1s;
                    &:hover {
                        background-color: #d64558;
                    }
                }
                .small-text {
                    font-size: 15px;
                    color: #595959;
                    font-family: 'Montserrat-light';
                }
            }

        }
        
    }
}
</style>