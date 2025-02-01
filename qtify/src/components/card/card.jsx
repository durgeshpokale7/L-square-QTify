import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import cardImage from "../../assests/image.png";
import styles from "./Card.module.css"; // Import CSS file

function CustomCard({follows,id,image,title}) {
    return (
        
            <div >
            <Card className={styles.card}>
            <Box className={styles.bottomContainer}>
                {/* Image Section */}
                <CardMedia
                    component="img"
                    image={image}
                    title="cardImage"
                    className={styles.image}
                />
                <Chip label={`${follows} Follows`} size="small" className={styles.chip} />
                
                </Box>
                <Typography className={styles.textOutside}>
                New English Songs
                </Typography>
                
            </Card>
            </div>


            

    );
}

export default CustomCard;
