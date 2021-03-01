<template>
  <div class="about-wrapper">
    <div class="about-banner-container">
        <h1 class="website-title">About US</h1>
        <p>Top VPN Information</p>
    </div>
    <div class="about-content">
        <h2 class="content-title">Supporting Advocacy Campaigns</h2>
        <div class="content">
            <p>The world is growing increasingly hostile to online privacy. As governments and corporations invade our online lives and limit our access to the web, more of us are coming to a decision about the need to protect our privacy. For a long time, we’ve been forced to navigate this decision without a whole lot of clarity. Top VPN set out to change that in 2019. Our in-depth VPN reviews, independent research, and expert advice are there to help fight for an open internet, raise industry standards, and guide you towards a simpler and safer experience online.</p>
            <img src="@/assets/image/about-content-1.jpg" alt="Top VPN">
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.about-wrapper {
    .about-banner-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 200px;
        color: #ffffff;
        background-image: linear-gradient(to right, rgb(121, 186, 222), rgb(37, 71, 182));
        .website-title {
            font-size: 50px;
        }

        
    }
    .about-content {
        width: 1200px;
        margin: auto;
        line-height: 30px;
        .content-title {
            margin-top: 20px;
            font-size: 25px;
            margin-bottom: 20px;
        }
        img {
            margin-top: 20px;
            width: 800px;
        }
    }
}

.about-wrapper {
    @media screen and (max-width:750px){
        
        .about-content {
            width: 100%;
            box-sizing: border-box;
            padding: 0 15px;
            .content-title {
                font-size: 22px;
            }
            img {
                width: 100%;
            }
        }
    }
}
</style>