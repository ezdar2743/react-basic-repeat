import Users from './pages/users';
import Animation from './pages/animation'
import Home from './pages/home';
import User from './pages/user'

export default [
    {
        path: "/",
        component: Home,

    },
    {
        path: "/Animation",
        component: Animation,

    },
    {
        path: "/Users",
        component: Users,

    },
    {
        path: "/Users/:id",
        component: User,

    },

]