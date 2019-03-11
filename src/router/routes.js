
export default [
    {
        path: "/",
        meta: { title: "欢迎" },
        component: () => import('../pages/firstPage')
    },
    {
        path: "/home",
        component: () => import('../pages/homeContainer'),
        children: [
            {
                path: "",
                meta: { title: "主页" },
                component: () => import('../pages/homePage'),
            },
            {
                path: "content",
                name: "contentPage",
                meta: { title: "内容" },
                component: () => import('../pages/contentPage')
            }
        ]
    },
]
