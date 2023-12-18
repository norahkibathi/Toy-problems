const grossSalary = 0
const nhifdeduction = 0
const PAYE= 0
const nssf = 0
const grossRevenue = 0
function nhifDeductions(grossSalary) {
    if (grossSalary <= 5999) {
        return 150;
    } else if (grossSalary >= 6000 && grossSalary <= 7999) {
        return 300;
    } else if (grossSalary >= 8000 && grossSalary <= 11999) {
        return 300;
    } else if (grossSalary >= 12000 && grossSalary <= 14999) {
        return 400;
    } else if (grossSalary >= 15000 && grossSalary <= 19999) {
        return 600;
    } else if (grossSalary >= 20000 && grossSalary <= 24999) {
        return 750;
    } else if (grossSalary >= 25000 && grossSalary <= 29999) {
        return 850;
    } else if (grossSalary >= 30000 && grossSalary <= 34999) {
        return 900;
    } else if (grossSalary >= 35000 && grossSalary <= 39999) {
        return 950;
    } else if (grossSalary >= 40000 && grossSalary <= 44999) {
        return 1000;
    } else if (grossSalary >= 45000 && grossSalary <= 49999) {
        return 1100;
    } else if (grossSalary >= 50000 && grossSalary <= 59999) {
        return 1200;
    } else if (grossSalary >= 60000 && grossSalary <= 69999) {
        return 1300;
        } else if (grossSalary >= 70000 && grossSalary <= 79999){
            return 1400;
        }
        else if (grossSalary >= 80000 && grossSalary <= 89999) {
        return 1500;
    } else if (grossSalary >= 90000 && grossSalary <= 99999) {
        return 1600;
    } else {
        return 1700;
    }
}
function paye(grossRevenue){
    if (grossRevenue <= 24000) {
        return  0.1 * grossRevenue;
    }
    else if (grossRevenue >= 24001 && grossRevenue <= 32333)
    {return 0.25 * grossRevenue ;
    }
    else if (grossRevenue >= 32334 && grossRevenue <= 500000){
        return 0.3 * grossRevenue ;
    }
    else if (grossRevenue >= 5000001 && grossRevenue <= 800000){
        return 0.32 * grossRevenue - 15000;
    }
    else {
        return 0.35 * grossRevenue - 15000;
    }
}
function systemSalary(grossSalary, benefits) {
    const nssfdeduction = 0.6 * grossSalary;
    const nhifDeductionValue = nhifDeductions(grossSalary);
    const payeAddition = paye(grossRevenue);

    const netSalary = grossSalary - (nhifDeductionValue + nssfdeduction - payeAddition);
    return netSalary;
}

console.log(systemSalary(4000,500))
console.log(systemSalary(4000 , 500))