import { useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { API_URLS } from "../services/api.urls";
import useApi from "../hooks/useApi";
import { Checkbox, Box, List, ListItem } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";
import Email from "./Email";



const Emails = () => {

    const { openDrawer } = useOutletContext();

    const { type } = useParams();

    const getEmailsService = useApi(API_URLS.getEmailFromType);

    useEffect(() => {
        getEmailsService.call({}, type);
    }, [type])

    return (
    <Box style={openDrawer ? { marginLeft: 250, width: '100%' } : { width: '100%' }}>
        <Box style={{padding:'20px 10px 0 10px', display:'flex', alignItems:'center'}}>
            <Checkbox size="small"/>
            <DeleteOutline/>


        </Box>
        {/* /* <List>
            {
                getEmailsService?.response?.map(email=>(
                    <Email/>

                ))
            }
        </List> */ }
        
    </Box> 
    )

}


export default Emails;