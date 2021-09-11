import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import EditProfile from '../components/EditProfile';
import ViewProfile from '../components/ViewProfile';

const Profile = () => {
  const { path, url } = useRouteMatch();
  console.log([useRouteMatch(), path, url]);
  return (
    <div>
      <h1>Profile</h1>
      <ul>
        <li className='mr'>
          <Link to={`${url}/view-profile`}>View Profile</Link>
        </li>
        <li>
          <Link to={`${url}/edith-profile`}>Edit your Profile</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${path}/view-profile`} exact component={ViewProfile} />
        <Route path={`${path}/edith-profile`} exact component={EditProfile} />
      </Switch>
    </div>
  );
};

export default Profile;
