import { DateTime } from "./Date"
import Rounder from "./Rounder"

export let DataService = {
    header:{ 
        proformaInvoice: {
            code:"6604962",
            dateInit: DateTime().date,
            page:1
        },
        initInvoice: {
            dateInit: DateTime().date,
            timeInit:DateTime().time,
            // printed:"15:29:35",
            // dateRequest:"30/04/2022"
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
            code: "123456",
            description: "O.VEX DELIGHT OLIVA 12X1LT BVR BANGLADES",
            cases: 168,
            un: "1234550",
            net: "1234566",
            gross: "4567899",
            price: 50.00,
            amount: 0.00,
        },
        {
            id: 2,
            code: "123456",
            description: "O.VEX DELIGHT OLIVA 12X1LT BVR BANGLADES",
            cases: 168,
            un: "1234550",
            net: "1234566",
            gross: "4567899",
            price: 50.00,
            amount: 0.00,
        },
        {
            id: 3,
            code: "123456",
            description: "O.VEX DELIGHT OLIVA 12X1LT BVR BANGLADES",
            cases: 168,
            un: "1234550",
            net: "1234566",
            gross: "4567899",
            price: 50.00,
            amount: 0.00,
        },
        {
            id: 4,
            code: "123456",
            description: "O.VEX DELIGHT OLIVA 12X1LT BVR BANGLADES",
            cases: 168,
            un: "1234550",
            net: "1234566",
            gross: "4567899",
            price: 50.00,
            amount: 0.00,
        },
        {
            id: 5,
            code: "123456",
            description: "O.VEX DELIGHT OLIVA 12X1LT BVR BANGLADES",
            cases: 168,
            un: "1234550",
            net: "1234566",
            gross: "4567899",
            price: 50.00,
            amount: 0.00,
        },
        {
            id: 6,
            code: "123456",
            description: "O.VEX DELIGHT OLIVA 12X1LT BVR BANGLADES",
            cases: 168,
            un: "1234550",
            net: "1234566",
            gross: "4567899",
            price: 50.00,
            amount: 0.00,
        },
        {
            id: 7,
            code: "123456",
            description: "O.VEX DELIGHT OLIVA 12X1LT BVR BANGLADES",
            cases: 168,
            un: "1234550",
            net: "1234566",
            gross: "4567899",
            price: 50.00,
            amount: 0.00,
        },
        {
            id: 8,
            code: "123456",
            description: "O.VEX DELIGHT OLIVA 12X1LT BVR BANGLADES",
            cases: 168,
            un: "1234550",
            net: "1234566",
            gross: "4567899",
            price: 50.00,
            amount: 0.00,
        },
        {
            id: 9,
            code: "123456",
            description: "O.VEX DELIGHT OLIVA 12X1LT BVR BANGLADES",
            cases: 168,
            un: "1234550",
            net: "1234566",
            gross: "4567899",
            price: 50.00,
            amount: 0.00,
        },
        {
            id: 10,
            code: "123456",
            description: "O.VEX DELIGHT OLIVA 12X1LT BVR BANGLADES",
            cases: 168,
            un: "1234550",
            net: "1234566",
            gross: "4567899",
            price: 50.00,
            amount: 0.00,
        },
        {
            id: 11,
            code: "123456",
            description: "O.VEX DELIGHT OLIVA 12X1LT BVR BANGLADES",
            cases: 168,
            un: "1234550",
            net: "1234566",
            gross: "4567899",
            price: 50.00,
            amount: 0.00,
        },
        {
            id: 12,
            code: "123456",
            description: "O.VEX DELIGHT OLIVA 12X1LT BVR BANGLADES",
            cases: 168,
            un: "1234550",
            net: "1234566",
            gross: "4567899",
            price: 50.00,
            amount: 0.00,
        }
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

export function calculateAmount(param) {
    param.forEach(
        row => row.amount = row.cases*row.price
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

Rounder()

console.log(Math.round10(1.005, -2));   // 1.01 -- compare this with Math.round(1.005*100)/100 above


  