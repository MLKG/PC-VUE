<template>
  <nav class="top-nav">
    <div class="top-nav_container">
      <ul class="top-nav_ul">
        <li>
          <router-link to="" class="top-nav_item top-nav_logo"></router-link>
        </li>
        <li>
          <router-link to="" class="top-nav_item top-nav_mac"></router-link>
        </li>
        <li>
          <router-link to="" class="top-nav_item top-nav_ipad"></router-link>
        </li>
        <li>
          <router-link to="" class="top-nav_item top-nav_iphone"></router-link>
        </li>
        <li>
          <router-link to="" class="top-nav_item top-nav_watch"></router-link>
        </li>
        <li>
          <router-link to="" class="top-nav_item top-nav_tv"></router-link>
        </li>
        <li>
          <router-link to="" class="top-nav_item top-nav_music"></router-link>
        </li>
        <li>
          <router-link to="" class="top-nav_item top-nav_support"></router-link>
        </li>
        <li>
          <router-link to="" class="top-nav_item top-nav_search"></router-link>
        </li>
        <li>
          <router-link to="" class="top-nav_item top-nav_store"></router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'TopNav'
  }
</script>

<style lang="less" scoped>
  @import '../../assets/less/variables';

  .top-nav {
    margin: 0;
    width: 100%;
    height: 44px;
    background: rgba(0,0,0,0.8);
    user-select: none;

    &_container {
      margin: 0 auto;
      max-width: 980px;
      padding: 0 11px;
      height: 100%;
    }

    &_ul {
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: @color-white;
    }

    &_item {
      height: 44px;
      display: inline-block;
      line-height: 44px;
      padding: 0 10px;
      background-size: 20px 44px;
      background-repeat: no-repeat;
      background-position: center center;
    }

    &_logo {
      background-image: url('https://www.apple.com/ac/globalnav/3/en_US/images/globalnav/apple/image_large.svg');
      width: 20px;
    }

    &_mac {
      background-image: url('https://www.apple.com/ac/globalnav/3/en_US/images/globalnav/links/mac/image_large.svg');
      background-origin: content-box;
      background-size: cover;
      width: 20px;
      max-width: 47.6px;
    }

    &_ipad {
      background-image: url('https://www.apple.com/ac/globalnav/3/en_US/images/globalnav/links/ipad/image_large.svg');
      background-origin: content-box;
      background-size: cover;
      width: 20px;
      max-width: 47.6px;
    }

    &_iphone {
      background-image: url('https://www.apple.com/ac/globalnav/3/en_US/images/globalnav/links/iphone/image_large.svg');
      background-origin: content-box;
      background-size: cover;
      width: 35px;
      max-width: 47.6px;
    }

    &_watch {
      background-image: url('https://www.apple.com/ac/globalnav/3/en_US/images/globalnav/links/watch/image_large.svg');
      background-origin: content-box;
      background-size: cover;
      width: 35px;
      max-width: 47.6px;
    }

    &_tv {
      background-image: url('https://www.apple.com/ac/globalnav/3/en_US/images/globalnav/links/tv/image_large.svg');
      background-origin: content-box;
      background-size: cover;
      width: 20px;
      max-width: 47.6px;
    }

    &_music {
      background-image: url('https://www.apple.com/ac/globalnav/3/en_US/images/globalnav/links/music/image_large.svg');
      background-origin: content-box;
      background-size: cover;
      width: 35px;
      max-width: 47.6px;
    }

    &_support {
      background-image: url('https://www.apple.com/ac/globalnav/3/en_US/images/globalnav/links/support/image_large.svg');
      background-origin: content-box;
      background-size: cover;
      width: 35px;
      max-width: 47.6px;
    }

    &_search {
      background-image: url('https://www.apple.com/ac/globalnav/3/en_US/images/globalnav/search/image_large.svg');
      width: 20px;
    }

    &_store {
      background-image: url('https://www.apple.com/ac/globalnav/3/en_US/images/globalnav/bag/image_large.svg');
      width: 20px;
    }
  }
</style>
