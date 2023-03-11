import Home from "./Pages/Home"
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import "./App.css"
import Priceing from "./Pages/Priceing";
import Aboutus from "./Pages/Aboutus";
import Contactus from "./Pages/Contactus";
import Error404 from "./Pages/Error404";
import  Login  from "./Pages/Login";
import Register from "./Pages/Register";
import Reviews  from "./Pages/Reviews";
import Category from "./Pages/Category";
import Admin  from "./Admin/Pages/Dashboard";
import AdminLogin  from "./Admin/Pages/Login";
import Settings from "./Admin/Pages/UserSetting";
import RegisterUsers from "./Admin/Pages/UserRegister";
import ProtectedRoute from "./Admin/Components/ProtectedRoute";
import EditAdminProfile from "./Admin/Pages/ProfileSetting";
import Categori from "./Admin/Pages/Category";
import CompanyListing from "./Admin/Pages/CompanyListing";
import CompanyDetails from "./Admin/Pages/CompanyDetails";
import Directory from "./Pages/Directory";
import DirectoryDetails from "./Pages/DetailsDirectory";
import CompanyEdit from "./Admin/Pages/EditCompany";
import Testimonial from "./Admin/Pages/Testimonial"
import Review from "./Admin/Pages/Reviews"
import AboutusDetails from "./Admin/Pages/Aboutus"
function App() {
  return (
    <>
     <Router>
      <Switch>

      <Route exact path="/register" component={Register}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/pricing" component={Priceing}></Route>
      <Route exact path="/aboutus" component={Aboutus}></Route>
      <Route exact path="/reviews" component={Reviews}></Route>
      <Route exact path="/contactus" component={Contactus}></Route>
      <Route exact path="/category" component={Category}></Route>
      <Route exact path="/category/directory/:subcategory" component={Directory}></Route>
      <Route exact path="/category/directory/locaiton/:location" component={Directory}></Route>
      <Route exact path="/company/details/:id" component={DirectoryDetails}></Route>
      {/* =======================Admin================================= */}
      <Route exact path="/admin/login" component={AdminLogin}></Route>
      <ProtectedRoute exact path="/admin" component={CompanyListing} />
      <ProtectedRoute exact path="/admin_setting" component={Settings} />
      <ProtectedRoute exact path="/categories" component={Categori} />
      <ProtectedRoute exact path="/testimonial" component={Testimonial} />
      <ProtectedRoute exact path="/aboutusDetails" component={AboutusDetails} />

      <ProtectedRoute exact path="/Client/Reviews" component={Review} />
      <ProtectedRoute exact path="/companyListing" component={CompanyListing} />
      <ProtectedRoute exact path="/companyDetails" component={CompanyDetails} />
      <ProtectedRoute exact path="/companyEdit/:id" component={CompanyEdit} />
      <ProtectedRoute exact path="/admin_setting/register" component={RegisterUsers} />
      <ProtectedRoute exact path="/admin_setting/edit_profile" component={EditAdminProfile} />
  
      {/* =====================Admin======================================= */}


      <Route path='*' component={Error404}></Route>
     
      </Switch>
 
     </Router>

    </>
  );
}

export default App;
