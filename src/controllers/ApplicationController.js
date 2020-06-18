import applicationService from '../services/applicationService';
import Application from '../models/Applicantion';

export class ApplicationController {
    async createApplication(ctx) {
        const data = ctx.request.body;

        if (!data.customerName || !data.customerEmail) {
            ctx.body = {
                status: 'failed',
                message: 'empty request!',
            };
            return;
        }

        const applicationData = Object.assign(
            {
                customerName: '',
                taxId: '',
                TIN: '',
                belongsTo: '',
                address: '',
                principal: '',
                telephone: '',
                contactPersonName: '',
                contactPhone: '',
                contactMobilephone: '',
                customerEmail: '',
                contactAddress: '',
                branchCount: '',
                machineCount: '',
                einvoiceCount: '',
                startDate: '',
                transportType: '',
                einvoiceType: '',
                branchId: '',
                signName: '',
            },
            data
        );
        // console.log(applicationData);

        // make docx data
        console.log('make docx');
        try {
            applicationService.makeApplicationData(applicationData);
        } catch (err) {
            console.log('make application error', err);
        }

        // send email
        console.log('send mail');
        try {
            applicationService.mailToProvider(applicationData);
            applicationService.mailToCustomer(applicationData);
        } catch (err) {
            console.log('mail error', err);
        }

        // save record
        console.log('save Record');
        // const applicationRecord = await new Application(applicationData).save();

        ctx.body = {
            status: 'success',
            message: 'create success!',
        };
    }
}

export default new ApplicationController();
