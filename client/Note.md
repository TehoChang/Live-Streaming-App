update 0828

the first step of building this App

# step1: 先把基本react scaffold寫出來
1 ReactDOM.render(<App/>,documnet.querySelector('#root'))

2 react-router-dom，Navigating around component
<BrouserRouter>
 <Route path="/" exact component={StreamList}>

3 always visible component -> Header

- 问题：公司内部用的app应该用什么Authentication解决方案

4 重點redux architecture design
- 1 将用户资料储存在redux。
Q1 已经储存在<GoogleAuth>，为什么还需要储存在redux?
    为了方便其他组件都能取得用户的登陆状态，进而进行操作


 怎么存？
- 让googleAuth组件从store拿到用户是否登陆的state，
当用户点击singIn/signOut的时候，call an actionCreator
- 在googleAuth组件调用actionCreator, reducer会针对相应的action.type進行處理，整理store中的state




