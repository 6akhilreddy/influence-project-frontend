export const environment = {
  production: true,
  baseUrl: 'http://localhost:5000',
  apiEndPoints: {
    brandSignIn: '/v1/signin/brand',
    brandSignUp: '/v1/signup/brand',
    influencerSignIn: '/v1/signin/influencer',
    influencerSignUp: '/v1/signup/influencer',
    getInfluencerProfile : '/v1/influencer/profile/',
    updateInfluencerProfile: '/v1/influencer/profile/update',
    getInfluencerStrategies:'/v1/getStrategies/influencer',
    getBrandProfile: '/v1/brand/profile/',
    updateBrandProfile: '/v1/brand/profile/update',
    createCampaign:'/v1/brand/campaign/create',
    getCampaignForbrand: '/v1/brand/campaign/',
    getAllCampaigns: '/v1/influencer/campaigns',
    getFilteredCampaigns: '/v1/influencer/campaigns/filtered/',
    applyCampaign: '/v1/influencer/campaign/apply',
    getApplications: '/v1/brand/campaign/applications/',
    acceptApplication:'/v1/brand/campaign/application/accept',
    rejectApplication:'/v1/brand/campaign/application/reject',
    getApplicationStatus: '/v1/influencer/application/status/',
    deleteCampaign: '/v1/brand/campaign/',
    trainCampaign: '/v1/campaign/train',
    wipeCampaign: '/v1/campaign/wipe',
    generateCSV: '/v1/campaign/generateCSV',
    getSuggestions: '/v1/brand/suggest/'
  }
};
