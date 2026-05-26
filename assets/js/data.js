// Mock Data Engine & Personas
const personas = {
    "370101-10001": {
        id: "p1",
        name: "Marta",
        age: 28,
        avatar: "M",
        role: "Young Professional",
        netWorth: 18500,
        assets: 23500,
        liabilities: 5000,
        pension: {
            value: 8500,
            plan: "Growth II",
            provider: "Swedbank",
            projectedAtRetirement: 245000,
            yield: 6.5
        },
        mortgage: {
            active: false,
            balance: 0,
            monthly: 0,
            rate: 0
        },
        pillar3: {
            active: true,
            balance: 3000,
            monthlyContribution: 100,
            taxBenefit: 240
        },
        childFund: {
            active: false,
            balance: 0
        },
        investing: {
            balance: 12000,
            strategy: "Aggressive",
            monthly: 300,
            yield: 8.2
        },
        otherLoans: {
            balance: 5000,
            type: "Car Loan"
        }
    },
    "370101-20002": {
        id: "p2",
        name: "Andris",
        age: 42,
        avatar: "A",
        role: "Mid-Career",
        netWorth: 145000,
        assets: 235000,
        liabilities: 90000,
        pension: {
            value: 45000,
            plan: "Balanced",
            provider: "SEB",
            projectedAtRetirement: 180000,
            yield: 4.5
        },
        mortgage: {
            active: true,
            balance: 85000,
            original: 120000,
            monthly: 550,
            rate: 4.2,
            termRemaining: 15
        },
        pillar3: {
            active: true,
            balance: 25000,
            monthlyContribution: 250,
            taxBenefit: 600
        },
        childFund: {
            active: true,
            balance: 12000,
            monthlyContribution: 100,
            childAge: 8
        },
        investing: {
            balance: 45000,
            strategy: "Balanced",
            monthly: 400,
            yield: 5.5
        },
        otherLoans: {
            balance: 5000,
            type: "Consumer Loan"
        }
    },
    "370101-30003": {
        id: "p3",
        name: "Ingrid",
        age: 58,
        avatar: "I",
        role: "Pre-Retirement",
        netWorth: 380000,
        assets: 395000,
        liabilities: 15000,
        pension: {
            value: 185000,
            plan: "Conservative",
            provider: "Luminor",
            projectedAtRetirement: 210000,
            yield: 2.5
        },
        mortgage: {
            active: true,
            balance: 15000,
            original: 80000,
            monthly: 300,
            rate: 2.5,
            termRemaining: 4
        },
        pillar3: {
            active: true,
            balance: 85000,
            monthlyContribution: 400,
            taxBenefit: 960
        },
        childFund: {
            active: false,
            balance: 0
        },
        investing: {
            balance: 110000,
            strategy: "Conservative",
            monthly: 200,
            yield: 3.5
        },
        otherLoans: {
            balance: 0,
            type: ""
        }
    }
};

// State management
function setPersona(idNumber) {
    if (personas[idNumber]) {
        localStorage.setItem('currentPersonaId', idNumber);
        return true;
    }
    return false;
}

function getPersona() {
    const id = localStorage.getItem('currentPersonaId') || "370101-10001";
    return personas[id];
}

// Formatters
function formatCurrency(value) {
    if (value < 0) {
        return `(€${Math.abs(value).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})})`;
    }
    return `€${value.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
}

// Financial Math Helpers
function compoundInterest(principal, monthly, rate, years) {
    let balance = principal;
    const monthlyRate = rate / 100 / 12;
    for (let m = 1; m <= years * 12; m++) {
        balance += monthly;
        balance = balance * (1 + monthlyRate);
    }
    return balance;
}

function calculateScore(user) {
    const total = user.assets + user.liabilities;
    if (total === 0) return 500;
    const score = Math.round((user.assets / total) * 1000);
    return score;
}

// On Load: Populate Profile Info
document.addEventListener("DOMContentLoaded", () => {
    const user = getPersona();
    if (!user) return;
    
    const nameEls = document.querySelectorAll('.user-name');
    nameEls.forEach(el => el.textContent = user.name);
    
    const avatarEls = document.querySelectorAll('.avatar');
    avatarEls.forEach(el => el.textContent = user.avatar);
});
