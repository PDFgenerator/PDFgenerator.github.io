export let DataService = {
    header:{ 
        proforma: {code:"6604962"}
    },
    table:[
        {
            id: 1,
            code: "1",
            description: "example",
            cases: "6",
            un: "0.000",
            net: "0.000",
            gross: "0.000",
            price: "0.00",
            amount: "0.00",
        },
        {
            id: 2,
            code: "2",
            description: "example",
            cases: "4",
            un: "0.000",
            net: "0.000",
            gross: "0.000",
            price: "0.00",
            amount: "0.00",
        },
    ],
    totals:{
        totalAmountUSD: 0.00,
        vat: 0.00,
        grossWeight: 0.000,
        netWeight: 0.000,
        totalCases: 0,
        totalUnits: 0.000,
        totalLiters: 0.000,
    },
    footer:{
        code: 802877926,
        direction: "CALLE BALMES 266 08006 - Barcelona, Spain.",
        numberPhone: "+34 647 972 933",
        email: "nazrulgb@yahoo.com"
    }
}