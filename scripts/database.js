const database = {
    heroes: [
        {
            id: 1,
            name: "Meat Man",
            power: "Conjure meat from thin air",
        },
        {
            id: 2,
            name: "Butter Boy",
            power: "Shoot butter from fingertips",
        }
    ],
    villains: [
        {
            id: 1,
            name: "The Veganator",
            power: "Make food he touches plant-based",
        },
        {
            id: 2,
            name: "Margarine Menace",
            power: "Turn healthy, natural fats into seed-oil based alternatives",
        },
        {
            id: 3,
            name: "Snack Attack",
            power: "Brings immense temptation to eat unhealthy snacks",
        },
        {
            id: 4,
            name: "Soda Sorceress",
            power: "Transform any liquid into soda",
        }
    ]
}

export const getHeroes = () => {
    return database.heroes.map(hero => ({...hero}))
}

export const getVillains = () => {
    return database.villains.map(villain => ({...villain}))
}