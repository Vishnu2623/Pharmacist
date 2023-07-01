import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MedicalStorereg from '../Register/MedicalStorereg'
import Pharmacist from '../../Pages/Pharmacist'
import DeliveryBoy from '../Register/DeliveryBoy'
import Login from '../Register/Login'
import PublicUserAbout from '../../Pages/PublicUserAbout'
import PharmacistContact from '../../Pages/PharmacistContact'
import UserReg from '../Register/UserReg'
import Category from '../Navbar/Category'
import Publicuser from '../../Pages/Publicuser'
import AdminPage from '../../Pages/ADMIN/AdminPage'
import ChangePassword from '../Admin/ChangePassword'
import AdChangePassword from '../../Pages/ADMIN/AdChangePassword'
import Cart from '../Navbar/Cart'
import SubCategory from '../Navbar/SubCategory'
import ViewUser from '../Admin/ViewUser'
import AdViewUser from '../../Pages/ADMIN/AdViewUser'
import ApproveMedicalstore from '../Admin/ApproveMedicalstore'
import { Amyprofile } from '../Admin/Amyprofile'
import AdProfile from '../../Pages/ADMIN/AdProfile'
import Addproduct from '../Admin/Addproduct'
import AddCategory from '../Admin/AddCategory'
import AddSubcategory from '../Admin/AddSubcategory'
import ManageCategory from '../Admin/ManageCategory'
import ManageMedicine from '../Admin/ManageMedicine'
import Managesubcategory from '../Admin/ManageSubcategory'
import MedicalStorePage from '../../Pages/MedicalStore/MedicalStorePage'
import RegisterDeliveryBoy from '../Admin/RegisterDeliveryBoy'
import ManageDeliveryboy from '../Admin/ManageDeliveryboy'
import AddMedicine from '../../Pages/ADMIN/AddMedicine'
import ManageProduct from '../../Pages/ADMIN/ManageProduct'
import AddMed from '../../Pages/MedicalStore/AddMed'
import MngMedicine from '../../Pages/MedicalStore/MngMedicine'
import MyProfile from '../MedicalStore/MyProfile'
import Changepass from '../MedicalStore/Changepass'
import ShopProduct from '../Navbar/ShopProduct'
import Addcart from '../Navbar/Addcart'
import Payment from '../Navbar/Payment'
import Orderconformation from '../Navbar/Orderconformation'
import Myorder from '../Navbar/Myorder'
import OrdersHistory from '../Navbar/OrdersHistory'
import Productlist from '../Navbar/Productlist'
import Wishlist from '../Navbar/Wishlist'
import Uploadprescription from '../Navbar/Uploadprescription'
import Homepage from '../../Pages/DeliveryBoy/Homepage'
import AssignDeliveryboy from '../Admin/AssignDeliveryboy'
import EditCategory from '../Admin/EditCategory'
import Editsubcategory from '../Admin/Editsubcategory'
import Editaddedmedicine from '../Admin/Editaddedmedicine'
import Editmedicine from '../MedicalStore/Editmedicine'
import OrderTracking from '../Navbar/Ordertracking'
import Deliveryboyhome from '../DeliveryBoymodule/Deliveryboyhome'
import BoyProfile from '../DeliveryBoymodule/BoyProfile'
import Deliverboychangepassword from '../DeliveryBoymodule/Deliveryboychangepassword'
import ManageDelivery from '../DeliveryBoymodule/ManageDelivery'
import PaymentCustomers from '../MedicalStore/PaymentCustomers'
import Managemedicineorder from '../MedicalStore/Managemedicineorder'
import Viewprescriptionorder from '../MedicalStore/Viewprescriptionorder'

const Mainrouter = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Pharmacist/>}/>
            <Route path="Medicalreg" element={<MedicalStorereg/>}/>
            <Route path="Deliveryboy" element={<DeliveryBoy/>}/>

            <Route path="Userreg" element={<UserReg/>}/>
            <Route path="Login" element={<Login/>}/>
            <Route path="About" element={<PublicUserAbout/>}/>
            <Route path="Contact" element={<PharmacistContact/>}/>
            <Route path="Ecommerce" element={<Publicuser/>}/>
            <Route path="Category2" element={<Category/>}/>
            <Route path="Adm" element={<AdminPage/>}/>
            <Route path="store" element={<MedicalStorePage/>}/>

            <Route path="Cpassword" element={<AdChangePassword/>}/>
            <Route path="Cpasswor" element={<ChangePassword/>}/>

            <Route path="Ecart" element={<Cart/>}/>
            <Route path="Subcategory" element={<SubCategory/>}/>
            <Route path="Viewuser" element={<AdViewUser/>}/>
            <Route path="Approve" element={<ApproveMedicalstore/>}/>
            <Route path="AProfile" element={<AdProfile/>}/>
            <Route path="Addmedicine" element={<AddMedicine/>}/>
            <Route path="Addcategory" element={<AddCategory/>}/>
            <Route path="Addsubcategory" element={<AddSubcategory/>}/>
            <Route path="Managemedicine" element={<ManageProduct/>}/>
            <Route path="Managecategory" element={<ManageCategory/>}/>
            <Route path="Managesubcategory" element={<Managesubcategory/>}/>
            <Route path="RegDeliveryBoy" element={<RegisterDeliveryBoy/>}/>
            <Route path="mngDeliveryBoy" element={<ManageDeliveryboy/>}/>
            <Route path="Storeaddmedicine" element={<AddMed/>}/>
            <Route path="managestock" element={<MngMedicine/>}/>
            <Route path="storeprofile" element={<MyProfile/>}/>
            <Route path="storepasschange" element={<Changepass/>}/>
            <Route path="shop" element={<ShopProduct/>}/>
            <Route path="addcart" element={<Addcart/>}/>
            <Route path="pay" element={<Payment/>}/>
            <Route path="thanks" element={<Orderconformation/>}/>
            <Route path="Order" element={<Myorder/>}/>
            <Route path="Orders" element={<OrdersHistory/>}/>
            <Route path="subcategory" element={<SubCategory/>}/>
            <Route path="productlist" element={<Productlist/>}/>
            <Route path="wishlist" element={<Wishlist/>}/>
            <Route path="upload" element={<Uploadprescription/>}/>
            <Route path="Delivery" element={<Homepage/>}/>
            <Route path="Assign" element={<AssignDeliveryboy/>}/>
            <Route path="editcategory" element={<EditCategory/>}/>
            <Route path="editsubcategory" element={<Editsubcategory/>}/>
            <Route path="editaddedmedicine" element={<Editaddedmedicine/>}/>
            <Route path="editmedicine" element={<Editmedicine/>}/>
            <Route path="ordertrack" element={<OrderTracking/>}/>
            <Route path="deliveryboyprofile" element={<BoyProfile/>}/>
            <Route path="DBchangepassword" element={<Deliverboychangepassword/>}/>
            <Route path="managedelivery" element={<ManageDelivery/>}/>
            <Route path="viewpaymentcustomers" element={<PaymentCustomers/>}/>
            <Route path="managemedicineorder" element={<Managemedicineorder/>}/>
            <Route path="viewprescriptionorder" element={<Viewprescriptionorder/>}/>
            









































        </Routes>
    </div>
  )
}

export default Mainrouter