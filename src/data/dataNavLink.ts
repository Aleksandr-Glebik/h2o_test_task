import SvgCalendar from '../assets/img/calendar.svg'
import SvgNote from '../assets/img/note.svg'
import SvgData from '../assets/img/data.svg'
import SvgUsers from '../assets/img/users.svg'
import SvgMoney from '../assets/img/money.svg'
import SvgStatistic from '../assets/img/statistic.svg'
import SvgSetting from '../assets/img/settings.svg'

export type navLinkType = {
    id: number
    title: string
    href: string
    srcSvg: string
}

export type dataNavLinkType = navLinkType[]

export const dataNavLink: dataNavLinkType = [
    {
        id: 1,
        title: 'calendar',
        href: '/calendar',
        srcSvg: SvgCalendar
    },
    {
        id: 2,
        title: 'note',
        href: '/note',
        srcSvg: SvgNote
    },
    {
        id: 3,
        title: 'data',
        href: '/data',
        srcSvg: SvgData
    },
    {
        id: 4,
        title: 'users',
        href: '/users',
        srcSvg: SvgUsers
    },
    {
        id: 5,
        title: 'money',
        href: '/money',
        srcSvg: SvgMoney
    },
    {
        id: 6,
        title: 'statistic',
        href: '/statistic',
        srcSvg: SvgStatistic
    },
    {
        id: 7,
        title: 'settings',
        href: '/settings',
        srcSvg: SvgSetting
    }
]