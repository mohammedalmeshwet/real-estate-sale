import React, {useState,useEffect} from 'react'
import HomeMember from './HomeMember';
import EntryData from './EntryData';
import SaleForm from './SaleForm';
//import axios from 'axios';
import data from '../local-json/data';
const Home = (props) =>{

    const [memberInfo,setmemberInfo] = useState([]);
    const [Edit,setEdit] = useState();
    const [Sale,setSale] = useState();
    const [companyRatio] = useState(0.5);

    useEffect(() => {
        console.log(data)
        setmemberInfo(data) 
        //   axios.get(URL).then(response =>{
        //       setmemberInfo(response.data)   
        //   })
     },[])

    const handleRemove = (id) => {
        const del = memberInfo.filter(item => id !== item.id)
        setmemberInfo(del)

    }

    const handleEdit = (id) => {
        const memberEdit = memberInfo.filter(item => id === item.id)[0]
        setEdit(<EntryData id={memberEdit.id} img={memberEdit.img} text={props.text}/>);
    }

    const handleSale= (id) => {
        const memberSale = memberInfo.filter(item => id === item.id)[0]
        setSale(<SaleForm id={memberSale.id} img={memberSale.img} text={props.text} finalPrice= {companyRatio*memberSale.price+memberSale.price} />);
    }


    const typeClick = (id) => {
        if(props.text === "Delete"){
            handleRemove(id);
        }else if(props.text === "Edit"){
            handleEdit(id);
        }else if(props.text === "Sale"){
            handleSale(id);
        }
    }

    const mapping= (x) => {
            const members = x.map(member => <HomeMember
                    key={member.id}
                    id = {member.id}
                    img={member.img}
                    address={member.address}
                    numberTheShares={member.numberTheShares}
                    price = {member.price}
                    onclick = {() => typeClick(member.id)}
                    text = {props.text}
                />);
        return members
    }
    return(
            <div className="row">
                {Edit}
                {Sale}
                {mapping(memberInfo)}
            </div>
    )
}
export default Home;

