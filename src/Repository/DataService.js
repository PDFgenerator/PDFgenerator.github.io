import { DateTime } from "./Date"
import Rounder from "./Rounder"


export let DataService = JSON.parse(sessionStorage.getItem("DataBase")) ? 
    JSON.parse(sessionStorage.getItem("DataBase"))
    :
    {
        header:{ 
            proformaInvoice: {
                code:"6604962",
                dateInit: DateTime().date,
                page:1
            },
            initInvoice: {
                dateInit: DateTime().date,
                timeInit:DateTime().time,
            },
            deliveryAdress: {
                code: 200446,
                adress: "NIC INTERNATIONAL\nCENTRAL PLAZA (5TH FLOOR)\nROOM NUMBER-01 O.R. NIZAMROAD\nCHITAGONG",
                country:"Bangladesh"
            },
            invoiceAdress: {
                code: 200446,
                adress: "NIC INTERNATIONAL\nCALLE BALMES 266\n08006-BARCELONA",
                country: "Spain"
            }
        },
        table:[
            {
                id: 1,
                code: "1",
                description: "O.VEX DELIGHT OLIVA 12X1LT BVR BANGLADES",
                cases: 0,
                un: "0",
                net: "0",
                gross: "0",
                price: 0.00,
                amount: 0.00,
            },
            {
                id: 2,
                code: "2",
                description: "O.VEX DELIGHT OLIVA 12X1LT BVR BANGLADES",
                cases: 0,
                un: "0",
                net: "0",
                gross: "0",
                price: 0.00,
                amount: 0.00,
            }// ,
            // {
            //     id: 3,
            //     code: "1",
            //     description: "O.VEX DELIGHT OLIVA 12X1LT BVR BANGLADES",
            //     cases: 1,
            //     un: "1",
            //     net: "1",
            //     gross: "1",
            //     price: 1.00,
            //     amount: 1.00,
            // },
            // {
            //     id: 4,
            //     code: "1",
            //     description: "O.VEX DELIGHT OLIVA 12X1LT BVR BANGLADES",
            //     cases: 1,
            //     un: "1",
            //     net: "1",
            //     gross: "1",
            //     price: 1.00,
            //     amount: 1.00,
            // },
            // {
            //     id: 5,
            //     code: "1",
            //     description: "O.VEX DELIGHT OLIVA 12X1LT BVR BANGLADES",
            //     cases: 1,
            //     un: "1",
            //     net: "1",
            //     gross: "1",
            //     price: 1.00,
            //     amount: 1.00,
            // },
            // {
            //     id: 6,
            //     code: "1",
            //     description: "O.VEX DELIGHT OLIVA 12X1LT BVR BANGLADES",
            //     cases: 1,
            //     un: "1",
            //     net: "1",
            //     gross: "1",
            //     price: 1.00,
            //     amount: 1.00,
            // },
            // {
            //     id: 7,
            //     code: "1",
            //     description: "O.VEX DELIGHT OLIVA 12X1LT BVR BANGLADES",
            //     cases: 1,
            //     un: "1",
            //     net: "1",
            //     gross: "1",
            //     price: 1.00,
            //     amount: 1.00,
            // },
            // {
            //     id: 8,
            //     code: "1",
            //     description: "O.VEX DELIGHT OLIVA 12X1LT BVR BANGLADES",
            //     cases: 1,
            //     un: "1",
            //     net: "1",
            //     gross: "1",
            //     price: 1.00,
            //     amount: 1.00,
            // },
            // {
            //     id: 9,
            //     code: "1",
            //     description: "O.VEX DELIGHT OLIVA 12X1LT BVR BANGLADES",
            //     cases: 1,
            //     un: "1",
            //     net: "1",
            //     gross: "1",
            //     price: 1.00,
            //     amount: 1.00,
            // },
            // {
            //     id: 10,
            //     code: "1",
            //     description: "O.VEX DELIGHT OLIVA 12X1LT BVR BANGLADES",
            //     cases: 1,
            //     un: "1",
            //     net: "1",
            //     gross: "1",
            //     price: 1.00,
            //     amount: 1.00,
            // },
            // {
            //     id: 11,
            //     code: "1",
            //     description: "O.VEX DELIGHT OLIVA 12X1LT BVR BANGLADES",
            //     cases: 1,
            //     un: "1",
            //     net: "1",
            //     gross: "1",
            //     price: 1.00,
            //     amount: 1.00,
            // },
            // {
            //     id: 12,
            //     code: "1",
            //     description: "O.VEX DELIGHT OLIVA 12X1LT BVR BANGLADES",
            //     cases: 1,
            //     un: "1",
            //     net: "1",
            //     gross: "1",
            //     price: 1.00,
            //     amount: 1.00,
            // },
            // {
            //     id: 13,
            //     code: "1",
            //     description: "O.VEX DELIGHT OLIVA 12X1LT BVR BANGLADES",
            //     cases: 1,
            //     un: "1",
            //     net: "1",
            //     gross: "1",
            //     price: 1.00,
            //     amount: 1.00,
            // },
            // {
            //     id: 14,
            //     code: "1",
            //     description: "O.VEX DELIGHT OLIVA 12X1LT BVR BANGLADES",
            //     cases: 1,
            //     un: "1",
            //     net: "1",
            //     gross: "1",
            //     price: 1.00,
            //     amount: 1.00,
            // },
            // {
            //     id: 15,
            //     code: "1",
            //     description: "O.VEX DELIGHT OLIVA 12X1LT BVR BANGLADES",
            //     cases: 1,
            //     un: "1",
            //     net: "1",
            //     gross: "1",
            //     price: 1.00,
            //     amount: 1.00,
            // },
            // {
            //     id: 16,
            //     code: "1",
            //     description: "O.VEX DELIGHT OLIVA 12X1LT BVR BANGLADES",
            //     cases: 1,
            //     un: "1",
            //     net: "1",
            //     gross: "1",
            //     price: 1.00,
            //     amount: 1.00,
            // },
            // {
            //     id: 17,
            //     code: "1",
            //     description: "O.VEX DELIGHT OLIVA 12X1LT BVR BANGLADES",
            //     cases: 1,
            //     un: "1",
            //     net: "1",
            //     gross: "1",
            //     price: 1.00,
            //     amount: 1.00,
            // },
            // {
            //     id: 18,
            //     code: "1",
            //     description: "O.VEX DELIGHT OLIVA 12X1LT BVR BANGLADES",
            //     cases: 1,
            //     un: "1",
            //     net: "1",
            //     gross: "1",
            //     price: 1.00,
            //     amount: 1.00,
            // },
            // {
            //     id: 19,
            //     code: "1",
            //     description: "O.VEX DELIGHT OLIVA 12X1LT BVR BANGLADES",
            //     cases: 1,
            //     un: "1",
            //     net: "1",
            //     gross: "1",
            //     price: 1.00,
            //     amount: 1.00,
            // },
            // {
            //     id: 20,
            //     code: "1",
            //     description: "O.VEX DELIGHT OLIVA 12X1LT BVR BANGLADES",
            //     cases: 1,
            //     un: "1",
            //     net: "1",
            //     gross: "1",
            //     price: 1.00,
            //     amount: 1.00,
            // },
            // {
            //     id: 21,
            //     code: "1",
            //     description: "O.VEX DELIGHT OLIVA 12X1LT BVR BANGLADES",
            //     cases: 1,
            //     un: "1",
            //     net: "1",
            //     gross: "1",
            //     price: 1.00,
            //     amount: 1.00,
            // },
            // {
            //     id: 22,
            //     code: "1",
            //     description: "O.VEX DELIGHT OLIVA 12X1LT BVR BANGLADES",
            //     cases: 1,
            //     un: "1",
            //     net: "1",
            //     gross: "1",
            //     price: 1.00,
            //     amount: 1.00,
            // },
            // {
            //     id: 23,
            //     code: "1",
            //     description: "O.VEX DELIGHT OLIVA 12X1LT BVR BANGLADES",
            //     cases: 1,
            //     un: "1",
            //     net: "1",
            //     gross: "1",
            //     price: 1.00,
            //     amount: 1.00,
            // },
            // {
            //     id: 24,
            //     code: "1",
            //     description: "O.VEX DELIGHT OLIVA 12X1LT BVR BANGLADES",
            //     cases: 1,
            //     un: "1",
            //     net: "1",
            //     gross: "1",
            //     price: 1.00,
            //     amount: 1.00,
            // },
            // {
            //     id: 25,
            //     code: "1",
            //     description: "O.VEX DELIGHT OLIVA 12X1LT BVR BANGLADES",
            //     cases: 1,
            //     un: "1",
            //     net: "1",
            //     gross: "1",
            //     price: 1.00,
            //     amount: 1.00,
            // },
            // {
            //     id: 26,
            //     code: "1",
            //     description: "O.VEX DELIGHT OLIVA 12X1LT BVR BANGLADES",
            //     cases: 1,
            //     un: "1",
            //     net: "1",
            //     gross: "1",
            //     price: 1.00,
            //     amount: 1.00,
            // },
            // {
            //     id: 27,
            //     code: "1",
            //     description: "O.VEX DELIGHT OLIVA 12X1LT BVR BANGLADES",
            //     cases: 1,
            //     un: "1",
            //     net: "1",
            //     gross: "1",
            //     price: 1.00,
            //     amount: 1.00,
            // },
            // {
            //     id: 28,
            //     code: "1",
            //     description: "O.VEX DELIGHT OLIVA 12X1LT BVR BANGLADES",
            //     cases: 1,
            //     un: "1",
            //     net: "1",
            //     gross: "1",
            //     price: 1.00,
            //     amount: 1.00,
            // },{
            //     id: 29,
            //     code: "1",
            //     description: "O.VEX DELIGHT OLIVA 12X1LT BVR BANGLADES",
            //     cases: 1,
            //     un: "1",
            //     net: "1",
            //     gross: "1",
            //     price: 1.00,
            //     amount: 1.00,
            // }

        ],
        totals:{
            amount: 0.00,
            vat: 0.00,
            gross: 0.000,
            net: 0.000,
            cases: 0,
            un: 0.000,
            totalLiters: 0.000,
        },
        footer:{
            code: "B02877926",
            direction: "CALLE BALMES 266 08006 - Barcelona, Spain.",
            numberPhone: "+34 647 972 933",
            email: "nazrulgb@yahoo.com"
        }
    }


let array = DataService.table
let atributtes = ["cases", "un", "net", "gross", "amount"]
Rounder()

export function calculateAmount(param) {
    param.forEach(
        row => row.amount = Math.round10(row.cases*row.price, -2)
    )
}

export function updateTotals() {
    const sum = (param) => {
        let arrayParam = array.map(
            row => (parseFloat(row[param]))
        )

        let initialValue = 0;

        let totalParam = arrayParam.reduce(
            (value1, value2) => value1 + value2,
            initialValue  
        );

        return totalParam
    }

    atributtes.forEach(
        atributte => DataService.totals[atributte] = sum(atributte)
    )

    // console.log(DataService.totals, DataService.totals["amount"] = sum("amount"))
}



  