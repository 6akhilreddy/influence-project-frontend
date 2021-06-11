export const environment = {
  production: false,
  baseUrl: 'http://localhost:5000',
  apiEndPoints: {
    brandSignIn: '/v1/signin/brand',
    brandSignUp: '/v1/signup/brand',
    influencerSignIn: '/v1/signin/influencer',
    influencerSignUp: '/v1/signup/influencer',
    getInfluencerProfile : '/v1/influencer/profile/',
    updateInfluencerProfile: '/v1/influencer/profile/update'
  }
};
