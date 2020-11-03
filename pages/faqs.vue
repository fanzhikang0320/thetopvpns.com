<template>
  <div class="faq-wrapper">
      <div class="question_container">
        <div class="question_title_box">
            <img src="@/assets/image/duihua.svg" alt="Top-Vpn" class="icon_pic">
            <h2 class="question_title">Frequently Asked Questions</h2>
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
                    <span class="text">Useless</span>
                  </span>
                  <span class="text-container" v-else>
                    <span class="cry-icon icon"></span>
                    <span class="text">Uh......</span>
                  </span>
                </button>
                
                <button class="btn useful" @click="phoneChangeUsefull(index)">
                  <span class="text-container" v-if="item.usefull">
                    <span class="icon"></span>
                    <span class="text">Useful!</span>
                  </span>
                  
                  <span class="text-container" v-else>
                    <span class="smile-icon icon"></span>
                    <span class="text">Thanks!</span>
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
                <span class="text">Useless</span>
              </span>

              <span class="text-container" v-else>
                <span class="cry-icon icon"></span>
                <span class="text">Uh......</span>
              </span>
              
            </button>
            
            <button class="btn useful" @click="changeUsefull">
              <span class="text-container" v-if="isShowUsefull">
                <span class="icon"></span>
                <span class="text">Useful!</span>
              </span>
              
              <span class="text-container" v-else>
                <span class="smile-icon icon"></span>
                <span class="text">Thanks!</span>
              </span>
            </button>
          </div>
        </div>
      </div>
       </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            isShowUseless: true,
            isShowUsefull: true,
            currentIndex: 0,
            questionData: [],
            questionContent: ''
        }
    },
    methods: {

        async getQuestion() {
            const res = await this.$axios.get('/data/question.json');
            res.data.data.forEach(item => {
                item.useless = true;
                item.usefull = true;
            })
            this.questionData = res.data.data;
            this.cut(0);
        },
        cut(index) {
            this.questionContent =  this.questionData[index].content;
            this.isShowUseless = true;
            this.isShowUsefull = true;
            this.currentIndex = index;
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
    },
    mounted() {
        this.getQuestion();
    }
}
</script>

<style lang="scss" scoped>

    .question_container {
        .question_title_box {
            height: 214px;
            width: 100%;
            background-color: #D4EBFF;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .icon_pic {
                display: inline-block;
                width: 88px;
                height: 88px;
            }
            .question_title {
                font-size: 40px;
                color: #101010;
            }
        }

        .question_box {
            width: 1200px;

            margin: auto;
            margin-top: 55px;
            display: flex;
            justify-content: space-between;
            .question_list {
                li {
                    margin-bottom: 65px;
                    
                    .question_title {
                        font-size: 20px;
                        color: #353535;
                        cursor: pointer;
                        &.current {
                            color: #69A0D0;
                        }
                        .circle {
                            display: inline-block;
                            width: 12px;
                            height: 12px;
                            border-radius: 50%;
                            background-color: #2DA5CC;
                            vertical-align: middle;
                            margin-right: 20px;
                        }
                        .text {
                            vertical-align: middle;
                        }
                    }

                    .phone_show_question_content {
                        display: none;
                        width: 100%;
                        box-sizing: border-box;
                        border-radius: 5px;
                        padding: 10px 15px;
                        margin-top: 15px;
                        background-color: #ffffff;
                        box-shadow: 0px 10px 28px 0px #90C4FF;
                        .question_content {
                            line-height: 28px;
                        }
                        .isUseful_btn_box {
                            margin-top: 15px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            .btn {
                                width: 120px;
                                height: 44px;
                                border-radius: 12px;
                                outline: none;
                                color: #ffffff;
                                font-weight: bold;
                                border: none;
                                cursor: pointer;
                                .icon {
                                    display: inline-block;
                                    width: 18px;
                                    height: 18px;
                                    background-size: cover;
                                    background-repeat: no-repeat;
                                    background-position: center center;
                                }
                                &.useless {
                                    
                                    background-color: #BFC8CC;
                                    .icon {
                                        background-image: url('../assets/image/useless.svg')
                                    }
                                }
                                &.useful {
                                    margin-left: 18px;
                                    background-color: #36A6F9;

                                    .icon {
                                        background-image: url('../assets/image/useful.svg');
                                    }
                                }
                            }
                        }
                    }
                }
            }

            .show_question_content {
                position: relative;
                width: 654px;
                height: 400px;
                box-sizing: border-box;
                padding: 16px 20px;
                border-radius: 5px;
                background-color: #ffffff;
                box-shadow: 0px 10px 28px 0px #90C4FF;

                .question_content {
                    height: 310px;
                    line-height: 38px;
                    overflow-y: auto;
                }
                .isUseful_btn_box {
                    position: absolute;
                    bottom: 16px;
                    right: 20px;
                    display: flex;
                    align-items: center;
                    .btn {
                        width: 120px;
                        height: 44px;
                        border-radius: 12px;
                        outline: none;
                        color: #ffffff;
                        font-weight: bold;
                        border: none;
                        position: relative;
                        overflow: hidden;
                        cursor: pointer;
                        .icon {
                            display: inline-block;
                            width: 20px;

                            height: 20px;
                            margin-right: 5px;
                            background-size: cover;
                            background-position: center center;
                            background-repeat: no-repeat;
                        }
                        &.useless {

                            .icon {
                               
                                background-image: url('../assets/image/useless.svg');
                                
                                &.cry-icon {
                                    background-image: url('../assets/image/cry.svg');
        
                                }
        
                            }
                            background-color: #BFC8CC;
                        }
                        &.useful {
                            
                            margin-left: 18px;
                            background-color: #36A6F9;

                            .icon {
                                background-image: url('../assets/image/useful.svg');
                            
                                &.smile-icon {
                                    background-image: url('../assets/image/smile.svg');
                                }
                            }
                        }

                        
                        .text-container {
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            left: 50%;
                            top:50%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            transform: translate(-50%,-50%);
                            z-index: 1;

                        }

                        &::after {
                            content: '';
                            transition: all linear 0.15s;
                            position: absolute;
                            background-color: rgba(0,0,0,0);
                            left: 50%;
                            width: 0;
                            height: 100%;
                            border-radius: 12px;
                            transform: translate(-50%,-50%);
                            top: 50%;
                            background-color: rgba(0,0,0,.1);
                        }

                        &:hover {
                            &::after {

                                width: 100%;
                            }
                        }
                    }
                }
            }
        }
    }

    /*
    * 屏幕尺寸 <= 750px
    */

    .question_container {

        @media screen and (max-width:750px){
            
            .question_title_box {
                height: 150px;
                .icon_pic { 
                    height: 62px;
                    width: 62px;
                }
                .question_title { 
                    font-size: 24px;
                }
            }

            .question_box {
                width: 100%;
                box-sizing: border-box;
                padding: 0 15px;

                .question_list {
                    li {
                        .question_title {
                            color: #69A0D0;
                        }
                        .phone_show_question_content {
                            display: block;
                        }
                    }
                }
                .show_question_content {
                    display: none;
                }
            }
        }
    }
</style>