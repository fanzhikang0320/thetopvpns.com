<template>
  <div class="alert-wrapper">
      <div class="alert-content">
          <span class="close" @click="closeAlert"></span>
          <div class="link-box">
            <div class="content-box left-box">
                <img src="@/assets/image/surfshark-logo-msg.png" alt="Surfshark" class="logo">
                <img src="@/assets/image/surfshark-pic-msg.png" alt="Surfshark" class="pic">
                <img src="" alt="Surfshark" class="desc">
                <a href="http://" target="_blank" rel="noopener noreferre nofollow" class="btn">Save Now</a>
                <div class="circle-box">
                    <span><span class="big">80</span><span class="small">%</span></span>
                    <span class="big">OFF</span>
                </div>
            </div>
            <div class="content-box right-box">
                <img src="@/assets/image/surfshark-logo-msg.png" alt="NordVPN" class="logo">
                <img src="@/assets/image/nord-pic-msg.png" alt="NordVPN" class="pic">
                <img src="" alt="NordVPN" class="desc">
                <a href="http://" target="_blank" rel="noopener noreferre nofollow" class="btn">Save Now</a>
                <div class="circle-box">
                    <span><span class="big">80</span><span class="small">%</span></span>
                    <span class="big">OFF</span>
                </div>
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
        height: 500px;
        position: absolute;
        left: 50%;
        top: 30%;
        transform: translate(-50%,-50%);
        
        opacity: 0;
        .close {
            position: absolute;
            top: 21px;
            right: 21px;
            width: 30px;
            height: 30px;
            cursor: pointer;
            z-index: 1;
            &::after, &::before {
                content: '';
                position: absolute;
                left: 50%;
                top: 50%;
                width: 30px;
                height: 4px;
                background-color: rgb(155,157,198);
            }

            &::after {
                transform: translate(-50%,-50%) rotateZ(-45deg);
            }
            &::before {
                transform: translate(-50%,-50%) rotateZ(45deg);
            }
            
        }
        .link-box {
            display: flex;
            
            width: 100%;
            height: 100%;
            border-radius: 24px;
            overflow: hidden;
            box-sizing: border-box;
            text-decoration: none;
            
            .content-box {
                position: relative;
                flex: 1;
                flex-shrink: 0;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                &.left-box {
                    background-color: #eeeeee;
                }
                &.right-box {
                    background-color: #1b1e7d;
                }

                .circle-box {
                    position: absolute;
                    top: 50%;
                    right: 30px;
                    transform: translateY(-50%);
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    width: 120px;
                    height: 120px;
                    color: #fff;
                    background-color: #c42b33;
                    border-radius: 50%;
                    
                    text-align: center;
                    span {
                        line-height: 35px;
                    }
                    .big {
                        font-size: 45px;
                        font-family: 'Montserrat-bold';

                    }
                    .small {
                        font-size: 15px;
                    }
                }

                .pic {
                    margin: 31px 0 41px 0;
                }
                .btn {
                    display: block;
                    width: 220px;
                    height: 50px;
                    margin-top: 21px;
                    color: #fff;
                    font-size: 20px;
                    font-family: 'Montserrat-bold';
                    line-height: 50px;
                    text-align: center;
                    border-radius: 6px;
                    background-color: #f64f64;
                    text-decoration: none;
                    transition: all linear 0.1s;
                    &:hover {
                        background-color: #d14356;
                    }
                }
            }
        }
        
    }
}
</style>