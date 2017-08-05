export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    cognito: {
        USER_POOL_ID: "us-west-2_0TnEaCnSV",
        APP_CLIENT_ID: "2p6jh34fp9qvmvqi1mtuaipsrt",
        REGION: "us-west-2",
        IDENTITY_POOL_ID: 'us-west-2:7c8df600-fbb0-4a11-ba82-22f52c47e91a',
    },
    s3: {
        BUCKET: 'qm-notes-app-uploads'
    },
    apiGateWay:{
        URL:"https://vhoemodqoj.execute-api.us-west-2.amazonaws.com/prod",
        REGION:"us-west-2",
    }
};