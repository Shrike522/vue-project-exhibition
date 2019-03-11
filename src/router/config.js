export default router => {
    router.beforeEach ((to, form ,next) => {
        const { title } = to.meta
        if (title) document.title = title
        next()
    })
}
