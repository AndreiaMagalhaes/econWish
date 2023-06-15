import "./index.css"
import Image from "mui-image"
import { Stamp } from "./stamp"

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Container } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import Stack from '@mui/material/Stack';


import cx from 'clsx';
//import Card from '@material-ui/core/Card';
//import CardMedia from '@material-ui/core/CardMedia';
//import CardContent from '@material-ui/core/CardContent';
import {Button} from '@mui/material'; //'@material-ui/core/Button';
import {ChevronRightRounded }from '@mui/icons-material'; //'@material-ui/icons/ChevronRightRounded';
import { useState } from "react";
//import { useBouncyShadowStyles } from '@mui/material/styles/shadows/bouncy' //'@mui-treasury/styles/shadow/bouncy';



  function ReceiverStamp({name, grade, department}){
    return(
      <div className="mycontainer">
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 1 }}>
                <div className="infos">
                    <div className="name">{name}</div>
                    <div className="department">{department + " " + grade}</div>
                </div>                    
        </Box>
        <Stamp/> 
      </div>
    )
  }
  //<div className="photo_content"/>

  function ReceiverPhoto({imgSrc}){
    return(
      <div className="photo">
        <Image src={imgSrc} duration={0}/>
      </div>
    )
  }

  /*const useStyles = styled(() => ({
    root: {
      maxWidth: 304,
      margin: 'auto',
      boxShadow: 'none',
      borderRadius: 0,
    },
    content: {
      padding: 24,
    },
    cta: {
      marginTop: 24,
      textTransform: 'initial',
    },
  }));*/

  function ContentFront({name, grade, imgSrc, department, onClick}){
    return(
      <CardContent >
          <Box sx={{alignItems:'row',display:'flex'}}> 
            <ReceiverStamp name={name} grade={grade} department={department} sx={{minWidth:250}}/>
            <ReceiverPhoto imgSrc={imgSrc}/>
          </Box>
        <Button color={'primary'} fullWidth onClick={onClick} style={{marginTop:'15px'}}>
          Find Out More <ChevronRightRounded />
        </Button>
      </CardContent>
    )
  }

  function ContentMessage({wish, onClick}){
    return(
      <CardContent sx={{minWidth: '350px', maxWidth: '350px', height:'251px'}}>
      <div style={{ height: "100%", position: "relative" }}>
        <Stack sx={{ height: "100%", justifyContent: "center" }} >
          <Container>
            <Box>
              <Typography>
                {wish}
              </Typography>
            </Box>
          </Container>
        </Stack>
      <IconButton
        aria-label="close"
        sx={{
          position: 'absolute',
          color: (theme) => theme.palette.grey[500],
          right: 15,
          top: -18
        }}
        onClick={onClick}
      >
        <CloseIcon />
      </IconButton>
    </div>
    </CardContent>
    )
  }

  //  export const Card2 = React.memo(function NewsCard() {

  export default function Card2({user}) {
    const [expanded, setExpanded] = React.useState(false);
    const { name, grade, imgSrc, wish, id } = user;
    const department = "Business Administration"; 
    const sender = "Andreia"; 

    //const styles = useStyles();
    //const shadowStyles = useBouncyShadowStyles(); //, shadowStyles.root

    const[showMessage, setShowMessage] = useState(false)
    const handleMessagedClick = () => {
      setShowMessage(!showMessage)
    };

    var cardContent = showMessage ?
    <ContentMessage wish={wish} onClick={handleMessagedClick} /> :
    <ContentFront onClick={handleMessagedClick} name={name} grade={grade} imgSrc={imgSrc} department={department}/>




    return (
      <Card className="card" sx={{ minWidth: '350px', maxWidth: '350px'}} id={id} >
        <div id={`${id}`}></div>
        {cardContent}
      </Card>
    );
  }//);
  //export default Card2
  //cardcontent className={styles.content}
  //button className={styles.cta}



























/////////////////////////////////////////////////////////////////

function Card3({ user }) {
    const { name, department, grade, imgSrc, wish, sender } = user
    return (
        <div className="card">
            <div className="card-content">
                <div className="receiver_infos">
                    <div className="infos">
                        <div className="name">{name}</div>
                        <div className="department">{department + " " + grade}</div>
                    </div>                    
                    <div className="photo">
                        <div className="photo_content" />
                    </div>
                </div>
                <Stamp/>
                <div className="message_part">
                    <div className="years">
                        <div className="year1_bgd">
                            <div className="year1_text">2019</div>
                        </div>
                        <div className="year2_bgd">
                            <div className="year2_text">2023</div>
                        </div>  
                    </div>
                    <div className="wish">{wish + " - " + sender}</div>
                </div>
            </div>
        </div>
    )
  }


  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  
  export function Card22({ user }) {
    const [expanded, setExpanded] = React.useState(false);
    const { name, grade, imgSrc, wish, id } = user;
    const department = "Business Administration"; 
    const sender = "Andreia"; 
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
    return (
      <Card sx={{ minWidth: 300, height: 500, maxWidth: 300, minHeight:500}}>
        <Box sx={{alignItems:'row', display:'flex'}}>
          <ReceiverStamp name={name} grade={grade} department={department}/>
          <ReceiverPhoto imgSrc={imgSrc}/>
        </Box>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 1 }}>
            <div className="message_part">
                    <div className="years">
                        <div className="year1_bgd">
                            <div className="year1_text">2019</div>
                        </div>
                        <div className="year2_bgd">
                            <div className="year2_text">2023</div>
                        </div>  
                    </div>
                </div>
            <Typography paragraph>
            <div className="wish">{wish + " - " + sender}</div>
            </Typography>
            </Box>
          </CardContent>
        </Collapse>
      </Card>
    );
  }




