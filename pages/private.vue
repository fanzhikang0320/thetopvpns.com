<template>
  <div class="private-container">
      <div class="private-banner">
          <h1 class="private-title">Privacy Policy</h1>
      </div>
      <div class="private-content">
          <p>Welcome to Top VPN’s Privacy Policy. Please read this Privacy Policy carefully. If you use Top VPN (“our Site”), you will be regarded as having read and accepted this Privacy Policy. If you don’t wish to be bound by what you read below, you shouldn’t use our Site. Our Privacy Policy explains What information we collect and how we collect it How we use that information How to find out more about our policies This is a very important policy page and we hope you will read it carefully.</p>
          <h2>INFORMATION WE COLLECT</h2>
          <p>We do not ask you or anyone else to give us any personal information in order to use Top VPN. We do collect anonymised information to provide a better service to all our users – from improving our less popular pages to tracking the commissions that allow the site to operate as a free resource. The only instance when we do collect personal information – specifically, your name and email address - is if, and only if, you submit a review of one of the VPN providers listed on our Site via the review submission forms we host. We collect information in the following</p>
          <h2>User Testing</h2>
          <p>We occasionally ask our visitors to apply to take part in testing new features of our website. As part of the application, visitors will be asked to provide their email address via a submission form. Not all applications are successful and the email addresses submitted by all unsuccessful applicants will be purged once the recruitment phase is complete. If you have been selected to participate in one of our tests, we will only email you instructions on how to carry out the test(s), and the agreed reward once the test(s) has been adequately completed. Your email address will be stored securely until the testing period is over, at which point they will be purged. We may also ask if you would like to be contacted to participate in future tests. If you give us consent to do so, your email address will be added to our ‘User Testing’ email list.</p>
          <h2>Cookies and similar technologies</h2>
          <p>Like most websites, Top VPN puts small files (known as ‘cookies’) onto your computer to collect information about how you browse our Site. You can read our cookie policy for a detailed breakdown of the types of cookie we use and why we use them. Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you find useful and which you do not, and by allowing us to earn commissions. A cookie does not give us access to your computer or any information about you. You can choose to accept or decline cookies through your browser settings. Look at aboutcookies.org for detailed guidance about how to do this.</p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.private-container {
    .private-banner {
        height: 105px;
        font-size: 36px;
        text-align: center;
        line-height: 105px;
        background-color: #03213f;
        color: #fff;
    }

    .private-content {
        width: 1200px;
        line-height: 30px;
        margin: 30px auto 0px auto;

        h2 {
            margin-top: 30px;
            margin-bottom: 10px;
            font-size: 20px;
        }
    }

    @media screen and (max-width: 750px){
        .private-content {
            width: 100%;
            box-sizing: border-box;
            padding: 0 15px;
        }
    }
}
</style>