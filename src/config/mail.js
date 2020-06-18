export default {
    service: 'gmail',
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    },
};

export const branchDataMailOption = {
    from: process.env.MAIL_FROM,
    to: process.env.MAIL_BRANCH_DATA,
    cc: process.env.MAIL_CC,
    subject: '電子發票服務',
    text: '有人申請了電子發票!',
};

export const customerMailOption = {
    from: process.env.MAIL_FROM,
    cc: process.env.MAIL_CC,
    subject: '電子發票服務',
    text: '感謝您申請電子發票服務!',
};
