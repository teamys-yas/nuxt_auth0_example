import "dotenv/config";

export default {
  /*
   ** Headers of the page
   */
  head: {
    title: "Nuxt.js + Auth0",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "https://nuxtjs.org/favicon.ico",
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: ["normalize.css", "@/assets/main.css"],
  /*
   ** Modules
   */
  modules: [
    // axios is required by @nuxtjs/auth
    "@nuxtjs/axios",
    // https://auth.nuxtjs.org
    "@nuxtjs/auth",
  ],
  auth: {
    redirect: {
      login: "/", // redirect user when not connected
      callback: "/auth/signed-in",
    },
    strategies: {
      local: false,
      auth0: {
        domain: process.env.AUTH0_DOMAIN,
        client_id: process.env.AUTH0_CLIENT_ID,
      },
    },
  },

  // auth: {
  //   redirect: false,
  //   strategies: {
  //     auth0_admin: {
  //       scheme: '~/schemes/Auth0CustomScheme',
  //       domain: process.env.AUTH0_DOMAIN_ADMIN,
  //       clientId: process.env.AUTH0_CLIENT_ID_ADMIN,
  //       // audience: 'http://localhost:3000',
  //       // logoutRedirectUri: 'http://localhost:3000',
  //       endpoints: {
  //         authorization: `https://${process.env.AUTH0_DOMAIN_ADMIN}/authorize`,
  //         token: `https://${process.env.AUTH0_DOMAIN_ADMIN}/oauth/token`,
  //         logout: `https://${process.env.AUTH0_DOMAIN_ADMIN}/v2/logout`,
  //         userInfo: `${process.env.API_URL}/userinfo`
  //       },
  //       scope: ['openid', 'profile', 'email'],
  //       redirect: {
  //         login: '/yoriso/admin/', // 未ログイン時のリダイレクト先
  //         logout: '/yoriso/', // ログアウト処理を実行した直後のリダイレクト先
  //         callback: '/callback/', // コールバックURL
  //         home: '/yoriso/admin/' // ログイン後に遷移するページ
  //       }
  //     },
  //     auth0_moshu: {
  //       scheme: '~/schemes/Auth0CustomScheme',
  //       domain: process.env.AUTH0_DOMAIN_MOSHU,
  //       clientId: process.env.AUTH0_CLIENT_ID_MOSHU,
  //       // audience: 'http://localhost:3000',
  //       // logoutRedirectUri: 'http://localhost:3000',
  //       endpoints: {
  //         authorization: `https://${process.env.AUTH0_DOMAIN_MOSHU}/authorize`,
  //         token: `https://${process.env.AUTH0_DOMAIN_MOSHU}/oauth/token`,
  //         logout: `https://${process.env.AUTH0_DOMAIN_MOSHU}/v2/logout`,
  //         userInfo: `${process.env.API_URL}/userinfo`
  //       },
  //       scope: ['openid', 'profile', 'email'],
  //       redirect: {
  //         login: '/yoriso/moshu/', // 未ログイン時のリダイレクト先
  //         logout: '/yoriso/', // ログアウト処理を実行した直後のリダイレクト先
  //         callback: '/callback/', // コールバックURL
  //         home: '/yoriso/moshu/' // ログイン後に遷移するページ
  //       }
  //     }
  //   }
  // },

  build: {
    // For stormkit.io
    publicPath: process.env.PUBLIC_PATH,
  },
};
