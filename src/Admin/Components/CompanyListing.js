import React, { useState, useEffect } from 'react'
import Avatar from '@mui/material/Avatar';
import { baseurl } from '../../baseurl/baseurl';
import { NavLink } from 'react-router-dom';
import axios from "axios";
import { categorydata } from '../../Categorydata'

import swal from 'sweetalert';
const CompanyListing = () => {
  const [getdata, setdata] = useState(categorydata)
  const [getdefaultdata, setdefaultdata] = useState(categorydata)
  const test = getdata.map((obj) => obj.name)
  const [getcategoryname, setcategoryname] = useState([...new Set(test)])
  // ===========================================================
  const [file, setFile] = useState(null);
  const [image, setimage] = useState("");
  const [getname, setname] = useState("")
  const [getcategory, setcategory] = useState("")
  const [getsubcategory, setsubcategory] = useState("")
  const [getaddress, setaddress] = useState("")
  const [getcity, setcity] = useState("")
  const [getemail, setemail] = useState("")
  const [getmobile, setmobile] = useState("")
  const [getphone, setphone] = useState("")
  const [getwebsite, setwebsite] = useState("")
  const [gettiming, settiming] = useState("")
  const [getcontractperson, setcontractperson] = useState("")
  const [getestablish, setestablish] = useState("")
  const [getemployees, setemployees] = useState("")
  const [getdescription, setdescription] = useState("")
  
  const onChangimage = (events) => {
    setimage(events.target.files[0]);
    if (events.target.files.length > 0) {
      const file = URL.createObjectURL(events.target.files[0]);
      setFile(file);

    }
  };
  
  const changeOnClick = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", getname);
    formData.append("category", getcategory);
    formData.append("subcategory", getsubcategory);
    formData.append("address", getaddress);
    formData.append("city", getcity);
    formData.append("email", getemail);
    formData.append("mobile", getmobile);
    formData.append("phone", getphone);
    formData.append("website", getwebsite);
    formData.append("timing", gettiming);
    formData.append("contractperson", getcontractperson);
    formData.append("establish", getestablish);
    formData.append("employees", getemployees);
    formData.append("description", getdescription);
    formData.append("image", image);

    axios
      .post(baseurl + "/register/company", formData)
      .then((res) => {

        swal("Your Record save successfully!", {
          icon: "success",
          buttons: false,
          timer: 800,
          margin: "300px"
        }).then((response)=>{
          window.location.reload(true)
        });

      })
      .catch((err) => {
       swal(err.message,{
        icon:"error"
       })
      });
  };
  const [dropdown, setdropdown] = useState(true)
  const [filterdata, setfilterdata] = useState(getdata)
  const onchangedropdown = (e) => {
    const cate = e.target.value;
    setcategory(cate)
    setdropdown(false)
    const Filterdatais = getdefaultdata.filter((item) => {
      if (item.name.toLowerCase() === cate.toLowerCase()) {
        return item
      }
    })
    setfilterdata(Filterdatais)

  }

  const subcategoryvalue = (e) => {
    const subcate = e.target.value;
    setsubcategory(subcate);
  }

  return (
    <>
    
      <div className='content-wrapper bg-white'>
        <div className="content-header mt-5 bg-white">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Company Listing</h1>
              </div>{/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><NavLink to="/admin">Home</NavLink></li>
                  <li className="breadcrumb-item active">Company Listing</li>
                </ol>
              </div>{/* /.col */}
            </div>{/* /.row */}
          </div>{/* /.container-fluid */}
        </div>

        <div className='bg-white border-secondary p-4 p-lg-5 pt-2 text-center'>
          <div className=' d-flex flex-column align-items-center justify-content-center'>

          </div>
          <div className='text-start mt-2'>
            <form onSubmit={changeOnClick}>
              <div className="mb-3 d-flex align-items-center ">
                <div className='mb-1 mx-2 w-50'>
                  <p htmlFor="exampleInputEmail1" className="form-label w-100">Category</p>
                  <select onChange={onchangedropdown} className='form-control shadow-none'>
                    <option disabled>Select Category</option>
                    {
                      getcategoryname.map((element, id) => {

                        return (
                          <>
                            <option className='text-dark' value={element}

                            >{element}</option>
                          </>
                        )
                      })
                    }


                  </select>
                </div>
                <div className='mb-1 mx-2 w-50'>
                  <p htmlFor="exampleInputEmail1" className="form-label w-100">Subcategory</p>
                  <select disabled={dropdown} onChange={subcategoryvalue} className='form-control shadow-none'>
                    <option>Select the subcategory</option>
                    {

                      filterdata.map((element, id) => {

                        return (

                          <>
                            <option className='text-dark' value={element.subcategories}

                            >{element.subcategories}</option>
                          </>
                        )
                      })
                    }

                  </select>
                </div>


              </div>


              <div className="mb-3 d-flex align-items-center ">
                <div className='mb-1 w-100'>
                  <p htmlFor="exampleInputEmail1" className="form-label w-100">First Name</p>
                  <input type="text" required className="form-control shadow-none" value={getname} onChange={(e) => setname(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Roberts LLC' />
                </div>
              </div>
              <div className="mb-3">
                <p className="form-label">Address</p>
                <input type="text" className="form-control shadow-none" required id="exampleFormControlInput1" value={getaddress} onChange={(e) => setaddress(e.target.value)} placeholder="533 E. College Rd.Munster, IN 46321" />
              </div>
              <div className="mb-3">
                <p className="form-label">City</p>
                <select name="Location" className='form-control shadow-none' id="Location" onChange={(e) => setcity(e.target.value)}>
                  <option value="" disabled selected>Select The City</option>
                  <option value="Islamabad">Islamabad</option>

                  <option value="Ahmed Nager Chatha">Ahmed Nager Chatha</option>
                  <option value="Ahmadpur East">Ahmadpur East</option>
                  <option value="Ali Khan Abad">Ali Khan Abad</option>
                  <option value="Alipur">Alipur</option>
                  <option value="Arifwala">Arifwala</option>
                  <option value="Attock">Attock</option>
                  <option value="Bhera">Bhera</option>
                  <option value="Bhalwal">Bhalwal</option>
                  <option value="Bahawalnagar">Bahawalnagar</option>
                  <option value="Bahawalpur">Bahawalpur</option>
                  <option value="Bhakkar">Bhakkar</option>
                  <option value="Burewala">Burewala</option>
                  <option value="Chillianwala">Chillianwala</option>
                  <option value="Chakwal">Chakwal</option>
                  <option value="Chichawatni">Chichawatni</option>
                  <option value="Chiniot">Chiniot</option>
                  <option value="Chishtian">Chishtian</option>
                  <option value="Daska">Daska</option>
                  <option value="Darya Khan">Darya Khan</option>
                  <option value="Dera Ghazi Khan">Dera Ghazi Khan</option>
                  <option value="Dhaular">Dhaular</option>
                  <option value="Dina">Dina</option>
                  <option value="Dinga">Dinga</option>
                  <option value="Dipalpur">Dipalpur</option>
                  <option value="Faisalabad">Faisalabad</option>
                  <option value="Ferozewala">Ferozewala</option>
                  <option value="Fateh Jhang">Fateh Jang</option>
                  <option value="Ghakhar Mandi">Ghakhar Mandi</option>
                  <option value="Gojra">Gojra</option>
                  <option value="Gujranwala">Gujranwala</option>
                  <option value="Gujrat">Gujrat</option>
                  <option value="Gujar Khan">Gujar Khan</option>
                  <option value="Hafizabad">Hafizabad</option>
                  <option value="Haroonabad">Haroonabad</option>
                  <option value="Hasilpur">Hasilpur</option>
                  <option value="Haveli Lakha">Haveli Lakha</option>
                  <option value="Jatoi">Jatoi</option>
                  <option value="Jalalpur">Jalalpur</option>
                  <option value="Jattan">Jattan</option>
                  <option value="Jampur">Jampur</option>
                  <option value="Jaranwala">Jaranwala</option>
                  <option value="Jhang">Jhang</option>
                  <option value="Jhelum">Jhelum</option>
                  <option value="Kalabagh">Kalabagh</option>
                  <option value="Karor Lal Esan">Karor Lal Esan</option>
                  <option value="Kasur">Kasur</option>
                  <option value="Kamalia">Kamalia</option>
                  <option value="Kamoke">Kamoke</option>
                  <option value="Khanewal">Khanewal</option>
                  <option value="Khanpur">Khanpur</option>
                  <option value="Kharian">Kharian</option>
                  <option value="Khushab">Khushab</option>
                  <option value="Kot Addu">Kot Addu</option>
                  <option value="Jauharabad">Jauharabad</option>
                  <option value="Lahore">Lahore</option>
                  <option value="Lalamusa">Lalamusa</option>
                  <option value="Layyah">Layyah</option>
                  <option value="Liaquat Pur">Liaquat Pur</option>
                  <option value="Lodhran">Lodhran</option>
                  <option value="Malakwal">Malakwal</option>
                  <option value="Mamoori">Mamoori</option>
                  <option value="Mailsi">Mailsi</option>
                  <option value="Mandi Bahauddin">Mandi Bahauddin</option>
                  <option value="Mian Channu">Mian Channu</option>
                  <option value="Mianwali">Mianwali</option>
                  <option value="Multan">Multan</option>
                  <option value="Murree">Murree</option>
                  <option value="Muridke">Muridke</option>
                  <option value="Mianwali Bangla">Mianwali Bangla</option>
                  <option value="Muzaffargarh">Muzaffargarh</option>
                  <option value="Narowal">Narowal</option>
                  <option value="Nankana Sahib">Nankana Sahib</option>
                  <option value="Okara">Okara</option>
                  <option value="Renala Khurd">Renala Khurd</option>
                  <option value="Pakpattan">Pakpattan</option>
                  <option value="Pattoki">Pattoki</option>
                  <option value="Pir Mahal">Pir Mahal</option>
                  <option value="Qaimpur">Qaimpur</option>
                  <option value="Qila Didar Singh">Qila Didar Singh</option>
                  <option value="Rabwah">Rabwah</option>
                  <option value="Raiwind">Raiwind</option>
                  <option value="Rajanpur">Rajanpur</option>
                  <option value="Rahim Yar Khan">Rahim Yar Khan</option>
                  <option value="Rawalpindi">Rawalpindi</option>
                  <option value="Sadiqabad">Sadiqabad</option>
                  <option value="Safdarabad">Safdarabad</option>
                  <option value="Sahiwal">Sahiwal</option>
                  <option value="Sangla Hill">Sangla Hill</option>
                  <option value="Sarai Alamgir">Sarai Alamgir</option>
                  <option value="Sargodha">Sargodha</option>
                  <option value="Shakargarh">Shakargarh</option>
                  <option value="Sheikhupura">Sheikhupura</option>
                  <option value="Sialkot">Sialkot</option>
                  <option value="Sohawa">Sohawa</option>
                  <option value="Soianwala">Soianwala</option>
                  <option value="Siranwali">Siranwali</option>
                  <option value="Talagang">Talagang</option>
                  <option value="Taxila">Taxila</option>
                  <option value="Toba Tek Singh">Toba Tek Singh</option>
                  <option value="Vehari">Vehari</option>
                  <option value="Wah Cantonment">Wah Cantonment</option>
                  <option value="Wazirabad">Wazirabad</option>
                  <option value="" disabled>Sindh Cities</option>
                  <option value="Badin">Badin</option>
                  <option value="Bhirkan">Bhirkan</option>
                  <option value="Rajo Khanani">Rajo Khanani</option>
                  <option value="Chak">Chak</option>
                  <option value="Dadu">Dadu</option>
                  <option value="Digri">Digri</option>
                  <option value="Diplo">Diplo</option>
                  <option value="Dokri">Dokri</option>
                  <option value="Ghotki">Ghotki</option>
                  <option value="Haala">Haala</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Islamkot">Islamkot</option>
                  <option value="Jacobabad">Jacobabad</option>
                  <option value="Jamshoro">Jamshoro</option>
                  <option value="Jungshahi">Jungshahi</option>
                  <option value="Kandhkot">Kandhkot</option>
                  <option value="Kandiaro">Kandiaro</option>
                  <option value="Karachi">Karachi</option>
                  <option value="Kashmore">Kashmore</option>
                  <option value="Keti Bandar">Keti Bandar</option>
                  <option value="Khairpur">Khairpur</option>
                  <option value="Kotri">Kotri</option>
                  <option value="Larkana">Larkana</option>
                  <option value="Matiari">Matiari</option>
                  <option value="Mehar">Mehar</option>
                  <option value="Mirpur Khas">Mirpur Khas</option>
                  <option value="Mithani">Mithani</option>
                  <option value="Mithi">Mithi</option>
                  <option value="Mehrabpur">Mehrabpur</option>
                  <option value="Moro">Moro</option>
                  <option value="Nagarparkar">Nagarparkar</option>
                  <option value="Naudero">Naudero</option>
                  <option value="Naushahro Feroze">Naushahro Feroze</option>
                  <option value="Naushara">Naushara</option>
                  <option value="Nawabshah">Nawabshah</option>
                  <option value="Nazimabad">Nazimabad</option>
                  <option value="Qambar">Qambar</option>
                  <option value="Qasimabad">Qasimabad</option>
                  <option value="Ranipur">Ranipur</option>
                  <option value="Ratodero">Ratodero</option>
                  <option value="Rohri">Rohri</option>
                  <option value="Sakrand">Sakrand</option>
                  <option value="Sanghar">Sanghar</option>
                  <option value="Shahbandar">Shahbandar</option>
                  <option value="Shahdadkot">Shahdadkot</option>
                  <option value="Shahdadpur">Shahdadpur</option>
                  <option value="Shahpur Chakar">Shahpur Chakar</option>
                  <option value="Shikarpaur">Shikarpaur</option>
                  <option value="Sukkur">Sukkur</option>
                  <option value="Tangwani">Tangwani</option>
                  <option value="Tando Adam Khan">Tando Adam Khan</option>
                  <option value="Tando Allahyar">Tando Allahyar</option>
                  <option value="Tando Muhammad Khan">Tando Muhammad Khan</option>
                  <option value="Thatta">Thatta</option>
                  <option value="Umerkot">Umerkot</option>
                  <option value="Warah">Warah</option>
                  <option value="" disabled>Khyber Cities</option>
                  <option value="Abbottabad">Abbottabad</option>
                  <option value="Adezai">Adezai</option>
                  <option value="Alpuri">Alpuri</option>
                  <option value="Akora Khattak">Akora Khattak</option>
                  <option value="Ayubia">Ayubia</option>
                  <option value="Banda Daud Shah">Banda Daud Shah</option>
                  <option value="Bannu">Bannu</option>
                  <option value="Batkhela">Batkhela</option>
                  <option value="Battagram">Battagram</option>
                  <option value="Birote">Birote</option>
                  <option value="Chakdara">Chakdara</option>
                  <option value="Charsadda">Charsadda</option>
                  <option value="Chitral">Chitral</option>
                  <option value="Daggar">Daggar</option>
                  <option value="Dargai">Dargai</option>
                  <option value="Darya Khan">Darya Khan</option>
                  <option value="Dera Ismail Khan">Dera Ismail Khan</option>
                  <option value="Doaba">Doaba</option>
                  <option value="Dir">Dir</option>
                  <option value="Drosh">Drosh</option>
                  <option value="Hangu">Hangu</option>
                  <option value="Haripur">Haripur</option>
                  <option value="Karak">Karak</option>
                  <option value="Kohat">Kohat</option>
                  <option value="Kulachi">Kulachi</option>
                  <option value="Lakki Marwat">Lakki Marwat</option>
                  <option value="Latamber">Latamber</option>
                  <option value="Madyan">Madyan</option>
                  <option value="Mansehra">Mansehra</option>
                  <option value="Mardan">Mardan</option>
                  <option value="Mastuj">Mastuj</option>
                  <option value="Mingora">Mingora</option>
                  <option value="Nowshera">Nowshera</option>
                  <option value="Paharpur">Paharpur</option>
                  <option value="Pabbi">Pabbi</option>
                  <option value="Peshawar">Peshawar</option>
                  <option value="Saidu Sharif">Saidu Sharif</option>
                  <option value="Shorkot">Shorkot</option>
                  <option value="Shewa Adda">Shewa Adda</option>
                  <option value="Swabi">Swabi</option>
                  <option value="Swat">Swat</option>
                  <option value="Tangi">Tangi</option>
                  <option value="Tank">Tank</option>
                  <option value="Thall">Thall</option>
                  <option value="Timergara">Timergara</option>
                  <option value="Tordher">Tordher</option>
                  <option value="" disabled>Balochistan Cities</option>
                  <option value="Awaran">Awaran</option>
                  <option value="Barkhan">Barkhan</option>
                  <option value="Chagai">Chagai</option>
                  <option value="Dera Bugti">Dera Bugti</option>
                  <option value="Gwadar">Gwadar</option>
                  <option value="Harnai">Harnai</option>
                  <option value="Jafarabad">Jafarabad</option>
                  <option value="Jhal Magsi">Jhal Magsi</option>
                  <option value="Kacchi">Kacchi</option>
                  <option value="Kalat">Kalat</option>
                  <option value="Kech">Kech</option>
                  <option value="Kharan">Kharan</option>
                  <option value="Khuzdar">Khuzdar</option>
                  <option value="Killa Abdullah">Killa Abdullah</option>
                  <option value="Killa Saifullah">Killa Saifullah</option>
                  <option value="Kohlu">Kohlu</option>
                  <option value="Lasbela">Lasbela</option>
                  <option value="Lehri">Lehri</option>
                  <option value="Loralai">Loralai</option>
                  <option value="Mastung">Mastung</option>
                  <option value="Musakhel">Musakhel</option>
                  <option value="Nasirabad">Nasirabad</option>
                  <option value="Nushki">Nushki</option>
                  <option value="Panjgur">Panjgur</option>
                  <option value="Pishin Valley">Pishin Valley</option>
                  <option value="Quetta">Quetta</option>
                  <option value="Sherani">Sherani</option>
                  <option value="Sibi">Sibi</option>
                  <option value="Sohbatpur">Sohbatpur</option>
                  <option value="Washuk">Washuk</option>
                  <option value="Zhob">Zhob</option>
                  <option value="Ziarat">Ziarat</option>
                </select>
              </div>
              <div className="mb-3">
                <p htmlFor="exampleFormControlInput1" className="form-label">Email address</p>
                <input type="email" className="form-control shadow-none" required id="exampleFormControlInput1" value={getemail} onChange={(e) => setemail(e.target.value)} placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <p htmlFor="exampleFormControlInput1" className="form-label">Mobile Number</p>
                <input type="tel" className="form-control shadow-none" required id="exampleFormControlInput1" value={getmobile} onChange={(e) => setmobile(e.target.value)} placeholder="+92312345678" />
              </div>
              <div className="mb-3">
                <p htmlFor="exampleFormControlInput1" className="form-label">Telephone Number</p>
                <input type="tel" className="form-control shadow-none" required id="exampleFormControlInput1" value={getphone} onChange={(e) => setphone(e.target.value)} placeholder="+92312345678" />
              </div>


              <div className="mb-3">
                <p htmlFor="exampleInputPassword1" className="form-label">Website</p>
                <input type="url" required className="form-control shadow-none" value={getwebsite} onChange={(e) => setwebsite(e.target.value)} id="exampleInputPassword1" placeholder='https://netsoltech.com/' />
              </div>
              <div className="mb-3">
                <p htmlFor="exampleInputPassword1" className="form-label">Timing</p>
                <input type="text" required className="form-control shadow-none" value={gettiming} onChange={(e) => settiming(e.target.value)} id="exampleInputPassword1" placeholder='09:00 am - 6:00 pm' />
              </div>
              <div className="mb-3">
                <p htmlFor="exampleFormControlInput1" className="form-label">Contact Person</p>
                <input type="text" className="form-control shadow-none" required id="exampleFormControlInput1" value={getcontractperson} onChange={(e) => setcontractperson(e.target.value)} placeholder="Johan" />
              </div>
              <div className="mb-3">
                <p htmlFor="exampleFormControlInput1" className="form-label">Establishment Year</p>
                <input type="month" required className="form-control shadow-none" id="exampleFormControlInput1" value={getestablish} onChange={(e) => setestablish(e.target.value)} placeholder="February 2023" />
              </div>
              <div className="mb-3">
                <p htmlFor="exampleFormControlInput1" className="form-label">Employees</p>
                <input type="text" required className="form-control shadow-none" id="exampleFormControlInput1" value={getemployees} onChange={(e) => setemployees(e.target.value)} placeholder="51-100" />
              </div>
              <div className="mb-3">
                <p htmlFor="exampleFormControlInput1" className="form-label">Description</p>
                <textarea className='form-control shadow-none' placeholder='Write about your company' value={getdescription} onChange={(e) => setdescription(e.target.value)} rows={5}></textarea>
              </div>
              <div className='d-flex justify-content-between'>
                <div className='mb-3'>



                  <p htmlFor="exampleFormControlInput1" className="form-label ">Choose your image</p>
                  <input className='border border-1 mb-3 ' required onChange={onChangimage} accept="image/*" single type="file" />
                </div>
                <div><img src={file} width={100} height={100} /></div>
              </div>

              <button type="submit" className="btn btn-primary w-100" >Register</button>
            </form>

          </div>


        </div>
      </div>

    </>
  )
}

export default CompanyListing