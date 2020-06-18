import makeDocx from '../services/docx';
import { getPath } from '../utils/path';

export const makeBranchDataDocx = (customerName, data) => {
    makeDocx(
        getPath('../../templates/branch_data.docx'),
        data,
        getPath(`../../applications/${customerName}/branch_data.docx`)
    );
};

export const makeApplicationDocx = (customerName, data) => {
    makeDocx(
        getPath('../../templates/application.docx'),
        data,
        getPath(`../../applications/${customerName}/application.docx`)
    );
};

export const makeContractDocx = (customerName, data) => {
    makeDocx(
        getPath('../../templates/contract.docx'),
        data,
        getPath(`../../applications/${customerName}/contract.docx`)
    );
};
