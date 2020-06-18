import {
    makeBranchDataDocx,
    makeApplicationDocx,
    makeContractDocx,
} from '../helpers/makeApplication';
import { sendMail } from '../services/mail';
import { getPath } from '../utils/path';
import { branchDataMailOption, customerMailOption } from '../config/mail';
import fs from 'fs';

export class ApplicationService {
    makeApplicationData(data) {
        const { customerName } = data;
        const dir = getPath(`../../applications/${customerName}`);
        try {
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir);
            }
        } catch (err) {
            console.log(err);
        }
        makeBranchDataDocx(customerName, data);
        makeApplicationDocx(customerName, data);
        makeContractDocx(customerName, data);
    }

    mailToProvider(data) {
        const { customerName } = data;
        const mailOptions = {
            ...branchDataMailOption,
            attachments: [
                {
                    filename: '電子發票加值中心服務B2C商家資料表.docx',
                    path: getPath(
                        `../../applications/${customerName}/branch_data.docx`
                    ),
                },
            ],
        };

        sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }

    mailToCustomer(data) {
        const customerEmail = data.customerEmail;
        const { customerName } = data;

        const mailOptions = {
            ...customerMailOption,
            to: customerEmail || customerMailOption.cc,
            attachments: [
                {
                    filename: '電子發票加值中心合約書.docx',
                    path: getPath(
                        `../../applications/${customerName}/contract.docx`
                    ),
                },
                {
                    filename: '國稅局-電子發票字軌號碼申請書.docx',
                    path: getPath(
                        `../../applications/${customerName}/application.docx`
                    ),
                },
            ],
        };

        sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }
}

export default new ApplicationService();
