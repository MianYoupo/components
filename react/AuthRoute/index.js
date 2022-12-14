import { Route, Redirect } from 'react-router-dom'
import { isAuth } from '@/utils/token'

// https://reactrouter.com/web/example/auth-workflow
// https://stackoverflow.com/a/64307442/15443637
const AuthRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (!isAuth()) {
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: {
                  from: props.location.pathname
                }
              }}
            />
          )
        }
        return <Component {...props} />
      }}
    />
  )
}

export { AuthRoute }
