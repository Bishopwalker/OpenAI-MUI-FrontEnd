
export type ProductType={

    id:number
    name:string
    price:PaymentCurrencyAmount
    description:string
    alt?:string
    src?:string

}

export const data:ProductType[] = [
    {
        id:1,
        name:'Weekly Trash Pickup',
        price:40.00,
        src:`/images/trashcanBig.jpg`,
        alt:'trashcan',
        description:"Once per Week Residential Trash Pick Up. Billed Monthly.Includes  95 gallon Trashcan"
    },
    {
        id:2,
        name:'Weekly Recycling Pickup',
        price:25.00,
        src:'/images/recycling.jpg',
        alt:'recycle',
        description:"Once per Week Residential Recycling Pick Up, Billed Monthly"
    },
    {
        id:3,
        name:'Weekly Recycling Pickup',
        price:25.00,
        src:'/images/recycling.jpg',
        alt:'recycle',
        description:"Once per Week Residential Recycling Pick Up, Billed Monthly"
    },
    {
        id:4,
        name:'Daily 13y Dumpster Rental',
        price: 330,
        src:'/images/rollOff.jpg',
        alt:'roll off dumpster',
        description:"Daily 13 yard dumpster rental. $25.00 per day additional. Price includes a max of 3 tons and then it's $80 per ton additional fees."
    },
    {
        id:5,
        name:'Commercial Container Weekly Pickup',
        price: 50,
        src:'/images/Commercial-dumpster-rental.jpg',
        alt:'commercial trashcan',
        description:"Once per week Container Pick Up. Billed Monthly. Includes Container"
    },
    {
        id:6,
        name: 'Commercial Container Bi-Weekly Pickup',
        price: 75,
        src:'/images/yellowRollOFf.jpg',
        alt:'construction dumpster',
        description:"Twice per month Container Pick Up. Billed Monthly. Includes Container"
    },
    {
        id:7,
        name: 'Commercial Container Monthly Pickup',
        price: 100,
        src:'/images/yellowRollOFf.jpg',
        alt:'construction dumpster',
        description:"Once per month Container Pick up. Billed Monthly. Includes Container"
    },
    {
        id:8,
        name: 'Commercial/Contractor 20 yard Dumpster Rental',
        price: 450,
        src:'/images/rollOff.jpg',
        alt:'roll off dumpster',
        description: "Price includes first week. Then it's $50 per day addition. Price includes a max of 4 tons then $80 per ton additional fees."
    },
    {
        id:9,
        name: 'Dump and Return Dumpster',
        price: 150,
        src:'/images/rollOff.jpg',
        alt:'roll off dumpster',
        description: "To dump and return container that is currently being rented. Price includes hookup and return only. Tonnage is charged at $80 per ton with a minimum charge of $200 "
    }
]