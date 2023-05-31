
export type dataUserType = {
    fullName: string
    id: number
    phone: string
    gender: string
    dateOfBirth: string
    metro: string
    address: string
    bank: string
    cardNumber: string
    citizenship: string
    passport: string
    issued: string
    limitDate: string
    placeOfBirth: string
    placeOfResidence: string
    patent: string
    patentLimitDate: string
    snils: string
    inn: string
    medBook: string
    job: string
    subdivision: string
    decision: string
    source: string
    dateDecision: string
    note: string
}

export type dataUsersType = dataUserType[]

export const dataUser: dataUsersType = [
    {
        fullName: 'Морозов Павел',
        id: 1,
        phone: '89764554323',
        gender: 'мужской',
        dateOfBirth: '09.12.1986',
        metro: 'Василеостровская',
        address: 'Наставников 15 к2 кв 33',
        bank: 'ВТБ',
        cardNumber: '3333 4445 4532 3353',
        citizenship: 'РФ',
        passport: '4565 567887',
        issued: 'ТП 44 по СПб и Лен обл',
        limitDate: '12.09.2024',
        placeOfBirth: 'Узбекистан',
        placeOfResidence: 'Наставников 15 к2 кв 33',
        patent: '-',
        patentLimitDate: '-',
        snils: '111-345-344 11',
        inn: '354790582525',
        medBook: '-',
        job: 'Бригадир',
        subdivision: 'B2B',
        decision: 'Принят',
        source: 'Авито',
        dateDecision: '12.09.2022',
        note: 'карта на Максима Вилина'
    },
    {
        fullName: 'Полякова Наталья',
        id: 2,
        phone: '89764554323',
        gender: 'женский',
        dateOfBirth: '09.12.1986',
        metro: 'Ладожская',
        address: 'Наставников 15 к2 кв 33',
        bank: 'Сбер',
        cardNumber: '3333 4445 4532 3353',
        citizenship: 'Азербайджан',
        passport: '4565 567887',
        issued: 'ТП 44 по СПб и Лен обл',
        limitDate: '12.09.2024',
        placeOfBirth: 'РФ',
        placeOfResidence: 'Наставников 15 к2 кв 33',
        patent: '-',
        patentLimitDate: '-',
        snils: '111-345-344 11',
        inn: '354790582525',
        medBook: '-',
        job: 'Клинер',
        subdivision: 'B2С',
        decision: 'Не принят',
        source: 'Авито',
        dateDecision: '12.09.2022',
        note: 'карта на Максима Вилина'
    },
    {
        fullName: 'Иванов Иван',
        id: 3,
        phone: '89764554323',
        gender: 'мужской',
        dateOfBirth: '09.12.1986',
        metro: 'Московская',
        address: 'Наставников 15 к2 кв 33',
        bank: 'Сбер',
        cardNumber: '3333 4445 4532 3353',
        citizenship: 'Казахстан',
        passport: '4565 567887',
        issued: 'ТП 44 по СПб и Лен обл',
        limitDate: '12.09.2024',
        placeOfBirth: 'Казахстан',
        placeOfResidence: 'Наставников 15 к2 кв 33',
        patent: '-',
        patentLimitDate: '-',
        snils: '111-345-344 11',
        inn: '354790582525',
        medBook: '-',
        job: 'Слесарь',
        subdivision: 'B2B',
        decision: 'Принят',
        source: 'Авито',
        dateDecision: '12.09.2022',
        note: 'карта на Максима Вилина'
    },
    {
        fullName: 'Петров Петр',
        id: 4,
        phone: '89764554323',
        gender: 'женский',
        dateOfBirth: '09.12.1986',
        metro: 'Купчино',
        address: 'Наставников 15 к2 кв 33',
        bank: 'Альфа',
        cardNumber: '3333 4445 4532 3353',
        citizenship: 'Узбекистан',
        passport: '4565 567887',
        issued: 'ТП 44 по СПб и Лен обл',
        limitDate: '12.09.2024',
        placeOfBirth: 'РФ',
        placeOfResidence: 'Наставников 15 к2 кв 33',
        patent: '-',
        patentLimitDate: '-',
        snils: '111-345-344 11',
        inn: '354790582525',
        medBook: '-',
        job: 'Бригадир',
        subdivision: 'B2С',
        decision: 'Не принят',
        source: 'Авито',
        dateDecision: '12.09.2022',
        note: 'карта на Максима Вилина'
    },
    {
        fullName: 'Глебик Александр',
        id: 5,
        phone: '89764554323',
        gender: 'мужской',
        dateOfBirth: '09.12.1986',
        metro: 'Девяткино',
        address: 'Наставников 15 к2 кв 33',
        bank: 'ВТБ',
        cardNumber: '3333 4445 4532 3353',
        citizenship: 'Казахстан',
        passport: '4565 567887',
        issued: 'ТП 44 по СПб и Лен обл',
        limitDate: '12.09.2024',
        placeOfBirth: 'Узбекистан',
        placeOfResidence: 'Наставников 15 к2 кв 33',
        patent: '-',
        patentLimitDate: '-',
        snils: '111-345-344 11',
        inn: '354790582525',
        medBook: '-',
        job: 'Слесарь',
        subdivision: 'B2С',
        decision: 'Принят',
        source: 'Авито',
        dateDecision: '12.09.2022',
        note: 'карта на Максима Вилина'
    },
    {
        fullName: 'Земляков Иван',
        id: 6,
        phone: '89764554323',
        gender: 'женский',
        dateOfBirth: '09.12.1986',
        metro: 'Василеостровская',
        address: 'Наставников 15 к2 кв 33',
        bank: 'Альфа',
        cardNumber: '3333 4445 4532 3353',
        citizenship: 'РФ',
        passport: '4565 567887',
        issued: 'ТП 44 по СПб и Лен обл',
        limitDate: '12.09.2024',
        placeOfBirth: 'Узбекистан',
        placeOfResidence: 'Наставников 15 к2 кв 33',
        patent: '-',
        patentLimitDate: '-',
        snils: '111-345-344 11',
        inn: '354790582525',
        medBook: '-',
        job: 'Клинер',
        subdivision: 'B2B',
        decision: 'Не принят',
        source: 'Авито',
        dateDecision: '12.09.2022',
        note: 'карта на Максима Вилина'
    },
    {
        fullName: 'Сергеев Петр',
        id: 7,
        phone: '89764554323',
        gender: 'мужской',
        dateOfBirth: '09.12.1986',
        metro: 'Московская',
        address: 'Наставников 15 к2 кв 33',
        bank: 'Сбер',
        cardNumber: '3333 4445 4532 3353',
        citizenship: 'Узбекистан',
        passport: '4565 567887',
        issued: 'ТП 44 по СПб и Лен обл',
        limitDate: '12.09.2024',
        placeOfBirth: 'Узбекистан',
        placeOfResidence: 'Наставников 15 к2 кв 33',
        patent: '-',
        patentLimitDate: '-',
        snils: '111-345-344 11',
        inn: '354790582525',
        medBook: '-',
        job: 'Бригадир',
        subdivision: 'B2B',
        decision: 'Принят',
        source: 'Авито',
        dateDecision: '12.09.2022',
        note: 'карта на Максима Вилина'
    },
    {
        fullName: 'Абрамович Степан',
        id: 8,
        phone: '89764554323',
        gender: 'женский',
        dateOfBirth: '09.12.1986',
        metro: 'Ладожская',
        address: 'Наставников 15 к2 кв 33',
        bank: 'ВТБ',
        cardNumber: '3333 4445 4532 3353',
        citizenship: 'Азербайджан',
        passport: '4565 567887',
        issued: 'ТП 44 по СПб и Лен обл',
        limitDate: '12.09.2024',
        placeOfBirth: 'Узбекистан',
        placeOfResidence: 'Наставников 15 к2 кв 33',
        patent: '-',
        patentLimitDate: '-',
        snils: '111-345-344 11',
        inn: '354790582525',
        medBook: '-',
        job: 'Слесарь',
        subdivision: 'B2С',
        decision: 'Не принят',
        source: 'Авито',
        dateDecision: '12.09.2022',
        note: 'карта на Максима Вилина'
    },
    {
        fullName: 'Сунелик Максим',
        id: 9,
        phone: '89764554323',
        gender: 'мужской',
        dateOfBirth: '09.12.1986',
        metro: 'Василеостровская',
        address: 'Наставников 15 к2 кв 33',
        bank: 'Альфа',
        cardNumber: '3333 4445 4532 3353',
        citizenship: 'РФ',
        passport: '4565 567887',
        issued: 'ТП 44 по СПб и Лен обл',
        limitDate: '12.09.2024',
        placeOfBirth: 'Узбекистан',
        placeOfResidence: 'Наставников 15 к2 кв 33',
        patent: '-',
        patentLimitDate: '-',
        snils: '111-345-344 11',
        inn: '354790582525',
        medBook: '-',
        job: 'Клинер',
        subdivision: 'B2B',
        decision: 'Не принят',
        source: 'Авито',
        dateDecision: '12.09.2022',
        note: 'карта на Максима Вилина'
    },
    {
        fullName: 'Черненко Виталий',
        id: 10,
        phone: '89764554323',
        gender: 'женский',
        dateOfBirth: '09.12.1986',
        metro: 'Девяткино',
        address: 'Наставников 15 к2 кв 33',
        bank: 'Сбер',
        cardNumber: '3333 4445 4532 3353',
        citizenship: 'Казахстан',
        passport: '4565 567887',
        issued: 'ТП 44 по СПб и Лен обл',
        limitDate: '12.09.2024',
        placeOfBirth: 'Узбекистан',
        placeOfResidence: 'Наставников 15 к2 кв 33',
        patent: '-',
        patentLimitDate: '-',
        snils: '111-345-344 11',
        inn: '354790582525',
        medBook: '-',
        job: 'Бригадир',
        subdivision: 'B2С',
        decision: 'Принят',
        source: 'Авито',
        dateDecision: '12.09.2022',
        note: 'карта на Максима Вилина'
    },
    {
        fullName: 'Храбрый Георгий',
        id: 11,
        phone: '89764554323',
        gender: 'женский',
        dateOfBirth: '09.12.1986',
        metro: 'Василеостровская',
        address: 'Наставников 15 к2 кв 33',
        bank: 'ВТБ',
        cardNumber: '3333 4445 4532 3353',
        citizenship: 'Узбекистан',
        passport: '4565 567887',
        issued: 'ТП 44 по СПб и Лен обл',
        limitDate: '12.09.2024',
        placeOfBirth: 'Узбекистан',
        placeOfResidence: 'Наставников 15 к2 кв 33',
        patent: '-',
        patentLimitDate: '-',
        snils: '111-345-344 11',
        inn: '354790582525',
        medBook: '-',
        job: 'Слесарь',
        subdivision: 'B2B',
        decision: 'Не принят',
        source: 'Авито',
        dateDecision: '12.09.2022',
        note: 'карта на Максима Вилина'
    },
    {
        fullName: 'Прямой Иван',
        id: 12,
        phone: '89764554323',
        gender: 'мужской',
        dateOfBirth: '09.12.1986',
        metro: 'Московская',
        address: 'Наставников 15 к2 кв 33',
        bank: 'Сбер',
        cardNumber: '3333 4445 4532 3353',
        citizenship: 'РФ',
        passport: '4565 567887',
        issued: 'ТП 44 по СПб и Лен обл',
        limitDate: '12.09.2024',
        placeOfBirth: 'Узбекистан',
        placeOfResidence: 'Наставников 15 к2 кв 33',
        patent: '-',
        patentLimitDate: '-',
        snils: '111-345-344 11',
        inn: '354790582525',
        medBook: '-',
        job: 'Клинер',
        subdivision: 'B2С',
        decision: 'Принят',
        source: 'Авито',
        dateDecision: '12.09.2022',
        note: 'карта на Максима Вилина'
    },
    {
        fullName: 'Петрова Анна',
        id: 13,
        phone: '89764554323',
        gender: 'женский',
        dateOfBirth: '09.12.1986',
        metro: 'Купчино',
        address: 'Наставников 15 к2 кв 33',
        bank: 'Альфа',
        cardNumber: '3333 4445 4532 3353',
        citizenship: 'Азербайджан',
        passport: '4565 567887',
        issued: 'ТП 44 по СПб и Лен обл',
        limitDate: '12.09.2024',
        placeOfBirth: 'Узбекистан',
        placeOfResidence: 'Наставников 15 к2 кв 33',
        patent: '-',
        patentLimitDate: '-',
        snils: '111-345-344 11',
        inn: '354790582525',
        medBook: '-',
        job: 'Бригадир',
        subdivision: 'B2B',
        decision: 'Принят',
        source: 'Авито',
        dateDecision: '12.09.2022',
        note: 'карта на Максима Вилина'
    },
    {
        fullName: 'Коробач Василий',
        id: 14,
        phone: '89764554323',
        gender: 'мужской',
        dateOfBirth: '09.12.1986',
        metro: 'Ладожская',
        address: 'Наставников 15 к2 кв 33',
        bank: 'ВТБ',
        cardNumber: '3333 4445 4532 3353',
        citizenship: 'РФ',
        passport: '4565 567887',
        issued: 'ТП 44 по СПб и Лен обл',
        limitDate: '12.09.2024',
        placeOfBirth: 'Узбекистан',
        placeOfResidence: 'Наставников 15 к2 кв 33',
        patent: '-',
        patentLimitDate: '-',
        snils: '111-345-344 11',
        inn: '354790582525',
        medBook: '-',
        job: 'Слесарь',
        subdivision: 'B2С',
        decision: 'Не принят',
        source: 'Авито',
        dateDecision: '12.09.2022',
        note: 'карта на Максима Вилина'
    },
    {
        fullName: 'Марковский Георгий',
        id: 15,
        phone: '89764554323',
        gender: 'женский',
        dateOfBirth: '09.12.1986',
        metro: 'Василеостровская',
        address: 'Наставников 15 к2 кв 33',
        bank: 'Сбер',
        cardNumber: '3333 4445 4532 3353',
        citizenship: 'Казахстан',
        passport: '4565 567887',
        issued: 'ТП 44 по СПб и Лен обл',
        limitDate: '12.09.2024',
        placeOfBirth: 'Узбекистан',
        placeOfResidence: 'Наставников 15 к2 кв 33',
        patent: '-',
        patentLimitDate: '-',
        snils: '111-345-344 11',
        inn: '354790582525',
        medBook: '-',
        job: 'Бригадир',
        subdivision: 'B2B',
        decision: 'Принят',
        source: 'Авито',
        dateDecision: '12.09.2022',
        note: 'карта на Максима Вилина'
    },
]