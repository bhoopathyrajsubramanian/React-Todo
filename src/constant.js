import userIcon from './Assets/user.svg'
import FlagIcon from './Assets/flag.svg'
import HomeIcon from './Assets/home.svg'
import SunIcon from "./Assets/sun.svg"
import StarIcon from "./Assets/star.svg"
import CalendarIcon from "./Assets/todo-calender.svg"
import IdeaIcon from './Assets/bulb.svg'
import SortIcon from './Assets/upanddown.svg'
import TodoIcon from './Assets/calender.svg'
import GridIcon from './Assets/grid.svg'
import ListIcon from './Assets/list.svg'

export const navbarContent = [{
  value: "My Day",
  Image: SunIcon

},
{
  value: "Important",
  Image: StarIcon

},
{
  value: "Planned",
  Image: CalendarIcon
},
{
  value: "Assigned to me",
  Image: userIcon
},
{
  value: "Flagged email",
  Image: FlagIcon

},
{
  value: "Task",
  Image: HomeIcon

}

]

export const displayOptions = [
  {
    value: 'Sort',
    image: SortIcon
  },
  {
    value: 'Group',
    image: TodoIcon
  },
  {
    value: 'Suggestions',
    image: IdeaIcon
  }
]

export const displayType = [
  {
    value: 'Grid',
    image: GridIcon
  },
  {
    value: 'List',
    image: ListIcon
  }
]

