import { Box, Grid } from "@mui/material";
import MemberForm from "../../@views/forms/MemberForm";
import Header from "../../components/Header";

const AddMember = () => {

  

  return (
    
    <Box m="1.5rem 2.5rem">
    <Header
      title="Member Registration"

      subtitle="Add new member to the system"
    />
    <Box m="2.5rem 0rem">
    <Grid item xs={12}>
         <MemberForm/>
        </Grid>
    </Box>
  </Box>
  );
};

export default AddMember;
