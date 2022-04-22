export let DataService = {
    header:{ 
        proforma: {code:"6604962"}
    },
    table:[
        {
            id: 1,
            code: "1",
            description: "example",
            cases: "0",
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
            cases: "0",
            un: "0.000",
            net: "0.000",
            gross: "0.000",
            price: "0.00",
            amount: "0.00",
        },
    ],
    totals:{
        vat: 0,
        groosWeight: 0,
        netWeight: 0,
        totalCases: 0,
        totalUnits: 0,
        totalLiters: 0,
    },
    footer:{
        code: 802877926,
        direction: "CALLE BALMES 266 08006 - Barcelona, Spain.",
        numberPhone: "+34 647 972 933",
        email: "nazrulgb@yahoo.com"
    }
}