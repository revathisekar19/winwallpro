export const GlobalComponent = {
    API_URL: 'https://api-node.themesbrand.website/',
    headerToken: { 'Authorization': `Bearer ${sessionStorage.getItem('token')}` },

    AUTH_API: "profile/token",

    users: {
        getUsers: 'profile/all',
        addUsers: 'profile/business/create',
        delusers: 'profile/business/lock',
        resetPassword: 'profile/password/reset'
    },

    dashboard: {
        allEvents: 'dashboard/events/all',
        getEvent: 'dashboard/events/',
        addEvent: 'dashboard/events'
    },

    facade: {
        getProjects: 'dashboard/projects/get',
        getChambers: 'dashboard/projects/chamber/get',
        addProjects: 'dashboard/projects/facade/inlab/create',
        updateProjects: 'dashboard/projects/facade/inlab/update'
    },

    reqHeader: {
        source: "web",
        version: "1.0.0"
    },

    // Products Api
    product: 'apps/product',
    productDelete: 'apps/product/',

    // Orders Api
    order: 'apps/order',
    orderId: 'apps/order/',

    // Customers Api
    customer: 'apps/customer',
}