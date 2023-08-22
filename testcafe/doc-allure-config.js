const DOC_ALLURE_CONFIG = {
    CLEAN_REPORT_DIR: false,
    COPY_HISTORY: true,
    CLEAN_VIDEOS: false,
    CLEAN_SCREENSHOTS: false,
    RESULT_DIR: '/allure/allure-results',
    REPORT_DIR: '/allure/allure-report',
    META: {
        TEST_ID: 'ID',
        TAG: 'TAG',
        BLOK: 'BLOK',
        MODULE: 'MODULE',
        SEVERITY: 'SEVERITY',
        USER_STORY: 'USER_STORY',
        DESCRIPTION: 'DESCRIPTION'
    },
    STORY_LABEL: 'Jira Story Link',
    STORY_URL: 'https://jiraexample.cloud/browse/{{ID}}',
    VIDEO_PATH: 'reports/videos',
    REPORTS_PATH: 'reports',
    SCREENSHOT_PATH: 'reports/screenshots',
    CATEGORY_FILE_PATH: 'allure',
    labels: {
        screenshotLabel: 'Screenshot',
        videoLabel: 'Executive Video',
        reportsLabel: 'Reports',
        browserLabel: 'Browser',
        userAgentLabel: 'User Agent',
        allureStartMessage: 'Allure reporter started...',
        allureClosedMessage: 'Allure reporter closed...'
    }
};

module.exports = DOC_ALLURE_CONFIG;
