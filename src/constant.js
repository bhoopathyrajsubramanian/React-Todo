import userIcon from "./assets/images/user.svg";
import FlagIcon from "./assets/images/flag.svg";
import HomeIcon from "./assets/images/home.svg";
import SunIcon from "./assets/images/sun.svg";
import StarIcon from "./assets/images/star.svg";
import CalendarIcon from "./assets/images/todo-calender.svg";
import IdeaIcon from "./assets/images/bulb.svg";
import SortIcon from "./assets/images/upanddown.svg";
import TodoIcon from "./assets/images/calender.svg";
import GridIcon from "./assets/images/grid.svg";
import ListIcon from "./assets/images/list.svg";
import DueDateIcon from "./assets/images/calender.svg";
import NotificationIcon from "./assets/images/notification.svg";
import RepeatIcon from "./assets/images/repeat.svg";
import AddFileIcon from "./assets/images/addfile.svg";
import CategoryIcon from "./assets/images/tags.svg";

export const navbarContent = [
  {
    value: "My Day",
    Image: SunIcon,
  },
  {
    value: "Important",
    Image: StarIcon,
  },
  {
    value: "Planned",
    Image: CalendarIcon,
  },
  {
    value: "Assigned to me",
    Image: userIcon,
  },
  {
    value: "Flagged email",
    Image: FlagIcon,
  },
  {
    value: "Task",
    Image: HomeIcon,
  },
];

export const displayOptions = [
  {
    value: "Sort",
    image: SortIcon,
  },
  {
    value: "Group",
    image: TodoIcon,
  },
  {
    value: "Suggestions",
    image: IdeaIcon,
  },
];

export const displayType = [
  {
    value: "Grid",
    image: GridIcon,
  },
  {
    value: "List",
    image: ListIcon,
  },
];

export const DisplayForModifyTodo = [
  {
    value: "Added to My Day",
    image: SunIcon,
  },
  {
    value: "Remind to me",
    image: NotificationIcon,
  },
  {
    value: "Add due date",
    image: DueDateIcon,
  },
  {
    value: "repeat",
    image: RepeatIcon,
  },
  {
    value: "Pick a category",
    image: CategoryIcon,
  },
  {
    value: "Add a file",
    image: AddFileIcon,
  },
];

export const displaySettings = [
  {
    name: "todo",
    image: TodoIcon,
  },
  {
    name: "notifiction",
    image: NotificationIcon,
  },
  {
    name: "repeat",
    image: RepeatIcon,
  },
];
