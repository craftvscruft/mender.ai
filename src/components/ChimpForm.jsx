import React from "react";
const ChimpForm = () => {
    const chimpForm =  `
    <div id="get-updates"></div>
    <!-- Begin Mailchimp Signup Form -->
  <link href="//cdn-images.mailchimp.com/embedcode/classic-071822.css" rel="stylesheet" type="text/css">
  <style type="text/css">
      #mc_embed_signup{
        /*background:#fff; */
        /* clear:left; */
        /*font:14px Helvetica,Arial,sans-serif;*/
        width:500px;
    }
    .indicates-required {
        display: none;
    }
    #mc_embed_signup .mc-field-group .helper_text {
        color: inherit;
        background-color: inherit;
    }
      /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
         We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
  </style>
  <div id="mc_embed_signup" class="container" >
      <form action="https://gmail.us9.list-manage.com/subscribe/post?u=07e8960fe7ac2cffae7d2f5d7&amp;id=f1d2616308&amp;f_id=009c1be1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_self">
          <div id="mc_embed_signup_scroll">
          <h2>Can we write to you?</h2>
          <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
  <div class="mc-field-group">
      <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
  </label>
      <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" required>
      <span id="mce-EMAIL-HELPERTEXT" class="helper_text">We won't bug you too often!</span>
  </div>
  <div class="mc-field-group">
      <label for="mce-FNAME">First Name </label>
      <input type="text" value="" name="FNAME" class="" id="mce-FNAME">
      <span id="mce-FNAME-HELPERTEXT" class="helper_text"></span>
  </div>
      <div id="mce-responses" class="clear foot">
          <div class="response" id="mce-error-response" style="display:none"></div>
          <div class="response" id="mce-success-response" style="display:none"></div>
      </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
      <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_07e8960fe7ac2cffae7d2f5d7_f1d2616308" tabindex="-1" value=""></div>
          <div class="optionalParent">
              <div class="clear foot">
                  <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
                  <p class="brandingLogo"><a href="http://eepurl.com/ioHEks" title="Mailchimp - email marketing made easy and fun"><img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"></a></p>
              </div>
          </div>
      </div>
  </form>
  </div>
  
  <!--End mc_embed_signup-->
    `;
    return <div dangerouslySetInnerHTML={{__html: chimpForm}}></div>
  }
export default ChimpForm;