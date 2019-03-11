export default {
    navItems: state => state.rootData.map(item => ({ id:item.id, text:item.title })),
    contentItem: state => state.rootData.find(item => item.id === state.contentId)
}
